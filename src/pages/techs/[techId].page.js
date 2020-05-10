import React from 'react';
import fetch from 'node-fetch';
import Base from "pages/layout/Base";

export default ({tech}) => {


    return (
        <Base>
            <pre className="col">
                {JSON.stringify(tech, undefined, 2)}
            </pre>
        </Base>
    );
};

export async function getServerSideProps(context) {
    const { techId } = context.query;

    const techsResponse = await fetch(`${process.env.TECHS_API}/${techId}`);
    const tech = await techsResponse.json();

    return {
        props: { tech }
    }
}
