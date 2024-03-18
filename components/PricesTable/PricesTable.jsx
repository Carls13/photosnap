import Image from 'next/image';
import { TableContainer, TableTitle, Table, TableHead, TableBody } from './PricesTable.styles';

export const PricesTable = () => {
    return (
        <TableContainer>
            <TableTitle>COMPARE</TableTitle>
            <Table>
                <TableHead>
                    <tr>
                        <th>THE FEATURES</th>
                        <th>BASIC</th>
                        <th>PRO</th>
                        <th>BUSINESS</th>  
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <th>UNLIMITED STORY POSTING</th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                    <tr>
                        <th>UNLIMITED PHOTO UPLOAD</th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                    <tr>
                        <th>EMBEDDING CUSTOM CONTENT</th>
                        <th>
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                    <tr>
                        <th>CUSTOMIZE METADATA</th>
                        <th>
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                    <tr>
                        <th>ADVANCED METRICS</th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                    <tr>
                        <th>PHOTO DOWNLOADS</th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                    <tr>
                        <th>SEARCH ENGINE INDEXING</th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                    <tr>
                        <th>CUSTOM ANALYTICS</th>
                        <th>
                        </th>
                        <th>
                        </th>
                        <th>
                            <Image src="/assets/pricing/desktop/check.svg" alt="Check" width={16} height={12} />
                        </th>
                    </tr>
                </TableBody>
            </Table>
        </TableContainer>
    );
};