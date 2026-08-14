# Titan Email Setup & Anti-Spam Configuration Guide

This guide details the complete configuration for **Titan Email** (`https://secureserver.titan.email/mail/`) for **The Byte Bandits**, using `support@thebytebandits.com` as an alias of the primary mailbox `info@thebytebandits.com`, with domain DNS managed in **Namecheap**.

Follow these instructions to ensure **100% email deliverability** directly into recipient **Inboxes (not Spam)**.

---

## 1. Account & Infrastructure Overview

| Component | Detail | Description |
| :--- | :--- | :--- |
| **Webmail Portal** | `https://secureserver.titan.email/mail/` | Titan Business Webmail |
| **Primary Mailbox (Login)** | `info@thebytebandits.com` | Primary account used for SMTP authentication (username & password). |
| **Email Alias (Public)** | `support@thebytebandits.com` | Alias tied to `info@thebytebandits.com`. Used as `From:` and `Reply-To:`. |
| **SMTP Server** | `smtp.titan.email` | Titan Outgoing Mail Server |
| **SMTP Port** | `465` (SSL) or `587` (TLS) | Standard SMTP ports |
| **DNS Provider** | Namecheap | Where domain DNS (SPF, DKIM, DMARC, MX) is configured. |

---

## 2. Titan Email Settings (Outside the Code)

### Step 2.1: Verify Alias in Titan Control Panel
1. Log into your **Titan Email Control Panel** (accessible via your GoDaddy / Namecheap portal or Titan Admin).
2. Navigate to **Email Accounts** → Select `info@thebytebandits.com`.
3. Under **Aliases**, confirm that `support@thebytebandits.com` is added and linked to `info@thebytebandits.com`.
4. Under **Preferences / Identities / Send As**, ensure `support@thebytebandits.com` is enabled as a sending identity so outgoing emails can send with that name.

---

## 3. Namecheap DNS Configuration (Anti-Spam & Deliverability)

Log into your **Namecheap Dashboard** → **Domain List** → Click **Manage** next to `thebytebandits.com` → Open the **Advanced DNS** tab.

Add or update the following records:

### 3.1. MX Records (Incoming Mail Routing)
Set the mail routing to Titan Email:
- **Record 1**:
  - **Type**: `MX Record`
  - **Host**: `@`
  - **Value**: `mx1.titan.email`
  - **Priority**: `10`
- **Record 2**:
  - **Type**: `MX Record`
  - **Host**: `@`
  - **Value**: `mx2.titan.email`
  - **Priority**: `20`

---

### 3.2. SPF Record (Sender Policy Framework - Critical for Spam Prevention)
Authorizes Titan servers to send emails on behalf of `thebytebandits.com`:
- **Type**: `TXT Record`
- **Host**: `@`
- **Value**:
  ```text
  v=spf1 include:spf.titan.email ~all
  ```
- **TTL**: `Automatic` (or `1 hour`)

> [!IMPORTANT]
> Ensure you only have **one** SPF TXT record on `@`. If you have an existing SPF record, merge it so there is only one `v=spf1 ...` record.

---

### 3.3. DKIM Record (DomainKeys Identified Mail - Cryptographic Signature)
Proves that emails sent from `thebytebandits.com` are authentic:
1. In your **Titan Control Panel** → **DNS Settings / Email Authentication**, locate your domain's DKIM TXT record.
2. In **Namecheap Advanced DNS**, add:
   - **Type**: `TXT Record`
   - **Host**: `titan1._domainkey`
   - **Value**: *(Copy the exact public key provided by Titan, e.g. `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQE...`)*
   - **TTL**: `Automatic`

---

### 3.4. DMARC Record (Domain-based Message Authentication)
Tells recipient servers (Gmail, Yahoo, Outlook) how to handle unauthenticated mail and establishes domain reputation:
- **Type**: `TXT Record`
- **Host**: `_dmarc`
- **Value**:
  ```text
  v=DMARC1; p=none; rua=mailto:support@thebytebandits.com; sp=none; aspf=r;
  ```
- **TTL**: `Automatic`

---

## 4. Server Environment Variables (`.env.local`)

On your production server (e.g. EC2 `/home/ec2-user/.env.local` or local `.env.local`), configure:

```ini
# ==============================================================================
# TITAN EMAIL SMTP CONFIGURATION
# ==============================================================================

# Titan Outgoing SMTP Server
SMTP_HOST=smtp.titan.email
SMTP_PORT=465
SMTP_SECURE=true

# Authentication: Use Primary Account Mailbox credentials
SMTP_USER=info@thebytebandits.com
SMTP_PASS=YourTitanEmailPasswordHere

# Sender & Notifications (Alias)
SMTP_FROM=support@thebytebandits.com
OWNER_EMAIL=support@thebytebandits.com

# Backend Database API URL
BACKEND_API_URL=http://localhost:4000/api
```

---

## 5. Verification & Deliverability Checklist

1. **Check DNS Authentication**:
   - Go to [MXToolbox SPF Lookup](https://mxtoolbox.com/spf.aspx) → Enter `thebytebandits.com` → Verify `include:spf.titan.email` passes.
   - Go to [MXToolbox DKIM Lookup](https://mxtoolbox.com/dkim.aspx) → Enter `thebytebandits.com` with selector `titan1` → Verify it returns a valid DKIM key.
   - Go to [MXToolbox DMARC Lookup](https://mxtoolbox.com/dmarc.aspx) → Enter `thebytebandits.com` → Verify DMARC is active.

2. **Test Spam Score (Mail-Tester)**:
   - Visit [mail-tester.com](https://www.mail-tester.com/) and copy the temporary test email.
   - Fill out and submit the contact form on your website with that test email.
   - Check the score on Mail-Tester — verify you receive a score of **9/10 or 10/10**.

3. **Verify Inbox Delivery**:
   - Submit a live test from your `/contact` page.
   - Check [https://secureserver.titan.email/mail/](https://secureserver.titan.email/mail/) to confirm the lead notification email arrives in your inbox.
   - Verify the auto-reply confirmation lands in the submitter's **Primary Inbox** (not Spam).
