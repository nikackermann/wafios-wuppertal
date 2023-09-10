import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from '@nextui-org/react';
import { Chip } from '@nextui-org/react';

export default function CardComponent() {
    return (
        <div className="mb-6">
            <div className="mb-6">
                <Card>
                    <CardHeader>
                        <div className="m-auto text-center">
                            <p>Day 1 - Sept. 20th</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Table
                            removeWrapper
                            hideHeader
                            aria-label="Example static collection table"
                        >
                            <TableHeader>
                                <TableColumn className="">Time</TableColumn>
                                <TableColumn>Description</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1" className="justify-center">
                                    <TableCell className="whitespace-nowrap">
                                        4:00 PM
                                    </TableCell>
                                    <TableCell>
                                        HC 6-75A rotary press with patented
                                        Pneumatic Transport System (PTS).
                                    </TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell>4:30 PM</TableCell>
                                    <TableCell>
                                        H 650 6-station press for the production
                                        of high-precision formed parts.
                                    </TableCell>
                                </TableRow>
                                <TableRow key="3">
                                    <TableCell>5:00 PM</TableCell>
                                    <TableCell>
                                        HT 5-40 cold former with oscillating die
                                        block.
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
            <div className="">
                <Card className="">
                    <CardHeader>
                        <div className="m-auto text-center">
                            <p>Day 2 - Sept. 21st</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Table
                            removeWrapper
                            hideHeader
                            aria-label="Example static collection table"
                        >
                            <TableHeader>
                                <TableColumn>Time</TableColumn>
                                <TableColumn>Description</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell className="whitespace-nowrap">
                                        4:00 PM
                                    </TableCell>
                                    <TableCell>
                                        EWMenn AF 141 profile and thread rolling
                                        machine
                                    </TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell>4:30 PM</TableCell>
                                    <TableCell>
                                        The premiere of our newly developed HN
                                        4-80 nail machine
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
