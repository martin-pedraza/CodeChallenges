'''
Task

You are given an HTML code snippet of  lines.
Your task is to print start tags, end tags and empty tags separately.

Format your results in the following way:

Start : Tag1
End   : Tag1
Start : Tag2
-> Attribute2[0] > Attribute_value2[0]
-> Attribute2[1] > Attribute_value2[1]
-> Attribute2[2] > Attribute_value2[2]
Start : Tag3
-> Attribute3[0] > None
Empty : Tag4
-> Attribute4[0] > Attribute_value4[0]
End   : Tag3
End   : Tag2
Here, the -> symbol indicates that the tag contains an attribute. 
It is immediately followed by the name of the attribute and the attribute value.
The > symbol acts as a separator of the attribute and the attribute value.

If an HTML tag has no attribute then simply print the name of the tag.
If an attribute has no attribute value then simply print the name of the attribute value as None.

Note: Do not detect any HTML tag, attribute or attribute value inside the HTML comment tags (<!-- Comments -->).
Comments can be multiline as well.

'''
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super(MyHTMLParser, self).__init__()
        self.inside_comment = False

    def handle_comment(self, data):
        if "<!--" in data:
            self.inside_comment = True
        if "-->" in data:
            self.inside_comment = False
        
    def handle_starttag(self, tag, attrs):
        if not self.inside_comment:
            print("Start :", tag)
            for attr in attrs:
                print("->", attr[0], ">", attr[1])
        
    def handle_endtag(self, tag):
        if not self.inside_comment:
            print("End   :", tag)
        
    def handle_startendtag(self, tag, attrs):
        if not self.inside_comment:
            print("Empty :", tag)
            for attr in attrs:
                print("->", attr[0], ">", attr[1])
        
n = int(input())

html_code = "".join([input() for _ in range(n)])

parser = MyHTMLParser()
parser.feed(html_code)