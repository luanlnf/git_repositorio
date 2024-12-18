import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(null); // Resetar erro antes de cada busca
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then((res) => {
                if (!res.ok) {
                    // Lançar erro com base no status da resposta
                    throw new Error("Usuário não encontrado, por favor tente novamente");
                }
                return res.json();
            })
            .then((resJson) => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch((err) => {
                // Capturar qualquer erro e definir a mensagem de erro
                setEstaCarregando(false);
                setErro(err.message);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : erro ? (
                <h1 className={styles.error}>{erro}</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.item} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLinguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <b>Link:</b>
                            <a className={styles.itemLink} href={html_url}>
                                Visitar GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;
