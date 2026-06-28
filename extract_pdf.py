from pypdf import PdfReader

pdf_path = r"C:\Users\EmilShain\Downloads\Elegance Fitness Club_Cpmpany Profile Draft.pdf"

reader = PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}\n")

for i, page in enumerate(reader.pages):
    text = page.extract_text()
    print(f"--- PAGE {i+1} ---")
    print(text)
    print("\n")
