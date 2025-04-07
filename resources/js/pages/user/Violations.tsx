import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { columns, Payment } from '@/components/violations/columns';
import { DataTable } from '@/components/violations/data-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Violations',
        href: '/violations',
    },
];

export default function Violations({violations}: {violations: Payment[]}) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Violations" />
            <div className='container mx-auto py-10'>
                <DataTable columns={columns} data={violations} />
            </div>
        </AppLayout>
    );
}
