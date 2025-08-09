'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PilotApplicantSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export async function submitPilotApplication(prevState: any, formData: FormData) {
  const validatedFields = PilotApplicantSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed.',
    };
  }

  const { name, email } = validatedFields.data;

  try {
    // 1. Store user information in Firestore
    await addDoc(collection(db, 'pilot-applicants'), {
      name: name,
      email: email,
      signedUpAt: serverTimestamp(),
    });

    // 2. Stub for sending notification email to admin
    console.log(`--- STUB: Sending email to admin (hereiamnow@gmail.com) ---`);
    console.log(`New pilot program applicant:`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`----------------------------------------------------------`);
    // TODO: Implement actual email sending logic here
    // e.g., using a service like Resend, SendGrid, or Nodemailer.

    // 3. Stub for sending thank you email to the user
    console.log(`--- STUB: Sending thank you email to user (${email}) ---`);
    console.log(`Subject: Thank you for joining the Humidor Hub Pilot Program!`);
    console.log(`Hi ${name},`);
    console.log(`Thank you for your interest. We've received your application and will be in touch if you're selected.`);
    console.log(`----------------------------------------------------------`);
    // TODO: Implement actual email sending logic here

    return {
        success: true,
        message: 'Thank you! Your application has been submitted.',
    }
  } catch (error) {
    console.error('Error submitting application:', error);
    return {
      errors: null,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
