'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  gender: z.enum(['male', 'female']),
  birthDate: z.string(),
  county: z.enum(['Montserrado', 'Grand Bassa', 'Bong', 'Nimba', 'Lofa', 'Margibi', 'Grand Cape Mount', 'Rivercess', 'Grand Kru', 'Maryland', 'Gbarpolu']),
  district: z.enum(['District #1', 'District #2', 'District #3', 'District #4', 'District #5', 'District #6', 'District #7', 'District #8', 'District #9', 'District #10']),
  address: z.string(),
  contactNumber: z.string(),
  email: z.string(),
  emergencyName: z.string(),
  emergencyNumber: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const MemberSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  gender: z.enum(['male', 'female']),
  birthDate: z.string(),
  county: z.enum(['Montserrado', 'Grand Bassa', 'Bong', 'Nimba', 'Lofa', 'Margibi', 'Grand Cape Mount', 'Rivercess', 'Grand Kru', 'Maryland', 'Gbarpolu']),
  district: z.enum(['District #1', 'District #2', 'District #3', 'District #4', 'District #5', 'District #6', 'District #7', 'District #8', 'District #9', 'District #10']),
  address: z.string(),
  contactNumber: z.string(),
  email: z.string(),
  emergencyContactName: z.string(),
  emergencyContactNumber: z.string(),
  date: z.string(),
});

const CreateMember = MemberSchema.omit({ id: true, date: true });
const UpdateMember = FormSchema.omit({ id: true, date: true });

const CreateDue = FormSchema.omit({ id: true, date: true });
const UpdateDue = FormSchema.omit({ id: true, date: true });

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function createMember(formData: FormData) {
  const {firstName, middleName, lastName, gender, birthDate, county, district, address, contactNumber, email, emergencyContactName, emergencyContactNumber } = CreateMember.parse({
    firstName: formData.get('firstName'),
    middleName: formData.get('middleName'),
    lastName: formData.get('lastName'),
    gender: formData.get('gender'),
    birthDate: formData.get('birthDate'),
    county: formData.get('county'),
    district: formData.get('district'),
    address: formData.get('address'),
    contactNumber: formData.get('contactNumber'),
    email: formData.get('email'),
    emergencyContactName: formData.get('emergencyContactName'),
    emergencyContactNumber: formData.get('emergencyContactNumber'),
  });
  //const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

    await sql`
      INSERT INTO members (first_name, middle_name, last_name, gender, birth_date, county, district, home_address, contact_number, email_address, emergency_name, emergency_number, date_created)
      VALUES (${firstName}, ${middleName}, ${lastName}, ${gender}, ${birthDate}, ${county}, ${district}, ${address}, ${contactNumber}, ${email}, ${emergencyContactName}, ${emergencyContactNumber}, ${date})
    `;

  revalidatePath('/dashboard/tuitions');
  redirect('/dashboard/tuitions');
}

export async function updateMember(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
 
  revalidatePath('/dashboard/tuitions');
  redirect('/dashboard/tuitions');
}
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;

  revalidatePath('/dashboard/tuitions');
  redirect('/dashboard/tuitions');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
 
  revalidatePath('/dashboard/tuitions');
  redirect('/dashboard/tuitions');
}

export async function deleteInvoice(id: string) {
  //throw new Error('Failed to Delete Invoice');
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/tuitions');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
