from langchain.chains import RetrievalQA
import os 
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from .datainserting import insert_into_astra_db
from .dataingestion import load_and_format_docx

load_dotenv()
os.environ["OPENAI_API_KEY"]=os.getenv("OPEN_API_KEY")


def initialize_qa():
    current_directory = os.getcwd()
    # Initialize your retriever here (assuming you have it set up)
    retreiver=insert_into_astra_db(load_and_format_docx(f"{current_directory}/portfolio_text.docx"))  # Your method for retrieving documents
    # Initialize the QA chain
    qa = RetrievalQA.from_chain_type(
        chain_type='stuff',
        llm=ChatOpenAI(model="gpt-3.5-turbo"), retriever=retreiver)
    
    return qa

def answer_query(qa, query):
    """
    Answers a user query using the initialized RetrievalQA chain.
    
    Args:
        qa (RetrievalQA): The initialized RetrievalQA chain.
        query (str): The user's query.
        
    Returns:
        str: The answer to the user's query.
    """
    return qa.invoke(query)





