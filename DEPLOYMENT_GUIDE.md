# Deployment Guide - FTP-Based Job Listings

## What We've Implemented

Your website now uses a **simple JSON file** (`jobs.json`) to manage job listings. This allows your client to update jobs directly via FTP without needing database access.

## How It Works

1. **jobs.json file** is stored in the `public` folder
2. **Website reads** this file when users visit the Jobs page
3. **Client updates** the file via FTP to add/remove/edit jobs
4. **Changes appear immediately** on the website (no rebuild needed)

## Deployment Steps

### Step 1: Build Your Website

```bash
npm run build
```

This creates a `dist` folder with all your website files.

### Step 2: Upload to Your Hosting

You need a web hosting service that supports:
- Static file hosting
- FTP access

**Recommended Hosting Options:**
- **Hostinger** (cheap, good FTP support)
- **Bluehost**
- **SiteGround**
- **Netlify** (free, but FTP alternative needed)
- **Vercel** (free, but FTP alternative needed)

### Step 3: Upload Files via FTP

1. Get FTP credentials from your hosting provider
2. Use FileZilla or any FTP client
3. Upload everything from the `dist` folder to your hosting's public folder (usually `/public_html/` or `/www/`)
4. Make sure `jobs.json` is in the root of your public folder

### Step 4: Verify jobs.json Location

After uploading, the file structure should look like:
```
/public_html/
  ├── index.html
  ├── assets/
  ├── jobs.json  ← This file must be here
  └── other files...
```

### Step 5: Test

Visit your website and go to the Jobs page. You should see the sample jobs.

## Giving FTP Access to Your Client

### Option 1: Main FTP Account (Not Recommended)
- Give them your main hosting FTP credentials
- **Risk:** They can access/delete everything

### Option 2: Create a Separate FTP User (Recommended)
Most hosting providers allow you to create additional FTP users with limited access:

1. Log into your hosting control panel (cPanel, Plesk, etc.)
2. Find "FTP Accounts" or "FTP Users"
3. Create a new FTP user
4. Set their home directory to `/public_html/` (or wherever jobs.json is)
5. Give them read/write permissions only for that folder
6. Provide them with:
   - FTP Host: `ftp.yourwebsite.com`
   - Username: `client-username`
   - Password: `secure-password`
   - Port: `21`

### Option 3: Use SFTP (More Secure)
If your hosting supports SFTP (Secure FTP):
- Use port 22 instead of 21
- More secure than regular FTP
- Works the same way

## Alternative: Web-Based File Manager

If you don't want to give FTP access, many hosting providers offer a web-based file manager:

1. Create a separate login for your client in cPanel
2. They can edit `jobs.json` directly through the browser
3. No FTP software needed

## Updating Jobs - Client Workflow

1. Client connects via FTP
2. Downloads `jobs.json`
3. Edits it (add/remove/update jobs)
4. Validates JSON at https://jsonlint.com/
5. Uploads the updated file
6. Changes appear on website immediately

## Troubleshooting

### Jobs not showing?
- Check if `jobs.json` is in the correct location
- Verify the JSON is valid (use jsonlint.com)
- Check browser console for errors
- Clear browser cache

### FTP connection failed?
- Verify FTP credentials
- Check if firewall is blocking port 21
- Try passive mode in FileZilla
- Contact hosting support

### Changes not appearing?
- Clear browser cache (Ctrl + Shift + R)
- Check if the file was actually uploaded
- Verify file permissions (should be 644)

## Security Tips

1. **Use strong passwords** for FTP accounts
2. **Create separate FTP users** - don't share main account
3. **Limit permissions** - only give access to necessary folders
4. **Use SFTP** if available (more secure)
5. **Regular backups** - download jobs.json regularly
6. **Monitor access** - check FTP logs occasionally

## Future Improvements

If the client wants a better solution later, you can:
1. Build an admin panel for them to edit jobs through a web interface
2. Use a headless CMS (like Strapi or Contentful)
3. Implement a simple backend with authentication

## Support

Provide your client with:
- `FTP_INSTRUCTIONS_FOR_CLIENT.md` file
- FTP credentials
- Your contact info for technical support

---

**Current Setup:**
- ✅ No database required
- ✅ Simple JSON file management
- ✅ FTP-based updates
- ✅ Immediate changes (no rebuild)
- ✅ Easy for non-technical users
