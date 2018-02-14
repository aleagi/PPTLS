/*
 * 3 icones (R P S)
 * clicar
 * 2 jogadores, 1 "IA"
 * Regras:
 * seleciona random 1-3 (1-Pedra, 2-Papel, 3-tesoura)
 * score P1 e P2
 * turnos
 *
 */

var Jogo = function () {
    var icones = ["Pedra", "Papel", "Tesoura", "Lagarto", "Spock"];
    var turno = 0;
    var score = {
        Player: 0,
        PC: 0
    };

    function Random() {
        return Math.floor(Math.random() * 5);
    }

    function QuemGanha(jogadaPlayer, jogadaPC) {

      // Rock crushes Lizard    | Rock crushes Scissors
      // Paper disproves Spock  | Paper covers Rock
      // Scissors cuts Paper    | Scissors decapitates Lizard
      // Lizard poisons Spock   | Lizard eats Paper
      // Spock smashes Scissors | Spock vaporizes Rock

       /* JP = i0 > i3 | JP = i0 > i2
       *  JP = i1 > i4 | JP = i1 > i0
       *  JP = i2 > i1 | JP = i2 > i3
       *  JP = i3 > i4 | JP = i3 > i1
       *  JP = i4 > i2 | JP = i4 > i0
       *  Se JP == JC, empate */

        if (jogadaPC == jogadaPlayer) {
            return "Empate";
        }

        if (jogadaPlayer == 0) { // Player jogou PEDRA (indice 0)
            if (jogadaPC == 2 || jogadaPC == 3) {
                return "Player";
            } else {
                return "PC";
            }
        }
        if (jogadaPlayer == 1) { // Player jogou PAPEL (indice 1)
            if (jogadaPC == 0 || jogadaPC == 4) {
                return "Player";
            } else {
                return "PC";
            }
        }
        if (jogadaPlayer == 2) { // Player jogou TESOURA (indice 2)
            if (jogadaPC == 1 || jogadaPC == 3) {
                return "Player";
            } else {
                return "PC";
            }
        }
        if (jogadaPlayer == 3) { // Player jogou LAGARTO (indice 3)
            if (jogadaPC == 0 || jogadaPC == 2) {
                return "Player";
            } else {
                return "PC";
            }
        }
        if (jogadaPlayer == 4) { // Player jogou SPOCK (indice 4)
            if (jogadaPC == 1 || jogadaPC == 4) {
                return "Player";
            } else {
                return "PC";
            }
        }
    }

    function Icone(i) {
        return icones[i];
    }

    function IncrementaTurno() {
        dicionario.turno++;
    }

    function IncrementaScore(quemGanha) {
        switch (quemGanha) {
            case "Player":
                score.Player++;
                break;

            case "PC":
                score.PC++;
                break;

            case "Empate":
                score.Player++;
                score.PC++;
                break;
        }
    }

    // Transforma o elemento jogado em um ícone FA
    function IconeCSS(i) {
      var iconeCSS = ["fa-hand-rock", "fa-hand-paper", "fa-hand-scissors", "fa-hand-lizard", "fa-hand-spock"];

      return iconeCSS[i];
    }

    var dicionario = {
        //Chave     Valor
        "Icone": Icone,
        "Random": Random,
        "score": score,
        "turno": turno,
        "QuemGanha": QuemGanha,
        "IncrementaScore": IncrementaScore,
        "IncrementaTurno": IncrementaTurno,
        "IconeCSS": IconeCSS
    };

    return dicionario;
}
