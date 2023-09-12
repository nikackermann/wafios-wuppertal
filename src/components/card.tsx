import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip,
} from '@nextui-org/react';

import { Container } from '../components/container';

export default function CardComponent() {
    return (
        <Container className="flex flex-col gap-10 lg:flex-row bg-[url('src/images/machine.svg')] bg-contain bg-center bg-no-repeat h-45 text-center">
            <div className="lg:w-1/2 ">
                <Card
                    isBlurred
                    className="bg-background/60 dark:bg-default-100/50 h-[250px]"
                >
                    <CardHeader>
                        <div className="m-auto text-center">
                            <Chip
                                color="warning"
                                variant="bordered"
                                className="mr-4"
                            >
                                Day 1
                            </Chip>
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
                                        10:00 AM
                                    </TableCell>
                                    <TableCell>
                                        HC 6-75A header with patented Pneumatic
                                        Transport System (PTS).
                                    </TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell>10:30 AM</TableCell>
                                    <TableCell>
                                        H 650 6-station header for the
                                        production of high-precision formed
                                        parts.
                                    </TableCell>
                                </TableRow>
                                <TableRow key="3">
                                    <TableCell>11:00 AM</TableCell>
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
            <div className="lg:w-1/2">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 h-[250px]"
                >
                    <CardHeader>
                        <div className="m-auto text-center">
                            <Chip
                                color="warning"
                                variant="bordered"
                                className="mr-4"
                            >
                                Day 2
                            </Chip>
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
                                        10:00 AM
                                    </TableCell>
                                    <TableCell>
                                        EWMenn AF 141 profile and thread rolling
                                        machine
                                    </TableCell>
                                </TableRow>
                                <TableRow key="2">
                                    <TableCell>10:30 AM</TableCell>
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
        </Container>
    );
}
