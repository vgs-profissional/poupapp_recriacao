import styles from './Typography.module.css'
const TAGS = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}
// Typography é um componente coringa
export const Typography = ({ children, variant }) => {
    const Component = TAGS[variant] || 'p'
    const variantClass = styles[variant] || styles.p    
    // styles retorna obj, então pode fazer a mesma tecnica pra pegar o estilo
    return (
        // Aqui Componente transforma typography no elemento escolhido por nós
        <Component className={variantClass}>
            {children}
        </Component >
    )
}