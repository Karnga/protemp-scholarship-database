import Form from '@/app/ui/tuitions/create-form';
import Breadcrumbs from '@/app/ui/tuitions/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tuitions', href: '/dashboard/tuitions' },
          {
            label: 'Create Payment ',
            href: '/dashboard/tuitions/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}