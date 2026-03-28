#!/usr/bin/env python3
"""Generate a professional CV PDF from cv-data.yaml using WeasyPrint."""

import yaml
from weasyprint import HTML
from datetime import date


def load_cv_data(yaml_path="cv-data.yaml"):
    with open(yaml_path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def build_html(data):
    contact = data["contact"]
    profile = data["profile"].strip()
    knowledge_items = data["knowledge_base"]
    experiences = data["experience"]
    educations = data["education"]

    knowledge_html = ""
    for item in knowledge_items:
        knowledge_html += f'<span class="skill-tag">{item}</span>\n'

    experience_html = ""
    for exp in experiences:
        details_html = ""
        for detail in exp.get("details", []):
            details_html += f"<li>{detail.strip()}</li>\n"
        experience_html += f"""
        <div class="experience-item">
          <div class="exp-header">
            <div class="exp-title-company">
              <span class="exp-title">{exp['title']}</span>
              <span class="exp-company">{exp['company']}</span>
            </div>
            <span class="exp-period">{exp['period']}</span>
          </div>
          <p class="exp-description">{exp['description'].strip()}</p>
          <ul class="exp-details">
            {details_html}
          </ul>
        </div>
        """

    education_html = ""
    for edu in educations:
        education_html += f"""
        <div class="education-item">
          <span class="edu-degree">{edu['degree']}</span>
          <span class="edu-institution">{edu['institution']}</span>
        </div>
        """

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {{
    size: A4;
    margin: 10mm 14mm 10mm 14mm;
  }}
  * {{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }}
  body {{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 8.5pt;
    color: #2d2d2d;
    line-height: 1.35;
  }}
  .header {{
    text-align: center;
    margin-bottom: 6px;
    padding-bottom: 5px;
    border-bottom: 2px solid #1a5276;
  }}
  .header h1 {{
    font-size: 20pt;
    color: #1a5276;
    letter-spacing: 1.5px;
    margin-bottom: 2px;
    text-transform: uppercase;
  }}
  .header .title {{
    font-size: 10pt;
    color: #555;
    margin-bottom: 4px;
  }}
  .contact-info {{
    font-size: 8.5pt;
    color: #555;
  }}
  .contact-info span {{
    margin: 0 5px;
  }}
  .contact-info .separator {{
    color: #1a5276;
  }}
  .section {{
    margin-top: 7px;
  }}
  .section-title {{
    font-size: 10pt;
    font-weight: bold;
    color: #1a5276;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #1a5276;
    padding-bottom: 1px;
    margin-bottom: 4px;
  }}
  .profile-text {{
    text-align: justify;
    font-size: 8.5pt;
    line-height: 1.4;
  }}
  .skills-container {{
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
  }}
  .skill-tag {{
    background-color: #eaf2f8;
    color: #1a5276;
    padding: 1px 6px;
    border-radius: 3px;
    font-size: 7.5pt;
    border: 1px solid #aed6f1;
  }}
  .experience-item {{
    margin-bottom: 5px;
  }}
  .exp-header {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }}
  .exp-title {{
    font-weight: bold;
    font-size: 9pt;
    color: #1a5276;
  }}
  .exp-company {{
    font-size: 8.5pt;
    color: #555;
    margin-left: 5px;
  }}
  .exp-company::before {{
    content: "| ";
    color: #aaa;
  }}
  .exp-period {{
    font-size: 8pt;
    color: #777;
    white-space: nowrap;
  }}
  .exp-description {{
    font-style: italic;
    font-size: 8pt;
    color: #555;
    margin: 1px 0;
  }}
  .exp-details {{
    margin-left: 14px;
    font-size: 8pt;
  }}
  .exp-details li {{
    margin-bottom: 0px;
  }}
  .education-item {{
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }}
  .edu-degree {{
    font-weight: bold;
    font-size: 8.5pt;
  }}
  .edu-institution {{
    font-size: 8pt;
    color: #555;
  }}
</style>
</head>
<body>
  <div class="header">
    <h1>{contact['name']}</h1>
    <div class="title">{contact['title']}</div>
    <div class="contact-info">
      <span>{contact['phone']}</span>
      <span class="separator">|</span>
      <span>{contact['email']}</span>
      <span class="separator">|</span>
      <span>{contact['location']}</span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Profile</div>
    <p class="profile-text">{profile}</p>
  </div>

  <div class="section">
    <div class="section-title">Knowledge Base</div>
    <div class="skills-container">
      {knowledge_html}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Experience</div>
    {experience_html}
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    {education_html}
  </div>
</body>
</html>"""
    return html


def generate_pdf():
    data = load_cv_data()
    html_content = build_html(data)
    today = date.today().strftime("%Y-%m-%d")
    output_filename = f"SAMET-KIZILTAS-CV-{today}.pdf"
    HTML(string=html_content).write_pdf(output_filename)
    print(f"PDF generated: {output_filename}")
    return output_filename


if __name__ == "__main__":
    generate_pdf()
