// Botão Flutuante do WebChat - Abre em Nova Aba
(function() {
    // HTML do botão
    const buttonHTML = `
    <style>
        #webchat-float-button {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.6), 0 0 0 0 rgba(102, 126, 234, 0.7);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% {
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.6), 0 0 0 0 rgba(102, 126, 234, 0.7);
            }
            50% {
                box-shadow: 0 4px 25px rgba(102, 126, 234, 0.8), 0 0 0 10px rgba(102, 126, 234, 0);
            }
            100% {
                box-shadow: 0 4px 20px rgba(102, 126, 234, 0.6), 0 0 0 0 rgba(102, 126, 234, 0);
            }
        }

        #webchat-float-button:hover {
            transform: scale(1.15) rotate(5deg);
            box-shadow: 0 6px 30px rgba(102, 126, 234, 0.9), 0 0 0 15px rgba(102, 126, 234, 0);
        }

        #webchat-float-button:active {
            transform: scale(0.95);
        }

        #webchat-float-button::before {
            content: '';
            position: absolute;
            top: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            background: #ff4444;
            border-radius: 50%;
            border: 3px solid white;
            animation: ping 1.5s infinite;
        }

        @keyframes ping {
            0%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.2);
                opacity: 0.8;
            }
        }

        #webchat-float-button-icon {
            font-size: 35px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
            animation: wiggle 3s ease-in-out infinite;
        }

        @keyframes wiggle {
            0%, 100% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(-10deg);
            }
            75% {
                transform: rotate(10deg);
            }
        }

        /* Mobile */
        @media (max-width: 767px) {
            #webchat-float-button {
                width: 65px;
                height: 65px;
                bottom: 15px;
                left: 15px;
            }

            #webchat-float-button-icon {
                font-size: 32px;
            }
        }
    </style>

    <button id="webchat-float-button" title="Abrir Chat" aria-label="Abrir Chat">
        <span id="webchat-float-button-icon">💬</span>
    </button>
    `;

    // Adiciona o botão ao body
    document.addEventListener('DOMContentLoaded', function() {
        document.body.insertAdjacentHTML('beforeend', buttonHTML);

        // Event listener para abrir o chat
        const button = document.getElementById('webchat-float-button');
        button.addEventListener('click', function() {
            // Abre a página do chat na mesma aba
            window.location.href = 'chat.html';
        });
    });
})();
