import { useState, useEffect } from 'react';

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente foi montado');

        return () => {
            console.log('O componente foi desmontado');
        }
    }, []);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    };

    const renderizaResultado = () => {
        if (!materiaA || !materiaB || !materiaC) {
            return <p>Preencha todas as notas para ver o resultado</p>;
        }

        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        return media >= 7 ? <p>O aluno foi aprovado</p> : <p>O aluno foi reprovado</p>;
    };

    useEffect(() => {
        console.log({ materiaA, materiaB, materiaC, nome });
    }, [materiaA, materiaB, materiaC, nome]);

    return (
        <form>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ) )}
            <input type="text" placeholder="Seu Nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota A" onChange={(evento) => setMateriaA(parseInt(evento.target.value) || 0)} />
            <input type="number" placeholder="Nota B" onChange={(evento) => setMateriaB(parseInt(evento.target.value) || 0)} />
            <input type="number" placeholder="Nota C" onChange={(evento) => setMateriaC(parseInt(evento.target.value) || 0)} />
            {renderizaResultado()}
        </form>
    );
};

export default Formulario;
