import React, { useEffect, useState } from 'react';
import Base from "pages/layout/Base";
import { useRouter } from 'next/router';

export default () => {

    const router = useRouter();
    const techId = router.query.techId;
    const [tech, setTech] = useState(null);
    useEffect(() => {
        techId && (async() => {
            const techsResponse = await fetch(`${process.env.TECHS_API}/${techId}`);
            const tech = await techsResponse.json();
            setTech(tech);
        })();
    }, [techId]);

    return (
        <Base>
            <pre className="col">
                {JSON.stringify(tech, undefined, 2)}
            </pre>
        </Base>
    );
};
