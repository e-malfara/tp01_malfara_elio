$(document).ready(function ()
{
    //Patterns RegExp
    var regexNom = new RegExp("^[A-Z]+$");
    var regexPrenom = new RegExp("^[A-ZÀ-ÿ][a-zà-ÿ]+$");
    var regexEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");
    var regexTelephone = new RegExp("^(0033|0|\\+33)[1-9]([-. ]?[0-9]{2}){4}$");
    var regexAdresse = new RegExp("^[0-9]+[A-Za-zà-ÿ ']+$");
    var regexCodePostal = new RegExp("^(?:[0-8]\\d|9[0-8])\\d{3}$");
    var regexVille = new RegExp("^[A-ZÀ-ÿ][a-zà-ÿ]+$");

    //Dissimulation des feedbacks
    $(".text-danger").hide();

    //Action lors du submit
    $("form").submit(function (e)
    {
        //Instanciation des valeurs des champs
        let civil = $("#validationCivilite").selectedIndex();
        let nom = $("#validationNom").val();
        let prenom = $("#validationPrenom").val();
        let email = $("#validationEmail").val();
        let telephone = $("#validationTelephone").val();
        let adresse = $("#validationAdresse").val();
        let code = $("#validationCodePostal").val();
        let ville = $("#validationVille").val();
        let login = $("#validationLogin").val();
        let mdp1 = $("#validationMdp1").val();
        let mdp2 = $("#validationMdp2").val();

        //Verification de la civilité
        verifCivil(civil, "#validationCivilite", "#validationCiviliteFeedback", e);

        //Verification des chaines par rapport a leur Expression régulières
        verifExp(regexNom, nom, "#validationNom", "#validationNomFeedback", e);
        verifExp(regexPrenom, prenom,"#validationPrenom", "#validationPrenomFeedback", e);
        verifExp(regexEmail, email,"#validationEmail", "#validationEmailFeedback", e);
        verifExp(regexTelephone, telephone, "#validationTelephone", "#validationTelephoneFeedback", e);
        verifExp(regexAdresse, adresse, "#validationAdresse", "#validationAdresseFeedback", e);
        verifExp(regexCodePostal, code, "#validationCodePostal", "#validationCodePostalFeedback", e);
        verifExp(regexVille, ville, "#validationVille", "#validationVilleFeedback", e);

        //Vérif du Login et des mots de passe
        verifLogin(login, "#validationLogin", "#validationLoginFeedback", e);
        verifMdps(mdp1, mdp2, "#validationMdp2", "#validationMdp2Feedback", e);

    });
});

function verifCivil(civil, idInput, idFeedback, e)
{
    if (civil == null)
    {
        $(idInput).addClass("border border-danger")
        $(idFeedback).show();
        e.preventDefault();
    }
    else
    {
        $(idInput).removeClass("border border-danger")
        $(idFeedback).hide();
    }
}
    
function verifExp(regExp, chaine, idInput, idFeedback, e)
{
    if (!regExp.test(chaine))
    {
        $(idInput).addClass("border border-danger")
        $(idFeedback).show();
        e.preventDefault();
    }
    else
    {
        $(idInput).removeClass("border border-danger")
        $(idFeedback).hide();
    }
}

function verifLogin(login, idInput, idFeedback, e)
{
    if (login == "")
    {
        $(idInput).addClass("border border-danger")
        $(idFeedback).show();
        e.preventDefault();
    }
    else
    {
        $(idInput).removeClass("border border-danger")
        $(idFeedback).hide();
    }
}
function verifMdps(mdp1, mdp2, idInput, idFeedback, e)
{
    if (mdp1 !== mdp2 || mdp2 == "")
    {
        $(idInput).addClass("border border-danger")
        $(idFeedback).show();
        e.preventDefault();
    }
    else
    {
        $(idInput).removeClass("border border-danger")
        $(idFeedback).hide();
    }
}
