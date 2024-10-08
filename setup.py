from setuptools import find_packages,setup
from typing import List

def get_requirement()->List[str]:

    requirement_list:List[str] =[]
    

    return requirement_list


setup(
    name="webchatbot",
    version="0.0.1",
    author_name="Abdul Basit",
    author_email="basitarif235@gmail.com",
    packages=find_packages(),
    install_requires=get_requirement()
)