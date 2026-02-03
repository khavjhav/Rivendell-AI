# EmailJS Integration Setup

## ✅ What's Been Configured

Your Rivendell AI contact form is now **fully integrated with EmailJS**. When users submit the contact form, two emails are automatically sent:

1. **Admin Email** → `privacy@rivendellai.co.uk` (your team)
2. **User Confirmation Email** → Sent to the user's email address

---

## 🔐 Environment Variables

Your credentials are stored in `.env.local` (never committed to git):

```env
VITE_EMAILJS_SERVICE_ID=service_wjojtji
VITE_EMAILJS_ADMIN_TEMPLATE_ID=template_b1r6x8w
VITE_EMAILJS_USER_TEMPLATE_ID=template_rwwwhcq
VITE_EMAILJS_PUBLIC_KEY=RbGzAWX7KcOx83kFo
VITE_ADMIN_EMAIL=privacy@rivendellai.co.uk
```

**⚠️ IMPORTANT:** The `.env.local` file is in your `.gitignore` and will NOT be pushed to GitHub. Keep this file safe!

---

## 📧 Email Templates in EmailJS

### Template 1: Admin Notification
- **Template ID:** `template_b1r6x8w`
- **Subject:** `⚜ New Inquiry from {{name}}`
- **Sends To:** `privacy@rivendellai.co.uk`
- **Contains:** Inquiry details, company info, service interest, and consent status

### Template 2: User Confirmation
- **Template ID:** `template_rwwwhcq`
- **Subject:** `Your Message Has Reached Rivendell ⚜`
- **Sends To:** Submitter's email address
- **Contains:** Welcome message, next steps, and link to services

---

## 🔄 Form Data Flow

When a user submits the contact form:

```
User Fills Form
    ↓
Form Validates (Zod schema)
    ↓
useSubmitContact Hook Triggered
    ↓
EmailJS Sends 2 Emails:
  ├→ Admin Notification (to privacy@rivendellai.co.uk)
  └→ User Confirmation (to user's email)
    ↓
Success Toast: "Message Sent! ⚜"
Form Resets
```

---

## 📝 Form Fields Sent to EmailJS

| Field | Type | EmailJS Variable |
|-------|------|-----------------|
| Full Name | Required | `{{name}}` |
| Email | Required | `{{email}}` |
| Company | Optional | `{{company}}` |
| Service Interest | Optional | `{{serviceInterest}}` |
| Message | Required | `{{message}}` |
| GDPR Consent | Required | `{{consentGDPR}}` |
| Marketing Consent | Optional | `{{consentMarketing}}` |

---

## 🛠️ How It Works

The contact form now uses **client-side email sending** via `@emailjs/browser`:

1. **No backend needed** - Emails send directly from the browser
2. **GDPR compliant** - Consent tracking and links to policies
3. **Beautiful templates** - HTML emails with Rivendell branding
4. **Automatic replies** - Users get confirmation immediately

### Key Hook: `use-contact.ts`

```typescript
// Sends to both admin and user
await emailjs.send(serviceId, adminTemplateId, templateData);
await emailjs.send(serviceId, userTemplateId, templateData);
```

---

## 🧪 Testing the Form

1. Go to `http://localhost:5173/contact`
2. Fill out the contact form
3. Check both:
   - Your admin email (`privacy@rivendellai.co.uk`) for the admin notification
   - The email address you entered in the form for the confirmation

---

## 🔗 EmailJS Dashboard

- **Service ID:** `service_wjojtji`
- **Dashboard:** https://dashboard.emailjs.com
- **View sent emails:** Log in and check "Sent" section

---

## ⚠️ Important Notes

- **Public Key is SAFE to expose** - It's meant for client-side use
- **Service ID is SAFE to expose** - EmailJS uses these for identification
- **Keep `.env.local` secure** - Never push to git or share publicly
- **Rate Limiting:** EmailJS free tier allows up to 200 emails/month
- **Spam Protection:** Use reCAPTCHA if needed (not configured yet)

---

## 🚀 Next Steps (Optional)

If you want to enhance the form:

1. **Add reCAPTCHA** - Prevent spam submissions
2. **Database Logging** - Store submissions in database in addition to emails
3. **Email Templates in CMS** - Edit templates in EmailJS dashboard without code changes
4. **Webhook Integration** - Trigger actions when forms are submitted

---

## 📞 Support

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Contact Form:** `/contact` page at http://localhost:5173/contact
- **Admin Email:** Check `privacy@rivendellai.co.uk`

Happy sending! ⚜
