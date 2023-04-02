import { useEffect, useState } from "react";

const BelajarUseStateUseEffect = () => {
    const [datas, setDatas] = useState([
        {
            nama:"Sadi Nur Sholeihin",
            nik:20170801009,
            gender:"Laki-Laki"
        },
        {
            nama: "Jane Doe",
            nik: 20987654321,
            gender:"Perempuan"
        },
        {
            nama: "Michael Scott",
            nik: 2468101214,
            gender:"Laki-Laki"
        },
        {
            nama: "Pam Beesly",
            nik: 3691215182,
            gender:"Laki-Laki"
        },
        {
            nama: "Jim Halpert",
            nik: 2224446668,
            gender:"Laki-Laki"
        }
    ]);

    const [getPacar, setPacar] = useState(1);
    const [getNamaPacar, setNamaPacar] = useState("");
    
    const functionTambahPacar = () =>{
        setPacar((prev)=>(prev+1));
    }
    const functionKurangPacar = () =>{ getPacar >=1 ? setPacar((prev)=>(prev-1)) : setPacar(getPacar)}
    
    useEffect( () => { 
        getPacar % 2 == 0 ? setNamaPacar("Ita Purnama Sari") : setNamaPacar("Masa Sih ?");
    },[getPacar])

    const filterObject = datas.filter((e)=>(e.gender !== "Perempuan"))
    return(
        <>
            {filterObject.map((data, index)=>(
                <div key={index}>
                    <p>Nama : {data.nama}</p>
                    <p>NIK : {data.nik}</p>
                    <p>Gender : {data.gender}</p>
                </div>
            ))}
            <h1>saya memiliki {getPacar}</h1>
            <h1>Namanya : {getNamaPacar}</h1>
            <button onClick={functionTambahPacar}>Zoom In</button>
            <button onClick={functionKurangPacar}>Zoom Out</button>
        </>
    )
}

export default BelajarUseStateUseEffect;