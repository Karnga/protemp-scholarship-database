import { MemberField, StudentField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice, createMember } from '@/app/lib/actions';

export default function Form({ students }: { students: MemberField[] }) {
  return (
    <form action={createMember}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            First Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="firstName"
                name="firstName"
                type="text"
                //step="0.01"
                placeholder="Enter first name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Middle Name */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Middle Name (Optional)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="middleName"
                name="middleName"
                type="text"
                //step="0.01"
                placeholder="Enter middle name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Last Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="lastName"
                name="lastName"
                type="text"
                //step="0.01"
                placeholder="Enter last name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <fieldset>
            <legend className="mb-2 block text-sm font-medium">
              Gender
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="male"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    Male <UserCircleIcon className="h-4 w-4" />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value="female"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="female"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    Female <UserCircleIcon className="h-4 w-4" />
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Date of birth */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Date of Birth
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                //step="0.01"
                //placeholder="Enter address"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* County of Origin */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            County of Origin
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="county"
                name="county"
                type="text"
                //step="0.01"
                placeholder="Enter county of origin"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* District of Origin */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            District of Origin
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="district"
                name="district"
                type="text"
                //step="0.01"
                placeholder="Enter district of origin"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Contact number */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Contact Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="contactNumber"
                name="contactNumber"
                type="text"
                //step="0.01"
                placeholder="Enter contact number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Email address */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Email Address
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                //step="0.01"
                placeholder="Enter email address"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Home address */}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Home Address
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                name="address"
                type="text"
                //step="0.01"
                placeholder="Enter home address"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Emergency contact name*/}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Emergency Contact Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="emergencyContactName"
                name="emergencyContactName"
                type="text"
                //step="0.01"
                placeholder="Enter emergency contact name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Emergency contact number*/}
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Emergency Contact Number
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="emergencyContactNumber"
                name="emergencyContactNumber"
                type="text"
                //step="0.01"
                placeholder="Enter emergency contact number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/tuitions"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Member</Button>
      </div>
    </form>
  );
}
