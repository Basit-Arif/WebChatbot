
from langchain_astradb import AstraDBVectorStore
from langchain_huggingface import HuggingFaceEmbeddings
import os
from dotenv import load_dotenv
load_dotenv()

model_name = "all-MiniLM-L6-v2"
hf = HuggingFaceEmbeddings(model_name=model_name)

def create_vector_store():
    """
    Initializes the AstraDBVectorStore instance for storing vectors.
    
    Returns:
        AstraDBVectorStore: The configured vector store.
    """
    vector_store = AstraDBVectorStore(
        collection_name="portfolio2",
        embedding=hf,  # Make sure 'hf' is defined in your context as your embedding model
        api_endpoint=os.getenv("api_endpoint"),
        token=os.getenv("token")
    )
    return vector_store

def insert_into_astra_db(data):
    """
    Inserts the formatted document data into Astra DB using the AstraDBVectorStore.
    
    Args:
        data (dict): Contains 'document' (formatted content) and 'uuid' (list of UUIDs).
    """
    print("Data received for insertion:", data)  # Debug print

    # Check if 'document' and 'uuid' keys exist in the data
    documents = data.get("document", [])
    uuids = data.get("uuid", [])
    list_of_document=data.get("list_of_document",[])

    vector_store=create_vector_store()

    # Ensure both lists have the same length
    if len(documents) != len(uuids):
        print("Warning: Mismatched lengths of documents and UUIDs.")
        return None

    


    # Ensure you're passing a list of page contents
    # vector_store.add_documents(documents=list_of_document, ids=uuids)

    return vector_store.as_retriever()
    