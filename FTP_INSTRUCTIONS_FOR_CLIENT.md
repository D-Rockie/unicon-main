# FTP Instructions for Updating Job Listings

## Overview
You can update job listings on your website by uploading a `jobs.json` file via FTP. This file contains all job postings in a structured format.

## What You Need
1. **FTP Client Software** (recommended: FileZilla - free download from https://filezilla-project.org/)
2. **FTP Credentials** (provided by your hosting provider)
   - FTP Host/Server
   - Username
   - Password
   - Port (usually 21)

## Step-by-Step Instructions

### 1. Install FileZilla (or any FTP client)
- Download FileZilla from the official website
- Install it on your computer

### 2. Connect to Your Server
- Open FileZilla
- Enter your FTP credentials:
  - Host: `ftp.yourwebsite.com` (provided by hosting)
  - Username: `your-username`
  - Password: `your-password`
  - Port: `21`
- Click "Quickconnect"

### 3. Navigate to the Correct Folder
- Once connected, navigate to your website's public folder
- Usually it's: `/public_html/` or `/www/` or `/htdocs/`
- Look for the `jobs.json` file

### 4. Update the jobs.json File

#### Option A: Edit Directly
1. Right-click on `jobs.json`
2. Select "View/Edit"
3. Make your changes
4. Save the file
5. FileZilla will automatically upload the changes

#### Option B: Upload New File
1. Edit `jobs.json` on your computer
2. Drag and drop it to the server folder
3. Confirm to overwrite the existing file

## JSON File Format

The `jobs.json` file must follow this exact structure:

```json
[
  {
    "id": 1,
    "title": "Job Title Here",
    "location": "City, Country or Remote",
    "type": "Full-time / Part-time / Contract",
    "description": "Detailed job description goes here. Explain the role, responsibilities, and what the candidate will be doing.",
    "requirements": [
      "First requirement",
      "Second requirement",
      "Third requirement",
      "Add as many as needed"
    ],
    "posted_date": "2024-10-03"
  },
  {
    "id": 2,
    "title": "Another Job Title",
    "location": "Another Location",
    "type": "Full-time",
    "description": "Another job description...",
    "requirements": [
      "Requirement 1",
      "Requirement 2"
    ],
    "posted_date": "2024-10-01"
  }
]
```

## Important Rules

1. **Always use unique IDs** - Each job must have a different `id` number
2. **Use proper date format** - Dates must be in `YYYY-MM-DD` format (e.g., 2024-10-03)
3. **Keep the structure** - Don't remove commas, brackets, or quotes
4. **Test your JSON** - Use https://jsonlint.com/ to validate before uploading
5. **Backup first** - Always download the current file before making changes

## Adding a New Job

1. Copy an existing job entry
2. Change the `id` to a new unique number
3. Update all fields (title, location, type, description, requirements, date)
4. Make sure to add a comma after the previous job entry
5. Save and upload

## Removing a Job

1. Find the job entry you want to remove
2. Delete the entire job object (from `{` to `}`)
3. Remove the comma if it's the last entry
4. Save and upload

## Common Mistakes to Avoid

❌ **Missing commas** between job entries
❌ **Wrong date format** (use YYYY-MM-DD)
❌ **Duplicate IDs**
❌ **Missing quotes** around text values
❌ **Forgetting to save** before uploading

## Need Help?

If you encounter any issues:
1. Validate your JSON at https://jsonlint.com/
2. Check that all brackets and commas are in place
3. Make sure the file is named exactly `jobs.json`
4. Contact your web developer for assistance

## Quick Reference

**File Location:** `/public_html/jobs.json` (or similar)
**File Name:** `jobs.json` (case-sensitive)
**Format:** JSON
**Encoding:** UTF-8

---

**Last Updated:** October 2024
