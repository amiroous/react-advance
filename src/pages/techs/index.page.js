import React from 'react';
import fetch from 'node-fetch';
import Base from "pages/layout/Base";
import Link from "next/link";

export default ({techs}) => {

    return (
        <Base>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col-1">#</th>
                    <th scope="col-3">Tech</th>
                    <th scope="col-7">Description</th>
                    <th scope="col-1">Courses</th>
                </tr>
                </thead>
                <tbody>
                {
                    techs.map(tech => (
                        <tr key={tech.id}>
                            <th scope="row">{tech.id}</th>
                            <td><Link href="/techs/[techId]" as={`/techs/${tech.id}`}><a>{tech.name}</a></Link></td>
                            <td>{tech.description}</td>
                            <td className="text-center">{tech.courses.length}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </Base>
    );
};

export async function getServerSideProps() {
    const techsResponse = await fetch(process.env.TECHS_API);
    const techs = await techsResponse.json();

    return {
        props: { techs }
    }
}