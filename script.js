function generateResume() {
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const eduYear = document.getElementById('eduYear').value;
    const position = document.getElementById('position').value;
    const company = document.getElementById('company').value;
    const expYear = document.getElementById('expYear').value;

    const resumeOutput = document.getElementById('resumeOutput');
    const resumeHtml = `
        <h2>${name}'s Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Year:</strong> ${eduYear}</p>

        <h3>Experience</h3>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Year:</strong> ${expYear}</p>
    `;
    resumeOutput.innerHTML = resumeHtml;

    // Generate a unique URL based on the user's name
    const uniqueUrl = `https://resume-generator.com/${name.toLowerCase().replace(/ /g, '-')}`;
    document.getElementById('urlContainer').innerHTML = `<p>Resume URL: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a></p>`;
}

function copyLink() {
    const url = document.querySelector('#urlContainer a').href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard');
    });
}

function share() {
    const url = document.querySelector('#urlContainer a').href;
    if (navigator.share) {
        navigator.share({
            title: 'Resume Link',
            text: 'Check out my resume',
            url: url,
        }).then(() => {
            alert('Shared successfully');
        }).catch((err) => {
            alert('Error while sharing');
        });
    } else {
        alert('Share feature is not supported in your browser');
    }
}
function downloadPdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const eduYear = document.getElementById('eduYear').value;
    const position = document.getElementById('position').value;
    const company = document.getElementById('company').value;
    const expYear = document.getElementById('expYear').value;

    // Add content to the PDF
    doc.setFontSize(16);
    doc.text(`${name}'s Resume`, 20, 20);

    doc.setFontSize(14);
    doc.text("Personal Information", 20, 30);
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Father's Name: ${fatherName}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Phone Number: ${number}`, 20, 70);

    doc.setFontSize(14);
    doc.text("Education", 20, 90);
    doc.setFontSize(12);
    doc.text(`Degree: ${degree}`, 20, 100);
    doc.text(`Institution: ${institution}`, 20, 110);
    doc.text(`Year: ${eduYear}`, 20, 120);

    doc.setFontSize(14);
    doc.text("Experience", 20, 140);
    doc.setFontSize(12);
    doc.text(`Position: ${position}`, 20, 150);
    doc.text(`Company: ${company}`, 20, 160);
    doc.text(`Year: ${expYear}`, 20, 170);

    // Save the PDF with the filename as name_resume.pdf
    doc.save(`${name}_resume.pdf`);
}