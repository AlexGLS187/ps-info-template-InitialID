var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Αρχική έκδοση δελτίου ταυτότητας",
      pageTitle: "Αρχική έκδοση δελτίου ταυτότητας",
      infoTitle: "Πληροφορίες για την αρχική έκδοση δελτίου ταυτότητας",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε να εκδόσετε Ελληνική ταυτότητα για πρώτη φορά καθώς και τα απαραίτητα δικαιολογητικά που χρειάζονται.",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για τις ανάγκες της δεύτερης εργασίας στο μάθημα της Ηλεκτρονικής Διακυβέρνησης του ΜΠΣ Εφαρμοσμένη Πληροφορική στο Πανεπιστήμιο Μακεδονίας απο τον Γαλαίο Αλέξανδρο Παναγιώτη και βασίζεται στην πτυχιακή εργασία των",
      and: "και",
      student1: "Αμπατζίδου Ελισάβετ",
      student2: "Δασύρα Ευμορφία Ελπίδα",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Original ID card issue",
      pageTitle: "Original ID card issue",
      infoTitle: "Information about the initial issuance of an identity card",
      subTitle1: "This questionnaire can help you find out if you are eligible to be issued a Greek identity card for the first time as well as the necessary supporting documents needed.",
      subTitle2: "Completing the questionnaire should not take more than 10 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of the second assignment in the E-Government course of the MSc Applied Informatics at the University of Macedonia by Galaios Alexandros and is based on the thesis of",
      and: "and",
      student1: "Ampatzidou Elisavet",
      student2: "Dasyra Evmorfia Elpida",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();