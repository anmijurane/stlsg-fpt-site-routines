import json
import os
import sys

file_path = '/Users/anmijurane/sitelseg-dev-proyects/stlsg-fpt-site-routines/src/data/del2.jsonl'

try:
    with open(file_path, 'r') as f:
        content = f.read().strip()

    # It's a comma separated list of objects.
    # Let's fix the content to be a valid JSON array.
    # Remove trailing comma if exists
    if content.endswith(','):
        content = content[:-1]
    
    # Wrap in brackets to form a valid JSON array string
    json_content = f"[{content}]"

    data = json.loads(json_content)

    # Write back as JSONL
    with open(file_path, 'w') as f:
        for item in data:
            f.write(json.dumps(item, ensure_ascii=False) + '\n')

    print("Successfully converted to JSONL")

except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
