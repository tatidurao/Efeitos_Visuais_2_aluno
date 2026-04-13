
        // Elementos flutuantes no hero
        function createFloatingElements() {
            const container = document.getElementById('floatingContainer');
            //transparencias diferentes
            const colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.15)'];
            //15 elementos flutuantes
            for (let i = 0; i < 15; i++) {
                const element = document.createElement('div');
                element.classList.add('floating-element');
                
                // Tamanho aleatório
                const size = Math.random() * 60 + 20; // 20px a 80px
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                
                // Posição inicial aleatória left horizontal e top vertical
                element.style.left = `${Math.random() * 100}%`;
                element.style.top = `${Math.random() * 100}%`;
                
                // Cor aleatória
                element.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                // Duração e delay aleatórios
                const duration = Math.random() * 30 + 20; // 20s a 50s
                const delay = Math.random() * 5; // 0s a 5s
                element.style.animationDuration = `${duration}s`;
                element.style.animationDelay = `${delay}s`;
                
                container.appendChild(element);
            }
        }
        //espere o HTML carregar
        // Animações interativas nos cards
        document.addEventListener('DOMContentLoaded', function() {
            createFloatingElements();

            //AULA 2 ANIMAÇÕES NOS CARDS
            // Cards de animação
            const bounceCard = document.getElementById('bounceCard');
           




            // Adicionar/remover classes de animação
            function toggleAnimation(card, animationClass) {
                const icon = card.querySelector('.animation-icon i');
                
                // Remover todas as classes de animação primeiro
                icon.classList.remove('bounce-animation');
                
                // Adicionar a classe desejada
                icon.classList.add(animationClass);
                
                // Remover após 3 segundos
                setTimeout(() => {
                    icon.classList.remove(animationClass);
                }, 3000);
            }
            
            bounceCard.addEventListener('click', () => toggleAnimation(bounceCard, 'bounce-animation'));
           
            
           
          
        })    
            
        
