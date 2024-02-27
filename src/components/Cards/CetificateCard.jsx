import React from 'react'
import styled from 'styled-components'

import Brainy from '../../Assets/Certificates/Brainy Beams.png'
import Cassandra from '../../Assets/Certificates/Cassandra.png'
import Microsoft from '../../Assets/Certificates/Microsoft Certi for Business Analyst.png'
import Python from '../../Assets/Certificates/Python Data Analysis.png'
import Sql from '../../Assets/Certificates/SQL as a data Science.png'
import Sql2 from '../../Assets/Certificates/SQL by Coursera.png'
// import D2D from '../../Assets/Certificates/D2D.jpg'

const Card = styled.div`
    width: 500px;
    margin: 0px 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Image = styled.img`
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`
const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const CertificateCard = ({ src, name }) => {
    return (
        <Card>
            <Image src={src} />
            <Role>{name}</Role>
        </Card>
    );
}

const CertificateList = [
    {
        "img": Brainy, 
        "name": 'Internship in Python for Data Science',
        "type":'Other'
    },
    {
        "img": Cassandra,
        "name": "Learning Cassandra on LinkedIn",
        "type":'Data Oriented Learning'
    },
    {
        "img": Microsoft,
        "name": "Business Analysis by Microsoft",
        "type":'Data Oriented Learning'
    },
    {
        "img": Python,
        "name": "Python for Data Analysis",
        "type":'Coding based Learning'
    },
    {
        "img": Sql,
        "name": "SQL for Data Analysis",
        "type":'Data Oriented Learning'
    },
    {
        "img": Sql2,
        "name": "SQL learning from Michigan University ",
        "type":'Coding based Learning'
    },
    // {
    //     "img": D2D,
    //     "name": "HTML by Great Learning",
    //     "type":'Coding based Learning'
    // }
]

const CertificateCardList = ({toggle}) => {

    return (
        <>
            {/* <Wrapper> */}
                {/* Filtered certificate cards based on toggle */}
                {toggle === 'all' ? (
                    CertificateList.map((certi, index) => (
                        <CertificateCard key={index} src={certi.img} name={certi.name} />
                    ))
                ) : (
                    CertificateList.filter(cert => cert.type === toggle).map((certi, index) => (
                        <CertificateCard key={index} src={certi.img} name={certi.name} />
                    ))
                )}
            {/* </Wrapper> */}
            {/* {CertificateList.map((certi, index) => (
                <CertificateCard key={index} src={certi.img} name={certi.name} />
            ))} */}
        </>
    );
}

export default CertificateCardList