import { buscarImagem } from '../../API/chamadas';
import './index.scss';

export default function CardEvento(params) {
    return (
        <div className="cardEvento">
            <div className="image-container">
                <img
                    src={`${buscarImagem(params.teste.imagem)}`}
                    alt={`Card do evento ${params.teste.titulo}`}
                    className="card-image" 
                />
            </div>
            <div className="text-container">
                <p className="evento-title">{params.teste.titulo}</p>
                <p className="evento-price">{params.teste.id}</p>
            </div>
        </div>
    );
}