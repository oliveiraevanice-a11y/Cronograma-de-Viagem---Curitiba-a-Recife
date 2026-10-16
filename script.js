document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('pieChart').getContext('2d');

    const data = {
        labels: [
            'Passagem de avião (R$ 1.300,00)',
            'Hospedagem (R$ 1.000,00)',
            'Alimentação (R$ 500,00)',
            'Transporte (R$ 150,00)'
        ],
        datasets: [{
            data: [1300, 1000, 500, 150],
            backgroundColor: [
                '#4a90e2', // Azul
                '#7ed321', // Verde
                '#f5a623', // Laranja
                '#e74c3c'  // Vermelho
            ],
            hoverOffset: 8
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 13
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw || 0;
                            return ' ' + context.label.split(' (')[0] + ': R$ ' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        }
                    }
                }
            }
        }
    });
});
