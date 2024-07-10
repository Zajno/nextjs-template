import { UsersPage as PageSettings } from '@/sitemap/pages';
import { defaultLang } from '@/sitemap/copyright';
import { createMetaData } from '@/utils/createMetadata';
import { Suspense } from 'react';
import { TableSection } from '@/components/sections/users/tableSection';
// import { fetchUsers } from '@/services/api/data';
// import { Table } from '@/components/common/Table';

const copyright = PageSettings.copy[defaultLang];

export const metadata = createMetaData(PageSettings.title, PageSettings.description);

// const TABLE_COLUMNS = ['Name', 'Username', 'Email', 'Website'];

export default async function Page() {
    // const users = await fetchUsers();

    // const tableRows = users.map((user) => [user.name, user.username, user.email, user.website]);

    return (
        <main>
            <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 className="title-h1">
                    {copyright.heroSection.title}
                </h1>

                <h2 className="title-h2">
                    {copyright.heroSection.subtitle}
                </h2>
            </div>

            {/* Example of blocking behavior */ }
            {/* <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Table
                    columns={TABLE_COLUMNS}
                    rows={tableRows}
                />
            </div> */}

            {/* Example of streaming */ }
            <Suspense fallback={<div className="desc-2">loading table...</div>}>
                <TableSection />
            </Suspense>
        </main>
    );
}
