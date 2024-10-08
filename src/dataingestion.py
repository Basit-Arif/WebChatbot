import re
from docx import Document as Dt
from langchain_core.documents import Document as Langchain_Document
import os
from uuid import uuid4

def allowed_file(file_path):
    """Check if the file has a valid extension (.docx)."""
    return file_path.lower().endswith('.docx')

def load_docx(file_path):
    """Loads a .docx file and extracts its text content."""
    if not allowed_file(file_path):
        raise ValueError("Invalid file format. Only .docx files are allowed.")
    
    doc = Dt(file_path)
    full_text = [para.text for para in doc.paragraphs]  # Extract paragraphs
    return "\n\n".join(full_text)  # Join paragraphs with newline

def split_document_by_paragraphs(document_content):
    """Splits document content into paragraphs based on multiple newline characters."""
    paragraphs = re.split(r'\n{2,}', document_content)  # Split by multiple newlines
    return [para.strip() for para in paragraphs if para.strip()]  # Clean up

def convert_to_page_content(paragraphs):
    """Converts paragraphs to the desired page_content and metadata format."""
    documents = [
        Langchain_Document(
            page_content=paragraph,
            metadata={"source": f"Paragraph {idx + 1}"}
        )
        for idx, paragraph in enumerate(paragraphs)
    ]
    return documents

def load_and_format_docx(docx_file_path):
    """Loads the document, splits it into paragraphs, and formats it with UUIDs."""
    if os.path.exists(docx_file_path):
        try:
            document_content = load_docx(docx_file_path)
            paragraphs = split_document_by_paragraphs(document_content)
            formatted_content = convert_to_page_content(paragraphs)
            uuids = [str(uuid4()) for _ in formatted_content]
            list_of_document=[document for document in formatted_content]

            return {
                "list_of_document":list_of_document,
                "document": formatted_content,
                "uuid": uuids
            }
        except ValueError as e:
            print(f"Error loading document: {e}")
            return None
    else:
        print(f"File not found: {docx_file_path}")
        return None
