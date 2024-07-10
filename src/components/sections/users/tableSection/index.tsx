import { fetchUsers } from '@/services/api/data';
import './style.sass';
import React from 'react';
import { Table } from '@/components/common/Table';

type Props = {
 //
};

const TABLE_COLUMNS = ['Name', 'Username', 'Email', 'Website'];

export const TableSection = async (props: Props) => {
    const users = await fetchUsers();

    const tableRows = users.map((user) => [user.name, user.username, user.email, user.website]);

    return (
        <div className="table-section">
            <Table
                columns={TABLE_COLUMNS}
                rows={tableRows}
            />
        </div>
    );
};
