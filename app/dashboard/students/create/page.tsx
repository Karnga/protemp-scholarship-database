import Form from '@/app/ui/students/create-form';
import Breadcrumbs from '@/app/ui/tuitions/breadcrumbs';
import { fetchStudents } from '@/app/lib/data';
 
export default async function Page() {
  const students = await fetchStudents();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Members', href: '/dashboard/students' },
          {
            label: 'Add Member',
            href: '/dashboard/students/create',
            active: true,
          },
        ]}
      />
      <Form students={students} />
    </main>
  );
}