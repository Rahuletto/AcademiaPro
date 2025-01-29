import Fuse from "fuse.js";


export const urls = [
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Madhusoodhanan  P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-madhusoodhanan/",
        "Designation": "Associate Professor & HoD",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7331.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Jayapragash J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-jayapragash/",
        "Designation": "Associate Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7329-scaled.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Kumaravel R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-kumaravel/",
        "Designation": "Associate Professor",
        "Specialization": "Fuzzy Inference system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7303.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Nancy Prasanna Joseph",
        "url": "https://www.srmist.edu.in/faculty/dr-nancy-prasanna-joseph/",
        "Designation": "Associate Professor",
        "Specialization": "English Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7320.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Padma Priya R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-padma-priya/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7325.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Snehalatha M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-snehalatha/",
        "Designation": "Associate Professor",
        "Specialization": "Quantitative Aptitude and Logical Reasoning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7358.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Balamurugan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-balamurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7348.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Devendran M",
        "url": "https://www.srmist.edu.in/faculty/dr-devendran-m/",
        "Designation": "Assistant professor",
        "Specialization": "English Language Teaching",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Devendran.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Kavitha V",
        "url": "https://www.srmist.edu.in/faculty/dr-kavitha-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Indian Fiction",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/KAVI_-removebg-preview-1.png"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Mahendran K",
        "url": "https://www.srmist.edu.in/faculty/mr-k-mahendran/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7323.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Manikandan G",
        "url": "https://www.srmist.edu.in/faculty/dr-manikandan-g/",
        "Designation": "Assistant professor",
        "Specialization": "MATHEMATICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/DSC_7339.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Mythreyi Koppur S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-mythreyikoppur/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude & Logical Reasoning, Statistical Inference, Data mining, Categorical Data Analysis, Bayesian Methods.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/myth-new-pic.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Palanisamy L",
        "url": "https://www.srmist.edu.in/faculty/dr-palanisamy-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Neural Networks, Dynamical System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Photo.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Preetha. M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-preetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7311.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Rohini R",
        "url": "https://www.srmist.edu.in/faculty/dr-rohini-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Sakthivel R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-sakthivel/",
        "Designation": "Assistant Professor",
        "Specialization": "Reliability Theory, Bayesian Network, Markov Models",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Sakthi-Photo.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Shobhana Sree R",
        "url": "https://www.srmist.edu.in/faculty/dr-shobhana-sree-r/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/DSC_7318.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Sumathi S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-sumathi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7356.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Sundar Singh D",
        "url": "https://www.srmist.edu.in/faculty/dr-sundar-singh-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Sundar.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Suresh P",
        "url": "https://www.srmist.edu.in/faculty/dr-suresh-p/",
        "Designation": "Assistant professor",
        "Specialization": "Language Teaching, Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Suresh-Photo-scaled.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Vijayalakshmi B",
        "url": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Untitled-21.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Dr. Vijayashree T",
        "url": "https://www.srmist.edu.in/faculty/dr-vijayashree-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-09-at-9.48.59-AM.jpeg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Ari Ganapathy M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-ari-ganapathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7340.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Hari Narayana Rao B",
        "url": "https://www.srmist.edu.in/faculty/mr-b-hari-narayana-rao/",
        "Designation": "Assistant Professor",
        "Specialization": "QUANTITATIVE APTITUDE & REASONING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7355.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Harinath I",
        "url": "https://www.srmist.edu.in/faculty/mr-i-harinath/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7342.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Jeremia M P",
        "url": "https://www.srmist.edu.in/faculty/mr-m-p-jeremia/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude and Soft Skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7361.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Murali K",
        "url": "https://www.srmist.edu.in/faculty/mr-k-murali/",
        "Designation": "Assistant Professor",
        "Specialization": "Training on Quantitative Aptitude & Reasoning for UG & PG students",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7310.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Muthumanivannan J",
        "url": "https://www.srmist.edu.in/faculty/mr-j-muthumanivannan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7304.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Prathap Chandran R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-prathap-chandran/",
        "Designation": "Assistant Professor",
        "Specialization": "English",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7341.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Priyanand",
        "url": "https://www.srmist.edu.in/faculty/mr-p-priyanand/",
        "Designation": "Assistant Professor",
        "Specialization": "Soft skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/2023-08-02-12-17-41-162.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Rajesh Thulasidas",
        "url": "https://www.srmist.edu.in/faculty/mr-rajesh-thulasidas/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7307.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Rajkumar N",
        "url": "https://www.srmist.edu.in/faculty/mr-n-rajkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude and Logical Reasoning , Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7345.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Roland Rencewigg P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-roland-rencewigg/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude, Rhetorical Devices, Rhetorical Analysis, Soft Skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7305.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Ami Femila P",
        "url": "https://www.srmist.edu.in/faculty/mrs-p-ami-femila/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude, Communication Training, Soft Skills Training",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7324.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. JananiPriyadharshini B",
        "url": "https://www.srmist.edu.in/faculty/mrs-b-janani-priyadarshini/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7312.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Jerlina I",
        "url": "https://www.srmist.edu.in/faculty/mrs-i-jerlina/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7317.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Kavitha Srisarann",
        "url": "https://www.srmist.edu.in/faculty/mrs-kavitha-srisaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Emotional Intelligence, Personality traits, Counseling Psychology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7333.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Mehernissa D",
        "url": "https://www.srmist.edu.in/faculty/mrs-d-mehernissa/",
        "Designation": "Assistant Professor",
        "Specialization": "Child Psychology, Women , sociology, soft skills trainer, employability skills, social engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7353.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Poorani G",
        "url": "https://www.srmist.edu.in/faculty/mrs-g-poorani/",
        "Designation": "Assistant Professor",
        "Specialization": "Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7314.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Rebecca Charles",
        "url": "https://www.srmist.edu.in/faculty/mrs-rebecca-charles/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7338.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Sangeetha K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-sangeetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7335.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mrs. Sudhandiradevi S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-sudhandira-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude and Logical Reasoning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7362.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Ms. Aathira A S",
        "url": "https://www.srmist.edu.in/faculty/ms-aathira-a-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Untitled-1-1.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Ms. Lora S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-lora/",
        "Designation": "Assisstant Professor",
        "Specialization": "Communication English, Verbal Aptitude, Children's Literature, Postmodernism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7316.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Ms. Nithya T",
        "url": "https://www.srmist.edu.in/faculty/ms-nithya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations Research, Inventory Models",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Nithya.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Anbukkani M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-anbukkani/",
        "Designation": "Verbal Aptitude Trainer",
        "Specialization": "Verbal & Aptitude & Soft Skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7344.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "title": "Mr. Hari Haran V K",
        "url": "https://www.srmist.edu.in/faculty/mr-hari-haran-v-k/",
        "Designation": "Soft Skills Trainer",
        "Specialization": "Softskills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7301.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "title": "Dr. Deepalakshmi S",
        "url": "https://www.srmist.edu.in/faculty/s-deepalakshmi/",
        "Designation": "Assistant Professor - OG, & HOD",
        "Specialization": "English",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600479-new.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "title": "Dr. Sathish K",
        "url": "https://www.srmist.edu.in/faculty/dr-sathish-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/3-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "title": "Dr. Aarthi S",
        "url": "https://www.srmist.edu.in/faculty/119240/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-21-at-3.23.08-PM.jpeg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "title": "Dr. Elamathiyan E",
        "url": "https://www.srmist.edu.in/faculty/dr-elamathiyan-e/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/6-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "title": "Dr. Muthu Deepa M",
        "url": "https://www.srmist.edu.in/faculty/dr-muthu-deepa-m/",
        "Designation": "Assistant Professor",
        "Specialization": "English Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "title": "Dr. Sam Israel S",
        "url": "https://www.srmist.edu.in/faculty/dr-sam-israel-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Postcolonial Literature and Marxism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/5133-scaled.jpg"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "title": "Dr. Paromita Chakraborty",
        "url": "https://www.srmist.edu.in/faculty/dr-paromita-chakraborty/",
        "Designation": "Professor and Head",
        "Specialization": "Centre for Research in Environment, Sustainability Advocacy and Climate Change",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/paromita.png"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "title": "Dr. Saravanakumar A",
        "url": "https://www.srmist.edu.in/faculty/dr-saravanakumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioenergy; Biofuels; Bio and thermochemical conversion",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Saravanakumar-A.jpeg"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "title": "Dr. Vanthana Sree G",
        "url": "https://www.srmist.edu.in/faculty/dr-vanthana-sree-g/",
        "Designation": "Scientist",
        "Specialization": "Nanotechnology for Environmental and Polymeric Application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/pic_page-0001.jpg"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "title": "Dr. Debasmita Bandyopadhyay",
        "url": "https://www.srmist.edu.in/faculty/dr-debasmita-bandyopadhyay/",
        "Designation": "Scientist",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "title": "Dr. R. Suriyaprakash",
        "url": "https://www.srmist.edu.in/faculty/dr-r-suriyaprakash/",
        "Designation": "Scientist",
        "Specialization": "Environment and Sustainability",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/06/IMG_20230707_155449-scaled.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Parthiban V",
        "url": "https://www.srmist.edu.in/faculty/dr-parthiban-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Yoga for students",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/parthiban-2023.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Dhanalakshmi K",
        "url": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-k-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dhanalakshmi-profile-pic-1.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Laxmikanta Rana",
        "url": "https://www.srmist.edu.in/faculty/dr-laxmikanta-rana/",
        "Designation": "Assistant Professor in Yoga",
        "Specialization": "YOGA (Philosophy/ Therapy/ Education/ Psychology )",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Laxmikanta-Rana.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Manoraj P",
        "url": "https://www.srmist.edu.in/faculty/dr-manoraj-p/",
        "Designation": "Assistant Professor",
        "Specialization": "AYURVEDA AND YOGA",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Untitled-design_20240814_144635_0000.png"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Selvam A S",
        "url": "https://www.srmist.edu.in/faculty/dr-selvam-a-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Yoga, Yoga Therapy, Varma Therapy, Game Yoga, Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Selvam-A-S.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Shanmugapriya M",
        "url": "https://www.srmist.edu.in/faculty/dr-shanmugapriya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Shanmugapriya-M.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Vidhya Shankari S",
        "url": "https://www.srmist.edu.in/faculty/dr-vidhya-shankari-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Yogic philosophy, Yoga therapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Vidhya-Shankari-S.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Dr. Yoganandhan V",
        "url": "https://www.srmist.edu.in/faculty/dr-yoganandhan-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Yoga, Yoga Therapist, Naturopathy Therapist, Varma & Massage Therapist",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/yoga-photo.bmp"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "title": "Mohanapriya P",
        "url": "https://www.srmist.edu.in/faculty/mohanapriya-p/",
        "Designation": "Teaching Associate",
        "Specialization": "Advanced yoga asanas , Hatha yoga,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/MOHANAPRIYA-CFY.jpeg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Ganapathy Subramanian L R",
        "url": "https://www.srmist.edu.in/faculty/dr-l-r-ganapathy-subramanian/",
        "Designation": "Professor & HOD",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/HoD.png"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Senthilkumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-senthilkumar/",
        "Designation": "Professor",
        "Specialization": "Computational Fluid Dynamics, Aerodynamics, Heat Transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-SSK.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Sivakumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sivakumar/",
        "Designation": "Associate Professor",
        "Specialization": "Vibrations , Aero elasticity, Aircraft Structures, Finite Element Method, Aircraft maintenance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/s-sivakumar.png"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Gurusideswar S",
        "url": "https://www.srmist.edu.in/faculty/dr-gurusideswar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering - Composite Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-Guru.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Selvakumaran T",
        "url": "https://www.srmist.edu.in/faculty/dr-selvakumaran-t/",
        "Designation": "Associate Professor",
        "Specialization": "Solid propellant combustion",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-TS.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Allwyn K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-allwyn/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-KA.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Aravindh Kumar S M",
        "url": "https://www.srmist.edu.in/faculty/s-m-aravindh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Gas Dynamics, Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-SMA.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Kannan B T",
        "url": "https://www.srmist.edu.in/faculty/dr-kannan-b-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering - Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-BTK.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Kuchimanchi K Bharadwaj",
        "url": "https://www.srmist.edu.in/faculty/dr-kuchimanchi-k-bhardwaj/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-KKB-1.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Mahendra Perumal G",
        "url": "https://www.srmist.edu.in/faculty/dr-mahendra-perumal-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-GMP-scaled.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Malaikannan G",
        "url": "https://www.srmist.edu.in/faculty/dr-malaikannan-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Reentry Aerodynamics, Hypersonic Aerothermodynamics, Rarefied Gas Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/DSC_1311a.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Mohamed Arif R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-mohamed-arif/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/ARIF2.jpeg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Muthuram A",
        "url": "https://www.srmist.edu.in/faculty/muthuram-a/",
        "Designation": "Assistant Professor",
        "Specialization": "PROPULSION, AERODYNAMICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/MUTHURAM-PHOTO-with-blazer.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Rajkumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-rajkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_3849.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Saravanakumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-saravanakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering – Materials & Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/68.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Saravanan G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-saravanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-12.19.54-PM.jpeg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Dr. Vignesh Kumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-vignesh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-MVK.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Mr. Bharat N",
        "url": "https://www.srmist.edu.in/faculty/bharat-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-Bharat.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Mr. Iynthezhuthon K",
        "url": "https://www.srmist.edu.in/faculty/iynthezhuthon-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-Iynthezhuthon.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Mr. Ravichandrakumar K B",
        "url": "https://www.srmist.edu.in/faculty/ravichandrakumar-k-b/",
        "Designation": "Assistant Professor",
        "Specialization": "CFD application on Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-KBR.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "title": "Mr. Vinayak Malhotra",
        "url": "https://www.srmist.edu.in/faculty/vinayak-malhotra/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Vinayak-Malhotra.jpeg"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "title": "Dr. Anbarassan A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-anbarassan/",
        "Designation": "Assistant Professor and HOD",
        "Specialization": "Agricultural Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr__Anbarassan.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "title": "Dr. Indhushree A",
        "url": "https://www.srmist.edu.in/faculty/dr-indhushree-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "title": "Dr. Sathaiah M",
        "url": "https://www.srmist.edu.in/faculty/dr-sathaiah-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural and Natural Resource Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Sathaiah.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "title": "Dr. Selva rani M",
        "url": "https://www.srmist.edu.in/faculty/dr-selva-rani-m-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Dr.-Selva-rani-M.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "title": "Dr. Thulasiram R",
        "url": "https://www.srmist.edu.in/faculty/dr-thulasiram-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/SCANNED-PHOTO-scaled.jpg"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "title": "Mr. Shyamsundar",
        "url": "https://www.srmist.edu.in/faculty/mr-shyamsundar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "title": "Dr. Rajasekaran R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-rajasekaran/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Agricultural Extension",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rajsaekaran1.png"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "title": "Dr. Kungumaselvan T",
        "url": "https://www.srmist.edu.in/faculty/dr-kungumaselvan-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Extension",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kun-copy.jpg"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "title": "Dr. Mohanraj P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-mohanraj/",
        "Designation": "Assistant Professor",
        "Specialization": "ENGLISH",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/0U1A2992.jpg"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "title": "Dr. Muhammed Iqshanullah A",
        "url": "https://www.srmist.edu.in/faculty/dr-muhammed-iqshanullah-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Extension",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Muhammed-Iqshanullah.jpg"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "title": "Dr. Sasmitha R",
        "url": "https://www.srmist.edu.in/faculty/dr-sasmitha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Assistant Professor (Agricultural Extension)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.Sasmitha-R.jpg"
    },
    {
        "DepartmentCode": 28999,
        "DepartmentName": "Department of Agricultural Sciences",
        "title": "Dr. Murugan N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-murugan/",
        "Designation": "Assistant Professor & Farm Manager",
        "Specialization": "Sericulture and Farm Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/dr-n-murugan.jpg"
    },
    {
        "DepartmentCode": 28999,
        "DepartmentName": "Department of Agricultural Sciences",
        "title": "Dr. Nisha R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-nisha/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Nisha-R.jpg"
    },
    {
        "DepartmentCode": 28999,
        "DepartmentName": "Department of Agricultural Sciences",
        "title": "Shyamsundar G",
        "url": "https://www.srmist.edu.in/faculty/shyamsundar-g/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Asoka Raja N",
        "url": "https://www.srmist.edu.in/faculty/dr-asoka-raja-n/",
        "Designation": "Associate Dean and Professor",
        "Specialization": "Micro Irrigation water Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Asho-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Marimuthu S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-marimuthu-ph-d/",
        "Designation": "Assistant Professor HOD",
        "Specialization": "Agronomy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-S.-Marimuthu.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Archana H A",
        "url": "https://www.srmist.edu.in/faculty/dr-archana-h-a-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Water Management, Geo informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/SRM-image1-scaled.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Balasubramaniyan P",
        "url": "https://www.srmist.edu.in/faculty/dr-balasubramaniyan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Jeyajothi R",
        "url": "https://www.srmist.edu.in/faculty/dr-jeyajothi-r-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Agronomy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-R.-Jeyajothi.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Mohammed Ashraf A",
        "url": "https://www.srmist.edu.in/faculty/dr-mohammed-ashraf-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Dryland Agriculture, weed management, irrigation management ,organic farming, nutrient management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/90307-Dr.-A.-Mohammed-Ashraf-1.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Rajeshkumar A",
        "url": "https://www.srmist.edu.in/faculty/dr-rajeshkumar-a-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Integrated Farming System, Farming and Cropping systems, Weed Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajesh-kumar.jpeg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Ramadass S",
        "url": "https://www.srmist.edu.in/faculty/dr-ramadass-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Irrigation Management, Dryland Agriculture, Weed Management, Rice Agronomy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Ramadass.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Saravana Kumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-saravana-kumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Paddy, Nutrient management, Climate smart agriculture, Irrigation management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/saravana-photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "title": "Dr. Sivakumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-sivakumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Conservation Agriculture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Sivakumar.jpg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Kamalakkannan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-kamalakkannan/",
        "Designation": "Professor & Head",
        "Specialization": "Noise Vibration Harshness, Suspension System, Vehicle Design and Development, Electric and Hybrid Vehicles",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Kamalakannan_Auto.jpg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Chandradass J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-chandradass/",
        "Designation": "Professor",
        "Specialization": "Materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Chandradass-1.jpg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Leenus Jesu Martin M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-leenus-jesu-martin/",
        "Designation": "Professor",
        "Specialization": "Alternate Fuels, E Mobility",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Leenus-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Rajendran R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-rajendran/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Rajendran-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Nanthakumar A.J.D",
        "url": "https://www.srmist.edu.in/faculty/a-j-d-nanthakumar/",
        "Designation": "Associate Professor",
        "Specialization": "Computational Fluid Dynamics, Vehicle Dynamics, Simulation and Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Nanthakumar-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Prabhu C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-prabhu/",
        "Designation": "Associate Professor",
        "Specialization": "Bio-fuels , Emission control systems, Advanced Engine technology, Combustion kinetics, Low temperature combustion strategies for IC engines, Hydrogen based energy systems, Thermal Management of Automotive Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prabhu-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Prakash T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-prakash/",
        "Designation": "Associate Professor",
        "Specialization": "Automobile Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prakash-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Baskara Sethupathi P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-baskara-sethupathi/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Engineering Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-03-16-at-15.57.04.jpeg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Boopathi D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-boopathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Energy, Bio-fuels",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Boopathi-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Carunaiselvane C",
        "url": "https://www.srmist.edu.in/faculty/dr-carunaiselvane-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical Vehicle Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Carunaichelvan-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Madhan Kumar S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-madhan-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Automobile Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Madhan-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Dr. Praveen Kumar T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-praveen-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Automotive Transmission Systems, Machine Learning, Fault Diagnosis of Automotive Components and Electric Vehicle Drive Systems, Fault Prognosis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Praveen-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Mr. Jerome Stanley M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-jerome-stanley/",
        "Designation": "Assistant Professor",
        "Specialization": "Internal Combustion Engine",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Jerome_Stanley_New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Mr. Kiran S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-kiran/",
        "Designation": "Assistant Professor",
        "Specialization": "Waste to energy conversion, Bio fuel production, Alternate Fuels, Emission control systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Kiran-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Mr. Logeshwaran S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-logeshwaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Automobile Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Logeshwaran-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Mr. Naresh G",
        "url": "https://www.srmist.edu.in/faculty/mr-g-naresh/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Naresh-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Mr. Palanivendhan M",
        "url": "https://www.srmist.edu.in/faculty/m-palanivendhan/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Technology, Welding Technology, Principles of Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Palanivendhan-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "title": "Mr. Yokeshwaran S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-yokeshwaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Vehicular Technologies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Yokeswaran-New.png"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "title": "Dr. Geetha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-geetha/",
        "Designation": "Associate Professor & Head",
        "Specialization": "Biochemical and Ecological Studies and Plant Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Geet-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "title": "Dr. Chandrasekaran P",
        "url": "https://www.srmist.edu.in/faculty/dr-chandrasekaran-p-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Nutrient Physiology and Abiotic Stress Management in Plants",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Chan-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "title": "Dr. Ragunathan  T",
        "url": "https://www.srmist.edu.in/faculty/dr-ragunathan-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/07/0U1A29944.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "title": "Dr. Sathees Kumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-sathees-kumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/0U1A299444.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "title": "Dr. Vanitha J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-vanitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Vani-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "title": "Mr. Arunkumar J",
        "url": "https://www.srmist.edu.in/faculty/mr-arunkumar-j/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Arun-itkm.jpg"
    },
    {
        "DepartmentCode": 23817,
        "DepartmentName": "Department Of Biochemistry",
        "title": "Dr. Nithya T G",
        "url": "https://www.srmist.edu.in/faculty/dr-nithya-t-g-2/",
        "Designation": "Professor and Head",
        "Specialization": "Biochemistry, Biotechnology ,Stem cell Biology, Cancer research, Herbal research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/600045.jpg"
    },
    {
        "DepartmentCode": 23817,
        "DepartmentName": "Department Of Biochemistry",
        "title": "Dr. Suganya. I",
        "url": "https://www.srmist.edu.in/faculty/suganya-i/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Untitled-scaled-e1719480795488.jpg"
    },
    {
        "DepartmentCode": 23817,
        "DepartmentName": "Department Of Biochemistry",
        "title": "Dr. Vijayalakshmi K",
        "url": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Final-profile-pic-scaled-e1677910460489.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Snekhalatha U",
        "url": "https://www.srmist.edu.in/faculty/dr-u-snekhalatha/",
        "Designation": "Professor & Head",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0051_DSC_9254.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Varshini Karthik",
        "url": "https://www.srmist.edu.in/faculty/dr-varshini-karthik/",
        "Designation": "Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Photo-Dec-25.jpeg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Angeline Kirubha S. P.",
        "url": "https://www.srmist.edu.in/faculty/dr-s-p-angeline-kirubha/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.S.-P.-Angeline.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Ashok Kumar D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-ashok-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0066_DSC_9237.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Gnanavel S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-gnanavel/",
        "Designation": "Associate Professor",
        "Specialization": "Biomaterial and Artificial Organs, Nano composite, Biomedical Nano technology, Bio memes, Tissue engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0057_DSC_9248.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Jayanthi T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-jayanthi/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile-photo-website.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Deboleena Sadhukhan",
        "url": "https://www.srmist.edu.in/faculty/deboleena-sadhukhan/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Signal and Image Processing and Analysis, Automated health diagnosis",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Anitha G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-anitha/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Profile_Bio-Tech_0063_DSC_9241-2.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Bhargavi Haripriya  A",
        "url": "https://www.srmist.edu.in/faculty/a-bhargavi-haripriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering, Image Processing",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Jaligam Murali Mohan",
        "url": "https://www.srmist.edu.in/faculty/dr-jaligam-murali-mohan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/DSC_9309-2.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Kathirvelu D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-kathirvelu/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0064_DSC_9240.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Lakshmi Prabha.P",
        "url": "https://www.srmist.edu.in/faculty/lakshmi-prabha-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering ,Medical image processing, Machine Learning, Deeplearning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0052_DSC_9253-1.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Muthu P",
        "url": "https://www.srmist.edu.in/faculty/dr-muthu-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.P.Muthu-Profile-Photo-10.04.2023-4.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Nijisha Shajil",
        "url": "https://www.srmist.edu.in/faculty/dr-nijisha-shajil/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Signal Processing, Biomedical Image Processing and Biomedical Instrumentation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Nijisha-Shajil-photo-1.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Remya Raj",
        "url": "https://www.srmist.edu.in/faculty/dr-remya-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/ramya.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Rohit Gupta",
        "url": "https://www.srmist.edu.in/faculty/dr-rohit-gupta/",
        "Designation": "Assistant Professor",
        "Specialization": "Assistive and Rehabilitative System, Artificial Intelligence, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Profile_Bio-Tech_0059_DSC_9246-2.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Shabeeb Ahamed KP",
        "url": "https://www.srmist.edu.in/faculty/dr-shabeeb-ahamed-kp/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Device Development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/shabeeb.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Dr. Sruthi Ann Alex",
        "url": "https://www.srmist.edu.in/faculty/dr-sruthi-ann-alex/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Sruthi-Ann-Alex-photo-2.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "title": "Ms. Oinam Robita Chanu",
        "url": "https://www.srmist.edu.in/faculty/ms-oinam-robita-chanu/",
        "Designation": "Assistant Professor",
        "Specialization": "Point of care devices, Virtual Instrumentation, Biomechanics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-11.40.36.jpeg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Sahabudeen S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sahabudeen/",
        "Designation": "Associate Professor and Head",
        "Specialization": "Cellular & Molecular Neuroscience, Pharmaceutical Biotechnology, Molecular Immunology, Tissue Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/FLD_0258-copy.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Lilly M Saleena",
        "url": "https://www.srmist.edu.in/faculty/dr-lilly-m-saleena/",
        "Designation": "Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0042_DSC_9264.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Ramkumar K. M.",
        "url": "https://www.srmist.edu.in/faculty/dr-k-m-ramkumar/",
        "Designation": "Research Professor",
        "Specialization": "Cancer Biology, Metabolic Disorders",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0024_DSC_9287.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Selvamurugan N",
        "url": "https://www.srmist.edu.in/faculty/dr-nagarajan-selvamurugan/",
        "Designation": "Research Professor",
        "Specialization": "Bone Biology, Breast Cancer, Stem Cell Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0048_DSC_9257.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Velmurugan D",
        "url": "https://www.srmist.edu.in/faculty/dr-velmurugan-d/",
        "Designation": "Research Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Profile_Bio-Tech_0047_DSC_9259.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Barathi S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-barathi/",
        "Designation": "Associate Professor",
        "Specialization": "Toxicology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0033_DSC_9276.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Devi A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-devi/",
        "Designation": "Associate Professor",
        "Specialization": "Cancer Research and Stem Cell Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0040_DSC_9267.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Iyappan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-iyappan/",
        "Designation": "Associate Professor",
        "Specialization": "Genetic Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0023_DSC_9288.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Jai Ganesh R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-jai-ganesh/",
        "Designation": "Associate Professor",
        "Specialization": "Animal Biotechnology, Microbial Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0068_DSC_9235.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Jayabrata Das",
        "url": "https://www.srmist.edu.in/faculty/dr-jayabrata-das/",
        "Designation": "Associate Professor",
        "Specialization": "Nano-biosensor Technology for Point-of-care Diagnosis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0021_DSC_9290.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Mohan Kumar D",
        "url": "https://www.srmist.edu.in/faculty/dr-mohan-kumar-d/",
        "Designation": "Associate Professor",
        "Specialization": "Proteomics, Cancer biology and  Small molecule discovery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/06/IMG_7486_a-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Muthukumar R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-muthukumar/",
        "Designation": "Associate Professor",
        "Specialization": "Microbiology and Bioprocess Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0003_DSC_9310.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Nageswaran S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-nageswaran/",
        "Designation": "Associate Professor",
        "Specialization": "Medical Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0070_DSC_9233.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Pachaiappan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-pachaiappan/",
        "Designation": "Associate Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0094_DSC_9207.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Ramani K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-ramani/",
        "Designation": "Associate Professor",
        "Specialization": "Environmental Biotechnology, Industrial Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0019_DSC_9294.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Rex Arunraj D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-rex-arunraj/",
        "Designation": "Associate Professor",
        "Specialization": "Integrative Plant Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Rex-Arunraj-D.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Richard Thilagaraj W",
        "url": "https://www.srmist.edu.in/faculty/dr-w-richard-thilagaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Environmental Biotechnology, Environmental Sciences & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0093_DSC_9208.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Rupachandra S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-rupachandra/",
        "Designation": "Associate Professor",
        "Specialization": "Biochemistry, Immunology, Plant Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0004_DSC_9309-1.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. S. K. M. Habeeb",
        "url": "https://www.srmist.edu.in/faculty/dr-s-k-m-habeeb/",
        "Designation": "Associate Professor",
        "Specialization": "Bioinformatics & Computational Biology, Genomics - Next Generation Sequencing, Computer Aided Drug Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Habeeb-S-K-M.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Sarada D. V. L",
        "url": "https://www.srmist.edu.in/faculty/dr-d-v-l-sarada/",
        "Designation": "Associate Professor",
        "Specialization": "Plant Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DVL.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Shobana.S",
        "url": "https://www.srmist.edu.in/faculty/dr-shobana-s/",
        "Designation": "Associate Professor",
        "Specialization": "Phage Biology and Computational Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/5784-1.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Subhashini S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-subhashini/",
        "Designation": "Associate Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0031_DSC_9278.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Sujatha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sujatha/",
        "Designation": "Associate Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0016_DSC_9297.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Swapna Geetanjali A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-swapna-geetanjali/",
        "Designation": "Associate Professor",
        "Specialization": "Molecular Biology, Plant virology, Plant Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0041_DSC_9265.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Thirumurthy Madhavan",
        "url": "https://www.srmist.edu.in/faculty/dr-thirumurthy-madhavan/",
        "Designation": "Associate Professor",
        "Specialization": "Bioinformatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230405-WA0008-2.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Venkatesan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-venkatesan/",
        "Designation": "Associate Professor",
        "Specialization": "Cell biology, Stem cell biology, Animal biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0015_DSC_9298.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Vinoth Kumar V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-vinoth-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Industrial Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0013_DSC_9300.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Amala Reddy",
        "url": "https://www.srmist.edu.in/faculty/dr-amala-reddy/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0018_DSC_9295.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Anand Thiyagaraj",
        "url": "https://www.srmist.edu.in/faculty/dr-anand-thiyagaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational biology, systems biology  and drug delivery systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0044_DSC_9262.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Anju T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-anju/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioinspiration, Urolithiasis and  Nanotoxicology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Anju.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Balamurugan Srinivasan",
        "url": "https://www.srmist.edu.in/faculty/balamurugan-srinivasan/",
        "Designation": "Assistant Professor",
        "Specialization": "Microalgal Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/044A8934_Balamurugan-New-WebPage-scaled.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Bibin G Anand",
        "url": "https://www.srmist.edu.in/faculty/dr-bibin-g-anand/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Neurodegeneration and Protein Biophysics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/Bibin_edited-e1730915152588.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Dhanavathy G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-dhanavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Diabetes and Cancer, cancer stem cells, drug discovery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dhana.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Jaganathan M. K.",
        "url": "https://www.srmist.edu.in/faculty/mr-m-k-jaganathan/",
        "Designation": "Assistant Professor ( Sr. G )",
        "Specialization": "Pharmaceutical Biotechnology, Toxicology, Environmental Toxicology, Bioinformatics, Molecular biology, Gene manipulation and vector biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Jaganathan_mk_photo.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Kanagaraj Palaniyandi",
        "url": "https://www.srmist.edu.in/faculty/dr-kanagaraj-palaniyandi/",
        "Designation": "Assistant Professor",
        "Specialization": "or Subject Cancer Biology, Stem cells, Endocrine related cancer, drug delivery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0028_DSC_9281.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Koustav Sarkar",
        "url": "https://www.srmist.edu.in/faculty/dr-koustav-sarkar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0097_DSC_9204.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Lavanya J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0032_DSC_9277.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Meenakumari S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-meenakumari/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry and Medicinal Plants",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0084_DSC_9219.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Nitya Nandkishore",
        "url": "https://www.srmist.edu.in/faculty/dr-nitya-nandkishore/",
        "Designation": "Assistant Professor",
        "Specialization": "Developmental biology, stem cells",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/nitya.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Prabakaran D S",
        "url": "https://www.srmist.edu.in/faculty/dr-prabakaran-d-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Radiation Resistance (X-ray, C-ion), EGFR Signaling, Notch Signaling, Epithelial Mesenchymal Transition (EMT), Cancer Stem Cells (CSCs), Cancer Immunotherapy, Radiation Protection.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Prabakaran.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Priya Swaminathan",
        "url": "https://www.srmist.edu.in/faculty/priya-swaminathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer aided drug designing, Bioinformatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0091_DSC_9211.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Radha P",
        "url": "https://www.srmist.edu.in/faculty/mrs-p-radha/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Industrial Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0010_DSC_9303.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Ramya Devi K T",
        "url": "https://www.srmist.edu.in/faculty/dr-k-t-ramya-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Molecular Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/KTR-photo.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Rathinasabapathi P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-rathinasabapathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Molecular diagnostics, Biosensor",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0045_DSC_9261.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Ravichandran Y",
        "url": "https://www.srmist.edu.in/faculty/dr-y-ravichandran/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Biotechnology, Drug design, Protein engineering, Bioprocess Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0012_DSC_9301.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Samuel Jacob B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-samuel-jacob/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioenergy, Environmental Biotechnology, Bioprocess Engineering, Waste to Wealth Strategies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0006_DSC_9307.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Satish Kumar R",
        "url": "https://www.srmist.edu.in/faculty/satish-kumar-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Biofilms and microbiomes (Probiotic & pathogen models), Nematology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/Final-SKR-Upload-2.1.2025.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Sivashankari T. R.",
        "url": "https://www.srmist.edu.in/faculty/dr-t-r-sivashankari/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0082_DSC_9221.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Subhashini S",
        "url": "https://www.srmist.edu.in/faculty/s-subhashini/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Biotechnology and Genetics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0007_DSC_9306.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Vasantharekha R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-vasantharekha/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0005_DSC_9308.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Venkatesh Prabhu M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-venkatesh-prabhu/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioprocess Engineering and Biochemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0069_DSC_9234.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Viswanathan V",
        "url": "https://www.srmist.edu.in/faculty/dr-viswanathan-v/",
        "Designation": "Scientist",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/viswananthan.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Ambikah Gandhi Mathi A G",
        "url": "https://www.srmist.edu.in/faculty/ms-ambikah-gandhi-mathi-a-g/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/121.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Suthamathi G",
        "url": "https://www.srmist.edu.in/faculty/ms-suthamathi-g/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/suthamathi.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Mr. Rajasekar K",
        "url": "https://www.srmist.edu.in/faculty/mr-rajasekar-k/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/rajasekar.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Mr. Udhayarasu B",
        "url": "https://www.srmist.edu.in/faculty/mr-udhayarasu-b/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/udhayarasu.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Jayanthi S",
        "url": "https://www.srmist.edu.in/faculty/ms-jayanthi-s/",
        "Designation": "Teaching Assistant",
        "Specialization": "BIOENGINEERING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/jayanthi.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Meera Bai B",
        "url": "https://www.srmist.edu.in/faculty/ms-meera-bai-b/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/meera.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Peatrise Geofferina I",
        "url": "https://www.srmist.edu.in/faculty/ms-peatrise-geofferina-i/",
        "Designation": "Teaching Assistant",
        "Specialization": "Human Genetics and Molecular Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/peatrise.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Pracilin Priya I",
        "url": "https://www.srmist.edu.in/faculty/ms-pracilin-priya-i/",
        "Designation": "Teaching Assistant",
        "Specialization": "Teaching Assistant - Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/pracilin-priya.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Puja A",
        "url": "https://www.srmist.edu.in/faculty/ms-puja-a/",
        "Designation": "Teaching Assistant",
        "Specialization": "Plant Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/PUJA-A-scaled.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Ms. Sivasankareswari E",
        "url": "https://www.srmist.edu.in/faculty/ms-sivasankareswari-e/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/sivasankareswari.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "title": "Dr. Gobi M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-gobi/",
        "Designation": "Research Associate",
        "Specialization": "Microbiology & Environmental biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0058_DSC_9247.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Jesu Arockia Raj A",
        "url": "https://www.srmist.edu.in/faculty/dr-jesu-arockiaraj/",
        "Designation": "Professor and Head",
        "Specialization": "Toxicology & Pharmacology, Environmental Sciences, Molecular Immunology, Molecular Biology, Free Radical Biology, Fisheries Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Jesu_PS-Size-Photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Sankari D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-sankari/",
        "Designation": "Professor",
        "Specialization": "Biochemistry & Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/16-3-1-scaled-e1677910122361.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. A. Pon Ezhil Buvani",
        "url": "https://www.srmist.edu.in/faculty/dr-a-pon-ezhil-buvani/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Infant Santhose B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-infant-santhose/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600306-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Parthipan P",
        "url": "https://www.srmist.edu.in/faculty/dr-parthipan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/6-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Pavan Kumar Dara",
        "url": "https://www.srmist.edu.in/faculty/dr-pavan-kumar-dara/",
        "Designation": "Assistant Professor",
        "Specialization": "Protein Chemistry; Nanotechnology; Nutritional Biochemistry; Marine Biomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/6141-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Prasanth Bhatt N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-prasanth-bhatt/",
        "Designation": "Assistant Professor",
        "Specialization": "Aquaculture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/1-5.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Raja Ganesan",
        "url": "https://www.srmist.edu.in/faculty/ganesan-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Raja-Ganesan.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Samuel Joshua Pragasam S",
        "url": "https://www.srmist.edu.in/faculty/dr-samuel-joshua-prakasam/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/5-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Senbagam D",
        "url": "https://www.srmist.edu.in/faculty/senbagam-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Microbial Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/IMG_54271-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Swamynathan G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-swamynathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Animal Models, Toxicology and Nanobiotechnology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/17951-9940614794ab.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Thanigaivel S",
        "url": "https://www.srmist.edu.in/faculty/dr-thanigaivel-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Aquaculture and Nanobiotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG_20230223_193422-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Thirumurugan D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-thirumurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/photo-e1711285828803.png"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Vidhya V.G",
        "url": "https://www.srmist.edu.in/faculty/dr-v-g-vidhya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Proteomics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600087-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "title": "Dr. Vijaya Bharathi S",
        "url": "https://www.srmist.edu.in/faculty/s-vijaya-bharathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/3-4-scaled.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Vishali S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-vishali/",
        "Designation": "Associate Professor and Head",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Vishali_Chemical.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Rajesh M.P",
        "url": "https://www.srmist.edu.in/faculty/dr-m-p-rajesh/",
        "Designation": "Professor",
        "Specialization": "Biochemical Engineering, Environmental Science and Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Rajesh-M-P.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Anandhakumar Sundaramurthy",
        "url": "https://www.srmist.edu.in/faculty/dr-s-anandha-kumar/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr.-Anandhakumar-Sundaramurthy-2.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Suresh.K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-suresh/",
        "Designation": "Associate Professor",
        "Specialization": "Process Modeling and Simulation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Suresh-K.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Tamilarasan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-tamilarasan/",
        "Designation": "Associate Professor",
        "Specialization": "Bioenergy Specialist | Waste to Energy | Shaping the Future of Sustainability",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0076_DSC_9227.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Anbalagan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-anbalagan/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering, Energy Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Anbalagan-K.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Deepa K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-deepa/",
        "Designation": "Assistant Professor",
        "Specialization": "•Environmental Nanotechnology •Reaction Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/deepa-photo.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Kavitha E",
        "url": "https://www.srmist.edu.in/faculty/e-kavitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/profile-photo.jpeg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Keerthiga G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-keerthiga/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrochemical CO2 reduction, Photocatalytic redemption of waste water, Sensing of adulterants",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Keerthiga-G.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Kiruthika S",
        "url": "https://www.srmist.edu.in/faculty/s-kiruthika/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Kiruthika-S.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Magesh Kumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-magesh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Magesh-Kumar-M.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Muthamilselvi P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-muthamilselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Muthamilselvi-P.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Poonguzhali E",
        "url": "https://www.srmist.edu.in/faculty/ms-poonguzhali-e/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Poonguzhali-E-1.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Sam David Swaminathan",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sam-david/",
        "Designation": "Assistant Professor",
        "Specialization": "Particle Technology, Carbon capture/Mineralization/Release, Critical Mineral Recovery, Application of multiphase system, Emulsion Liquid Membrane, Electrochemical System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Website-photo-Sam-1.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Selvam K",
        "url": "https://www.srmist.edu.in/faculty/k-selvam/",
        "Designation": "Assistant Professor",
        "Specialization": "Unit Operations in Chemical Engineering, Membrane Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Selvam-K.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr. Sofiya K",
        "url": "https://www.srmist.edu.in/faculty/k-sofiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Sofiya-K-1.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Mr. Ganesh V",
        "url": "https://www.srmist.edu.in/faculty/mr-v-ganesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr.-Ganesh-V.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "title": "Dr.Prabhakar.S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-prabhakar/",
        "Designation": "Adjunct Faculty",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Capture.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Bernaurdshaw Neppolian",
        "url": "https://www.srmist.edu.in/faculty/dr-bernaurdshaw-neppolian/",
        "Designation": "Dean (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr_-Bernaurdshaw-Neppolian.jpeg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Arthanareeswari M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-arthanareeswari/",
        "Designation": "Professor & Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4006.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Helen Annal Therese",
        "url": "https://www.srmist.edu.in/faculty/dr-helen-annal-therese/",
        "Designation": "Professor",
        "Specialization": "Chemistry, Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3977.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Jagadeesh Malineni",
        "url": "https://www.srmist.edu.in/faculty/dr-jagadeesh-malineni/",
        "Designation": "Professor of Practice",
        "Specialization": "Organic Synthesis , Medicinal Chemistry & Drug discovery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jagdeesh.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Jeyalakshmi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-jeyalakshmi/",
        "Designation": "Professor",
        "Specialization": "Material Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3946.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Prof. Dr. Ayyappanpillai Ajayaghosh",
        "url": "https://www.srmist.edu.in/faculty/dr-ayyappanpillai-ajayaghosh/",
        "Designation": "Shanti Swarup Bhatnagar Chair Professor",
        "Specialization": "Fluorescent materials, Photoresponsive materials, Organogels, Molecular probes, Covalent Organic Frameworks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4012.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Abirami N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-abirami/",
        "Designation": "Associate Professor",
        "Specialization": "Phytochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3982.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Ananthanarayanan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-ananthanarayanan/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3971.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Arockia Selvi J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-arockia-selvi/",
        "Designation": "Associate Professor",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3985.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Baburaj Baskar",
        "url": "https://www.srmist.edu.in/faculty/dr-baburaj-baskar/",
        "Designation": "Associate Professor",
        "Specialization": "Synthetic Organic Chemistry, Bio-organic Chemistry, Chemical Biology and Medicinal Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3929.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Datta K. K. R.",
        "url": "https://www.srmist.edu.in/faculty/dr-k-k-r-datta/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3972-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Devikala S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-devikala/",
        "Designation": "Associate Professor",
        "Specialization": "Chemistry  Phone Number 044 - 27427452270 EXTN 2604",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3979.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Ganesan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-ganesan/",
        "Designation": "Associate Professor",
        "Specialization": "Dye-sensitized solar cells",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/ganesan-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Ganesh Pandian M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-ganesh-pandian/",
        "Designation": "Associate Professor",
        "Specialization": "Medicinal Inorganic Chemistry,      Nanodrug delivery,       Bio-organometallic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4007.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Kalaivizhi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-kalaivizhi/",
        "Designation": "Associate Professor",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3978.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Kumaran V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-kumaran/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3926.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Maduraiveeran G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-maduraiveeran/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3931-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Maiyalagan T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-maiyalagan/",
        "Designation": "Research Associate Professor",
        "Specialization": "Electrochemical Energy Conversion and Storage",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3997.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Prakash Muthuramalingam",
        "url": "https://www.srmist.edu.in/faculty/dr-prakash-muthuramalingam/",
        "Designation": "Research Associate Professor",
        "Specialization": "Theoretical/Computational Chemistry and Biology; Molecular Modeling Studies on Gas Adsorption, Catalysis, and Conversion using Ionic Liquids Based Composite Materials; Computer Aided Drug Design, Smart Drug Delivery, Molecular Mechanics, Molecular Dynamics and Simulations.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3925.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Priyadip Das",
        "url": "https://www.srmist.edu.in/faculty/dr-priyadip-das/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3927.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Samarendra Maji",
        "url": "https://www.srmist.edu.in/faculty/dr-samarendra-maji/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-passport-size-2024.jpeg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Senthil Andavan G. T.",
        "url": "https://www.srmist.edu.in/faculty/dr-g-t-senthil-andavan/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/senthil-andavan-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Shanmugan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-shanmugan/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3976.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Soumyajit Ghosh",
        "url": "https://www.srmist.edu.in/faculty/dr-soumyajit-ghosh/",
        "Designation": "Research Associate Professor",
        "Specialization": "Organic Crystal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Soumyajit-photo.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Sudha V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-sudha/",
        "Designation": "Associate Professor",
        "Specialization": "Theoretical & Computational Electrochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4003.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Swami Anita",
        "url": "https://www.srmist.edu.in/faculty/dr-swami-anitha/",
        "Designation": "Associate Professor",
        "Specialization": "Inorganic and Materials Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3999.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Venkatramaiah Nutalapati",
        "url": "https://www.srmist.edu.in/faculty/dr-venkatramaiah-nutalapati/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Profile-Photo-2.jpeg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Abhijit saha",
        "url": "https://www.srmist.edu.in/faculty/dr-abhijit-saha/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic Chemistry/Chemical Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3951.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Abhilash Pullanchiyodan",
        "url": "https://www.srmist.edu.in/faculty/dr-abhilash-pullanchiyodan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3959.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Anandhakumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-anandhakumar-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Chemistry (Electrochemistry)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3958.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Anjan Bedi",
        "url": "https://www.srmist.edu.in/faculty/dr-anjan-bedi/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Physical Organic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. Anjan Bedi.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Anjan Das",
        "url": "https://www.srmist.edu.in/faculty/dr-anjan-das/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3957.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Anju V G",
        "url": "https://www.srmist.edu.in/faculty/dr-anju-v-g/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-2.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Arulmozhi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-arulmozhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic Synthesis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3991.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Arun Prakash P",
        "url": "https://www.srmist.edu.in/faculty/dr-arun-prakash-p/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3952.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Clament Sagaya Selvam",
        "url": "https://www.srmist.edu.in/faculty/dr-clament-sagaya-selvam/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Electrochemical Energy Conversion Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3961.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Gopal Chandru Senadi",
        "url": "https://www.srmist.edu.in/faculty/dr-gopal-chandru-senadi/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organic Synthesis and Medicinal Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3963.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Gopinath P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-gopinath/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organic and Medicinal chemistry, Chemical biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3964.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Goutam Kumar Kole",
        "url": "https://www.srmist.edu.in/faculty/dr-goutam-kumar-kole/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3934.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Jayanta Samanta",
        "url": "https://www.srmist.edu.in/faculty/dr-jayantasamanta/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Supramolecular Chemistry, Organic Cages and Frameworks, Molecular Recognition, Crystal Engineering, Single-crystal X_ray Crystallography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3923-e1713710940757.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. John Bosco A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-john-bosco/",
        "Designation": "Assistant Professor",
        "Specialization": "MATERIALS CHEMISTRY, SEMICONDUCTOR PHOTOCATALYSIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-A.-John-Bosco.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Karthik D",
        "url": "https://www.srmist.edu.in/faculty/dr-karthik-d/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organic semiconductors, organic electronics.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3995.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Karthikeyan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-karthikeyan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Chemistry/ Environmental Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3932.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Mariappan M",
        "url": "https://www.srmist.edu.in/faculty/dr-mariappan-m/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "Biomimetic models of Heme Oxygenase and Vitamin B12 model systems. Water oxidation catalysts, Nucleic acid-Drug interaction, Anion and Cation Sensors-Bio-inorganic chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4011.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Mihir Ghosh",
        "url": "https://www.srmist.edu.in/faculty/dr-mihir-ghosh/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Chemistry, Organic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3937.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Natarajan Balasubramaniyan",
        "url": "https://www.srmist.edu.in/faculty/dr-b-natarajan/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3950.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Naveen Malik",
        "url": "https://www.srmist.edu.in/faculty/dr-naveen-malik/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3935.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Noufal Kandoth",
        "url": "https://www.srmist.edu.in/faculty/dr-noufal-kandoth/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-6.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Palash Sanphui",
        "url": "https://www.srmist.edu.in/faculty/dr-palash-sanphui/",
        "Designation": "Assistant Professor",
        "Specialization": "Crystal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Palash-new-photo-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Panneerselvam Perumal",
        "url": "https://www.srmist.edu.in/faculty/dr-panneerselvam-p/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "General Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3966.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Paradesi D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-paradesi/",
        "Designation": "Assistant Professor",
        "Specialization": "Polymer Science, Fuel Cell, Analytical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-DP-.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Prasant Kumar Nayak",
        "url": "https://www.srmist.edu.in/faculty/dr-prasant-kumar-nayak/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Electrochemistry, Physical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/prasant-kumar.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Pushpa Malini T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-pushpa-malini/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3993.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Rahul Dev Mukhopadhyay",
        "url": "https://www.srmist.edu.in/faculty/dr-rahul-dev-mukhopadhyay/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Supramolecular Chemistry, Stimuli-responsive materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3984.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Rahul Narayanan",
        "url": "https://www.srmist.edu.in/faculty/dr-rahul-narayanan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "My research area mainly focuses on Mass spectrometry, instrumentation and applications.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3965.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Rajorshi Das",
        "url": "https://www.srmist.edu.in/faculty/dr-rajorshi-das/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organometallic chemistry, Supramolecular chemistry, Crystal engineering, Chemistry of intertwined and interlocked molecules",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3956.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Ravindran E",
        "url": "https://www.srmist.edu.in/faculty/dr-ravindran-e/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Chemistry - Material Chemistry for optoelectronics and biomedical application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3930.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Sivakami M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-sivakami/",
        "Designation": "Assistant Professor",
        "Specialization": "Coordination Chemistry & Organic Synthesis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3990.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Sivaramapanicker Sreejith",
        "url": "https://www.srmist.edu.in/faculty/dr-sreejith-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Bio Nano Systems, Organic Chemistry, Biological Imaging, Ultrasensitive Biosensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sreejith-Image-SRM-1-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Srinivasarao Kancharla",
        "url": "https://www.srmist.edu.in/faculty/dr-srinivasarao-kancharla/",
        "Designation": "Assistant Professor",
        "Specialization": "Physical and Inorganic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3973.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Sundaravadivel E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-sundaravadivel/",
        "Designation": "Assistant Professor",
        "Specialization": "Nano and Energy Advances",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3933.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Susnata Pramanik",
        "url": "https://www.srmist.edu.in/faculty/dr-susnata-pramanik/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/photoSusnataPramanik-2.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Tanay Kundu",
        "url": "https://www.srmist.edu.in/faculty/dr-tanay-kundu/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3943.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Tapan Kumar Mistri",
        "url": "https://www.srmist.edu.in/faculty/dr-tapan-kumar-mistri/",
        "Designation": "Assistant Professor",
        "Specialization": "Biophysical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3936.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Tarak Nath Mandal",
        "url": "https://www.srmist.edu.in/faculty/dr-tarak-nath-mandal/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3955.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Tumpa Sadhukhan",
        "url": "https://www.srmist.edu.in/faculty/dr-tumpa-sadhukhan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3989.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Vadivel S",
        "url": "https://www.srmist.edu.in/faculty/dr-vadivel-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3928.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Vedhanarayanan B",
        "url": "https://www.srmist.edu.in/faculty/dr-vedhanarayanan-b/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3944-e1713439979706.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Vengadesh Kumara Mangalam R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-vengadesh-kumara-mangalam/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3975.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Santi Prasad Rath",
        "url": "https://www.srmist.edu.in/faculty/santi-prasad-rath/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. Pratim Kumar Chattaraj",
        "url": "https://www.srmist.edu.in/faculty/dr-pratim-kumar-chattaraj/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/PKC-1-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "title": "Dr. V. Subramanian",
        "url": "https://www.srmist.edu.in/faculty/prof-subramanian-v/",
        "Designation": "Visiting Professor",
        "Specialization": "Theoretical and Computational Quantum Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/IMG_0201.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Prof. Augustine Maniraj Pandian G",
        "url": "https://www.srmist.edu.in/faculty/g-augustine-maniraj-pandian/",
        "Designation": "Professor and Dean",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Augustine_Photo-Cream.jpeg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Ravichandran P.T",
        "url": "https://www.srmist.edu.in/faculty/dr-p-t-ravichandran/",
        "Designation": "Professor & Head",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0714-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Annadurai R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-annadurai-2/",
        "Designation": "Professor",
        "Specialization": "Civil Engineering, Remote Sensing and GIS.  Phone Number 1470",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0806-scaled-e1667652590547.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Gunasekaran K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-gunasekaran/",
        "Designation": "Professor",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_K_Gunasekaran-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Satyanarayanan K. S",
        "url": "https://www.srmist.edu.in/faculty/dr-k-s-satyanarayanan-2/",
        "Designation": "Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0744-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Senthil Selvan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-senthil-selvan-2/",
        "Designation": "Professor",
        "Specialization": "Light Gauge Steel Structures, Seismic Design of Structures, High Performance Concrete, Steel Concrete Composite Structures, Pervious Concrete Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.SSS-Photo.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Sivakumar R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-sivakumar-2/",
        "Designation": "Professor",
        "Specialization": "Remote Sensing & GIS and Its Application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Siva.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Umamaheswari N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-umamaheswari/",
        "Designation": "Professor",
        "Specialization": "Structural Engineering/ Steel-Concrete Composite Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.-N.-Umamaheswari-1.jpeg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Aparna S. Bhaskar",
        "url": "https://www.srmist.edu.in/faculty/dr-aparna-s-bhaskar-2/",
        "Designation": "Associate Professor",
        "Specialization": "Remote Sensing and GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. Aparna S. Bhaskar.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Balasubramanian M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-balasubramanian-2/",
        "Designation": "Associate Professor",
        "Specialization": "Construction Engineering & Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/1-1-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Divya Krishnan K",
        "url": "https://www.srmist.edu.in/faculty/dr-divya-krishnan-k-2/",
        "Designation": "Associate Professor",
        "Specialization": "Geotechnical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DKK-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Kannan Rajkumar P.R",
        "url": "https://www.srmist.edu.in/faculty/dr-p-r-kannan-rajkumar-2/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG-0003-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Karuppasamy S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-karuppasamy-2/",
        "Designation": "Associate Professor",
        "Specialization": "Digital Photogrammetry, Airborne Laser Terrain Mapping, Geomatics Surveying",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Karuppasamy_Sudalaimuthu_Website_SRM-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Krishnaraj L",
        "url": "https://www.srmist.edu.in/faculty/dr-l-krishnaraj-2/",
        "Designation": "Associate Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/LKR-photo-1-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Nagalakshmi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-nagalakshmi-2/",
        "Designation": "Associate Professor",
        "Specialization": "Remote Sensing & GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0793-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Padma Rekha A",
        "url": "https://www.srmist.edu.in/faculty/a-padma-rekha-2/",
        "Designation": "Associate Professor",
        "Specialization": "Transportation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0811-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Pannirselvam N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-pannirselvam-2/",
        "Designation": "Associate Professor",
        "Specialization": "Structural Engineering/ Steel-Concrete Composite Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pannirselvam-1024x683-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Prasanna K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-prasanna-2/",
        "Designation": "Associate Professor",
        "Specialization": "Civil Engineering with Specilization in Environmental Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.-K.-Prasanna-Photo-Website-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Purushothaman P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-purushothaman-2/",
        "Designation": "Associate Professor",
        "Specialization": "Geology, Environmental Geochemitry, Low temperature aqueous geochemistry, Stable Isotope Hydrology, Environmental Engineering, Environmental impact assessment",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0708-scaled-e1667652899113.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Ravi R",
        "url": "https://www.srmist.edu.in/faculty/r-ravi/",
        "Designation": "Associate Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0769-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Sachikanta Nanda",
        "url": "https://www.srmist.edu.in/faculty/dr-sachikanta-nanda-2/",
        "Designation": "Associate Professor",
        "Specialization": "Geology, Remote sensing & GIS, EIA, Disaster Management Studies, Surveying",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Sachikanta-Nanda_Pic.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Sathyanathan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-sathyanathan-2/",
        "Designation": "Associate Professor",
        "Specialization": "Water Resources Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Sathyanathan_SRM-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Satish Kumar J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-satish-kumar-2/",
        "Designation": "Associate Professor",
        "Specialization": "Remote sensing, Geology & GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0788-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Anandh K. S",
        "url": "https://www.srmist.edu.in/faculty/dr-k-s-anandh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/KSA-Photo-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Anandh S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-anandh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering & Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0756-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Arokiaprakash A",
        "url": "https://www.srmist.edu.in/faculty/dr-arokiaprakash-a-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0795-3-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Arunkumar C",
        "url": "https://www.srmist.edu.in/faculty/mr-c-arunkumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0559-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Bhuvaneshwari M",
        "url": "https://www.srmist.edu.in/faculty/bhuvaneshwari-m-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering, Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0739-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Dhanasekar Sevugamoorthy",
        "url": "https://www.srmist.edu.in/faculty/mr-dhanasekar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering-Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0864-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Durgadevagi Shanmugavel",
        "url": "https://www.srmist.edu.in/faculty/dr-durgadevagi-shanmugavel-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DD-Image.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Ganapathy Ramasamy N",
        "url": "https://www.srmist.edu.in/faculty/mr-ganapathy-ramasamy/",
        "Designation": "Assitant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG_0742-3-scaled-e1667652695237.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Gopinath S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-gopinath-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering & Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0802-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Jaishree D",
        "url": "https://www.srmist.edu.in/faculty/jaishree-d-2/",
        "Designation": "ASSISTANT PROFESSOR",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0707-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Janani V",
        "url": "https://www.srmist.edu.in/faculty/v-janani-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Mechanics and Foundation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0717-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Justus Reymond D",
        "url": "https://www.srmist.edu.in/faculty/mr-d-justus-reymond-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0711-justus-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Kamalanandhini M",
        "url": "https://www.srmist.edu.in/faculty/kamalanandhini-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Remote Sensing and GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20231006-WA0005-e1710954522404.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Krishnaveni C",
        "url": "https://www.srmist.edu.in/faculty/c-krishnaveni/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineeirng",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0865-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Krithika P",
        "url": "https://www.srmist.edu.in/faculty/ms-p-krithika-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0740-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Manikandaprabhu Alias Saravanan S",
        "url": "https://www.srmist.edu.in/faculty/dr-manikandaprabhu-alias-saravanan-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Concrete technology, Structural engineering and Construction management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG_0689-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Manimaran A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-manimaran-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering, Remote Sensing and Geographical Information System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-4-scaled-e1680250195800.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Manivel S",
        "url": "https://www.srmist.edu.in/faculty/s-manivel-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Image-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Muthu Kumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-muthu-kumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil – Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/srm-faculty-profile-photo-smk-scaled-e1730961529411.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Parthasarathi N",
        "url": "https://www.srmist.edu.in/faculty/mr-n-parthasarathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering (Structural Engineering)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0747-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Pavithra C",
        "url": "https://www.srmist.edu.in/faculty/pavithra-c-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0743-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Pradeep S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-pradeep-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0805-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Prakash Chandar S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-prakash-chandar/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering And Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0688-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Prakash M",
        "url": "https://www.srmist.edu.in/faculty/m-prakash-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_0047-copy-e1680256989635.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Prasath Kumar V.R",
        "url": "https://www.srmist.edu.in/faculty/dr-v-r-prasath-kumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. V. R. Prasath Kumar.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Rajkumar R",
        "url": "https://www.srmist.edu.in/faculty/r-raj-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/RAJKUMAR-DEPT-PHOTO-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Rajprasad J",
        "url": "https://www.srmist.edu.in/faculty/mr-j-rajprasad/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0679-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Ramasubramani R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-ramasubramani/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering with Specialization in Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0558-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Sabarigirivasan L",
        "url": "https://www.srmist.edu.in/faculty/l-sabari-giri/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Passport-Pic-2.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Shaik Niyazuddin Guntakal",
        "url": "https://www.srmist.edu.in/faculty/mr-shaik-niyazuddin-guntakal/",
        "Designation": "Assistant Professor",
        "Specialization": "Water Resources Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0702-2-Niyaz-Photo-for-faculty-profile-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Sindhu Nachiar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sindhu-nachiar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/PHOTO-2023-03-31-06-40-08.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Sridhar M.B",
        "url": "https://www.srmist.edu.in/faculty/mr-m-b-sridhar/",
        "Designation": "ASSISTANT PROFESSOR",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Sri_Pic_pp_01.09.2023_80kb.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Sudha C",
        "url": "https://www.srmist.edu.in/faculty/ms-c-sudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Ms. C. Sudha.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Syed Abdul Rahman S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-syed-abdul-rahman-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0750-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Thiagu H",
        "url": "https://www.srmist.edu.in/faculty/mr-h-thiagu-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0760-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Vimalanandan G",
        "url": "https://www.srmist.edu.in/faculty/mr-g-vimalanandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0686-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Vinu Prakash K. C",
        "url": "https://www.srmist.edu.in/faculty/mr-k-c-vinu-prakash-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Vinu-sir-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Mr. Chezhiyan S",
        "url": "https://www.srmist.edu.in/faculty/chezhiyan-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Geotechnical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Chezhiyan-S.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Mr. Premkumar G",
        "url": "https://www.srmist.edu.in/faculty/mr-g-premkumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0699-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Mr. Ramesh S",
        "url": "https://www.srmist.edu.in/faculty/s-ramesh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/ramesh.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Mr. Senthil Kumar G",
        "url": "https://www.srmist.edu.in/faculty/mr-g-senthil-kumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/G.Senthil-kumar-2-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Mr. Sivaprakash G",
        "url": "https://www.srmist.edu.in/faculty/sivaprakash-g-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Transportation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Website-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Mr. Vengadesh Subramanian S. A",
        "url": "https://www.srmist.edu.in/faculty/mr-s-a-vengadesh-subramanian-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0800-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Ms. Jeyashree T.M",
        "url": "https://www.srmist.edu.in/faculty/t-m-jeyashree-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0738-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Ms. Karthiga S",
        "url": "https://www.srmist.edu.in/faculty/karthiga-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Karthiga-S.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Ms. Mary Rebekah Sharmila",
        "url": "https://www.srmist.edu.in/faculty/ms-mary-rebekah-sharmila-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil/Geotechnical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0713-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Krishna R Reddy",
        "url": "https://www.srmist.edu.in/faculty/dr-krishna-r-reddy/",
        "Designation": "Adjunct Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Dr. Mohammed Alias Yusof",
        "url": "https://www.srmist.edu.in/faculty/dr-mohammed-alias-yusof/",
        "Designation": "Adjunct Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "title": "Mr. Srinivasasenthil S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-srinivasasenthil/",
        "Designation": "Teaching. Asst",
        "Specialization": "Energy Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/IMG_0748-4-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Kavitha A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-k-kavitha/",
        "Designation": "Associate Professor and Head",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/5-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Angayarkanni R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-angayarkanni/",
        "Designation": "Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/20-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Sankar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-sankar/",
        "Designation": "Associate Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Sankar-P.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Thilagaraj A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-thilagaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2-1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Akila B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-akila/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource Management, Company Law, Corporate Ethics, Banking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-3-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Antony Raj S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-antony-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/13-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Bhuvaneswari D",
        "url": "https://www.srmist.edu.in/faculty/mrs-d-bhuvaneshwari/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing & Entrepreneurship",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/19-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Deepan A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-deepan/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Deepan-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Elavarasan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-elavarasan/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource, Organizational Behaviour, Emotional Intelligence, CSR & Tax Reforms.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-Elavarasan-R.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Hemanathan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-hemanathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/7-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Jeevarathinam M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-jeevarathinam/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/extra-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Jenesiszodykha V",
        "url": "https://www.srmist.edu.in/faculty/dr-jenesis-v/",
        "Designation": "Assistant Professor",
        "Specialization": "COMMERCE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/7321-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Lavanya Veeran",
        "url": "https://www.srmist.edu.in/faculty/ms-lavanya-veeran/",
        "Designation": "Assistant Professor",
        "Specialization": "Entrepreneurship, Human Resource Management and Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/14-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Monica K",
        "url": "https://www.srmist.edu.in/faculty/dr-monica-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Financial accounting, Performance management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/1693810321925-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Praveen K B",
        "url": "https://www.srmist.edu.in/faculty/dr-k-b-praveen/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-K-B-Praveen-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Prem Anand B",
        "url": "https://www.srmist.edu.in/faculty/dr-prem-anand-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Accounting & Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/IMG-20231007-WA0008-1.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Priya U",
        "url": "https://www.srmist.edu.in/faculty/dr-u-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/8-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Sangeetha G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-sangeetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/15-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Sivaperumal K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-sivaperumal/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/13-2-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Dr. Solomon Thangadurai J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-soloman-thangadurai/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/10-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "title": "Mrs. Meerabai M",
        "url": "https://www.srmist.edu.in/faculty/m-meerabai/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/4-2-scaled.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Lakshmi C",
        "url": "https://www.srmist.edu.in/faculty/c-lakshmi/",
        "Designation": "Professor and Associate Chairperson",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.C.Lakshmi-Profile_photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Annie Uthra R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-annie-uthra/",
        "Designation": "Professor and Head",
        "Specialization": "Cloud Computing , Machine Learning, Internet of Things, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Dr.R.-Annie-Uthra.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Alice Nithya A",
        "url": "https://www.srmist.edu.in/faculty/mrs-a-alice-nithya/",
        "Designation": "Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Computer Vision, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Alice-Nithya.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Ferni Ukrit M",
        "url": "https://www.srmist.edu.in/faculty/ms-m-ferni-ukrit/",
        "Designation": "Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Dr.M.Ferni-Ukrit.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Maragatham G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-maragatham/",
        "Designation": "Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Emanager-_Maragatham_photo_final-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Saad Yunus Sait",
        "url": "https://www.srmist.edu.in/faculty/dr-saad-yunus-sait/",
        "Designation": "Professor",
        "Specialization": "or Subject Computer Science Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4456.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Uma M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-uma/",
        "Designation": "Professor",
        "Specialization": "Computer Science Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4339.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr.  Abirami M. S",
        "url": "https://www.srmist.edu.in/faculty/dr-m-s-abirami/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Pattern Recognition, Parallel and Distributed Computing, Internet of Things.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4393_M.S.Abirami.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Amudha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-amudha/",
        "Designation": "Associate Professor",
        "Specialization": "Deep Learning,Web Programming, Computer Networks , Wireless Sensor Networks, Mobile and Wireless Communication, Machine Learning,IOT,Any Programming language(C,C++,Java,Python)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4395.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Amuthadevi C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-amuthadevi/",
        "Designation": "Associate Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4328-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Arivazhagan N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-arivazhagan/",
        "Designation": "Associate Professor",
        "Specialization": "Software engineering, DBMS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-15-at-3.23.44-PM.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Aruna S",
        "url": "https://www.srmist.edu.in/faculty/aruna-s/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4495-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Athira Nambiar",
        "url": "https://www.srmist.edu.in/faculty/dr-athira-m-nambiar/",
        "Designation": "Research Associate Professor",
        "Specialization": "Artificial Intelligence (18CSC305J), Digital Image Processing (18CSE353T), Deep Learning Techniques(18AIC301J)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4480.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Babu R",
        "url": "https://www.srmist.edu.in/faculty/dr-babu-r/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4422.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Beaulah Jeyavathana R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-beaulah-jeyavathana/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Software Engineering.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4338-3.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Hariharan B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-hariharn/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing , Machine Learning, Internet of Things, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4331.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Jothi B",
        "url": "https://www.srmist.edu.in/faculty/b-jothi/",
        "Designation": "Associate Professor",
        "Specialization": "Department of Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-10-at-2.38.11-PM.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Karthick S",
        "url": "https://www.srmist.edu.in/faculty/s-karthik/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining, Object Oriented Programming, Human Computer Interaction, Knowledge Based Systems, Computer Networks, TCP/IP Principles, Mobile Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4415-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Krishnaveni S",
        "url": "https://www.srmist.edu.in/faculty/dr-krishnaveni-s/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security, Cloud Computing, IoT, Machine Learning and Deep Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/krishnaveni.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Maheshwari A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-maheshwari/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/Mahee-Passport-size-photo.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Maheswari M",
        "url": "https://www.srmist.edu.in/faculty/m-maheswari/",
        "Designation": "Associate Professor",
        "Specialization": "Data Analytic/Networking/Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Maheswari-Profile-photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Nagendra Prabhu S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-nagendra-prabhu/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security, Cloud Computing, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4457.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Revathi A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-revathi/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/10-1.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Robert Singh A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-robert-singh/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/DSC_4357.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sadagopan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sadagopan/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning in Computer Vision, Medical Image Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sadagopan-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sakthi U",
        "url": "https://www.srmist.edu.in/faculty/dr-u-sakthi/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/SAKTHISRMPROFILE-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Saranya A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-saranya/",
        "Designation": "Associate Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-05-at-12.40.16-PM-1.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Saravanan T R",
        "url": "https://www.srmist.edu.in/faculty/dr-t-r-saravanan/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Computer networks, Mobile Computing, Information Retrieval",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4421.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. SelvaKumara Samy S",
        "url": "https://www.srmist.edu.in/faculty/s-selva-kumara-samy/",
        "Designation": "Associate Professor",
        "Specialization": "AI and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4423-1-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Senthil Kumar G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-senthil-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/senthil-kumar.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Shiny Angel T S",
        "url": "https://www.srmist.edu.in/faculty/dr-t-s-shiny-angel/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, Data Mining, Computer Networks, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-15-at-9.01.27-AM.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Siva R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-siva/",
        "Designation": "Associate Professor",
        "Specialization": "Text Mining, Cloud Computing, Machine Learning, Internet of Things, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/7.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Snehalatha N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-snehalatha/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, Computer networks, Wireless networks, Artificial Intelligence, Machine Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_44041.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sudha Rajesh",
        "url": "https://www.srmist.edu.in/faculty/dr-sudha-rajesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Data Mining and Software Engineering.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Dr.-Sudha-Rajesh-Profile-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sumathy G",
        "url": "https://www.srmist.edu.in/faculty/dr-sumathy-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.Sumathy-website-photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr.  Anupama C.G",
        "url": "https://www.srmist.edu.in/faculty/ms-c-g-anupama/",
        "Designation": "Assistant Director International Relations, Assistant Professor",
        "Specialization": "Software Engineering, Software Verification and Validation, Big Data Analytics, Software Project Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4473.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Abijah Roseline. S",
        "url": "https://www.srmist.edu.in/faculty/dr-abijah-roseline/",
        "Designation": "Assistant Professor",
        "Specialization": "Cybersecurity, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4449.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Akshya Jothi",
        "url": "https://www.srmist.edu.in/faculty/mrs-akshya-jothi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Geometry, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Akshya-Photo.webp"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Amutha A.L",
        "url": "https://www.srmist.edu.in/faculty/amutha-a-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Analysis, Artificial Intelligence , Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/A-L-Amutha-recent-photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Angelin Claret .S.P",
        "url": "https://www.srmist.edu.in/faculty/dr-s-p-angelin-claret/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning based Health care sectors, Component Based Technology, Digital Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Angelin_Profile_Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Anitha D",
        "url": "https://www.srmist.edu.in/faculty/anitha-d/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/College-profile-photo-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Anousouya Devi M",
        "url": "https://www.srmist.edu.in/faculty/dr-anousouya-devi-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4444.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Antony Sophia N",
        "url": "https://www.srmist.edu.in/faculty/dr-antony-sophia-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, AI & ML, Data Science, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4452.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Arun C",
        "url": "https://www.srmist.edu.in/faculty/mr-c-arun/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Software Testing, Artificial Intelligence, Web Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4461.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Arunarani A R",
        "url": "https://www.srmist.edu.in/faculty/dr-ar-aruna-rani/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Image Processing, Machine Learning, Artificial Intelligence, Data Mining and Bio Informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4382.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Athilakshmi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-athilakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Bioinformatics, Big Data Analysis, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/athilakshmi_photo_new.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Babu K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-babu/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4425.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Dinesh G",
        "url": "https://www.srmist.edu.in/faculty/dr-dinesh-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Cognitive Radio Networks, Mobile Computing, Data Science, Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dinesh.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Geetha P",
        "url": "https://www.srmist.edu.in/faculty/dr-geetha-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Green Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr-P-Geetha.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Gopinath N",
        "url": "https://www.srmist.edu.in/faculty/dr-gopinath-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantum Cryptography, Data Structures, Information Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4420.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Gopirajan PV",
        "url": "https://www.srmist.edu.in/faculty/dr-gopirajan-pv/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning, Artificial Intelligence, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Gopirajan-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Gowtham Padmanabhan",
        "url": "https://www.srmist.edu.in/faculty/dr-gowtham-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/gowtham.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Grace Shalini T",
        "url": "https://www.srmist.edu.in/faculty/dr-grace-shalini-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/9.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Hariprasad S",
        "url": "https://www.srmist.edu.in/faculty/dr-hariprasad-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/5Y0A6197-copy-scaled-e1729236133115.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Illakiya T",
        "url": "https://www.srmist.edu.in/faculty/dr-illakiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Medical image processing, Computer Vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/photo.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Jackulin Mahariba A",
        "url": "https://www.srmist.edu.in/faculty/a-jackulin-mahariba/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, GIS, and Algorithm Design and Analysis.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4464.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Jayakanth J J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-j-jayakanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Robotics, Embedded Software development, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/J-J-Jayakanth.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Jeyasudha J",
        "url": "https://www.srmist.edu.in/faculty/j-jeyasudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Social Media Analytics, Text Processing,Machine Learning and Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4499.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Joseph James S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-joseph-james/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Theory of Computation, Compiler Design, Big Data Analytics, Design and Analysis of Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Joseh-Profile_photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Kaavya Kanagaraj",
        "url": "https://www.srmist.edu.in/faculty/dr-kaavya-kanagaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Image and Video Processing, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4363.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Kamal Kishor Choure",
        "url": "https://www.srmist.edu.in/faculty/dr-kamal-kishor-choure/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/kk.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Kanimozhi N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-kanimozhi/",
        "Designation": "Assistant Professor",
        "Specialization": "ARTIFICIAL INTELLIGENCE, MACHINE LEARNING AND DEEP LEARNING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/Kanimozhi_NEW.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Kanipriya M",
        "url": "https://www.srmist.edu.in/faculty/dr-kanipriya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4379.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Karpagam M",
        "url": "https://www.srmist.edu.in/faculty/dr-karpagam-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-8-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Kiruthika M",
        "url": "https://www.srmist.edu.in/faculty/dr-kiruthika-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4497.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Krunal Dhanraj Randive",
        "url": "https://www.srmist.edu.in/faculty/dr-krunal-dhanraj-randive/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/406117001-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Lakshmi Narayanan K",
        "url": "https://www.srmist.edu.in/faculty/dr-lakshmi-narayanan-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Maivizhi R",
        "url": "https://www.srmist.edu.in/faculty/dr-maivizhi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Area Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4426.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Manikandan M",
        "url": "https://www.srmist.edu.in/faculty/dr-manikandan-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing Load Balancing, Machine Learning Predictions, AI using Health Informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4332.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Meenakshi N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-meenakshi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mobile communication, Sensor networks, cloud computing,  Operating systems.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Meena-pic-Final-pic.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Megha Sahu",
        "url": "https://www.srmist.edu.in/faculty/dr-megha-sahu/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Mohandas R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-mohandas/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/mohan.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Naveen P",
        "url": "https://www.srmist.edu.in/faculty/mr-naveen-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/2-6.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Navneet Nayan",
        "url": "https://www.srmist.edu.in/faculty/dr-navneet-nayan/",
        "Designation": "Assistant Professor",
        "Specialization": "Pattern Recognition, Computer Vision, Digital Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/navneet.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Om Prakash P G",
        "url": "https://www.srmist.edu.in/faculty/dr-p-g-om-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Web Mining, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/8.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Pitchai Manickam B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-pitchai-manickam/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Bio Inspired Algorithms, Optimization Techniques, Topology Control.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4344.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Poongothai E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-poongothai/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Machine Learning, Image processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4364-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Prince Chelladurai S",
        "url": "https://www.srmist.edu.in/faculty/dr-prince-chelladurai-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography, Network Security, Web Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Dr.-Prince-Chelladurai-S.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Pritam Khan",
        "url": "https://www.srmist.edu.in/faculty/dr-pritam-khan/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Analytics, Internet of Things, Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4416.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Prithi Samuel",
        "url": "https://www.srmist.edu.in/faculty/dr-prithi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/Prithi-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Priyadharshini G",
        "url": "https://www.srmist.edu.in/faculty/mrs-priyadharshini-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning,Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4439-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Raguvaran S",
        "url": "https://www.srmist.edu.in/faculty/raguvaran-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/3-1-1.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Rajalakshmi S",
        "url": "https://www.srmist.edu.in/faculty/dr-rajalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Metaheuristic Algorithms, Optimization Problems, Bio-Inspired Algorithms.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/rajalakshmi.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Reshmy A K",
        "url": "https://www.srmist.edu.in/faculty/dr-a-k-reshmy/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/Untitled-1.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sakthitharan S",
        "url": "https://www.srmist.edu.in/faculty/dr-sakthitharan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization Algorithms, Robotics Maneuvering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sakthi.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Salomi M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-salomi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Analytics, Wireless Sensor Networks and Mobile & Web Application Development.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/SalomiSamsudeen-PP-Snap-copy-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sanjit Kumar",
        "url": "https://www.srmist.edu.in/faculty/mr-sanjit-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Structures, C Programming, Python Programming, and Digital Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sanjit.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Saranya P",
        "url": "https://www.srmist.edu.in/faculty/mrs-saranya-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning and IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4358.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sherin Shibi C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-sherin-shibi/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Image Processing, Deep Learning, Remote Sensing, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-28-at-16.33.42.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sheryl Oliver A",
        "url": "https://www.srmist.edu.in/faculty/dr-sheryl-oliver-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4372.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sivaji Satrasupalli",
        "url": "https://www.srmist.edu.in/faculty/dr-sivaji-satrasupalli/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer vision and deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/sivaji4.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sivashankar G",
        "url": "https://www.srmist.edu.in/faculty/dr-sivashankar-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Federated Learning, Applied Artificial intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4460.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Sridevi Ponmalar. P",
        "url": "https://www.srmist.edu.in/faculty/dr-sridevi-ponmalar-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Soft Computing, Nature Inspired Algorithms, Data Science.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4352.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Suresh K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-suresh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Deep Learning, Soft Computing, Artificial Intelligence, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr_K_Suresh_Photo.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Suresh Kumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-suresh-kumar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Image Compression and Denoising, Internet of Things, Machine and Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/Suresh-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Tamilmani G",
        "url": "https://www.srmist.edu.in/faculty/dr-tamilmani-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4451.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Udendhran",
        "url": "https://www.srmist.edu.in/faculty/mr-udendhran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/photo-1-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Usharani R",
        "url": "https://www.srmist.edu.in/faculty/dr-usharani-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Deep Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4346.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Vaissnave V",
        "url": "https://www.srmist.edu.in/faculty/dr-vaissnave-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Natural Language Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/vaishnavee.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Velliangiri S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-velliangiri/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/9K3A0432-a.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Vidhya B",
        "url": "https://www.srmist.edu.in/faculty/dr-vidhya-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Computer Networks, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Untitled-design.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Vijayalakshmi K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4361-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Vimal S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-vimal/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, IoT, P2P Blockchain, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_20240418_214225-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Vimaladevi M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-vimaladevi/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Engineering and Project Management, Software Architecture, Software Quality Management, Software Design, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4362.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Dr. Vinston Raja R",
        "url": "https://www.srmist.edu.in/faculty/dr-vinston-raja-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/PhotoRoom-20230928-222337.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mr. Gopinath N",
        "url": "https://www.srmist.edu.in/faculty/mr-gopinath-n/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mr. Kaviyaraj R",
        "url": "https://www.srmist.edu.in/faculty/mr-kaviyaraj-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Augmented Reality, Virtual Reality, Mixed Reality,  and Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4430.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mr. Manoj Kushwaha",
        "url": "https://www.srmist.edu.in/faculty/mr-manoj-kushwaha/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning and Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4432.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mr. Mitul Sudhirkumar Nagar",
        "url": "https://www.srmist.edu.in/faculty/mr-mitul-sudhirkumar-nagar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/mitul.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mr. Prabhakaran S",
        "url": "https://www.srmist.edu.in/faculty/mr-prabhakaran-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4455.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mr. Senthilkumar M K S",
        "url": "https://www.srmist.edu.in/faculty/senthilkumar-m-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/5.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Aarthy K",
        "url": "https://www.srmist.edu.in/faculty/mrs-aarthy-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Oracle Certification",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4419.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Ezhilarasi J",
        "url": "https://www.srmist.edu.in/faculty/mrs-j-ezhilarasi/",
        "Designation": "Assistant Professor (Jr)",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4414.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Kavitha V",
        "url": "https://www.srmist.edu.in/faculty/mrs-kavitha-v/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/KAVI-PROFILE-PHOTO.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Nithya P",
        "url": "https://www.srmist.edu.in/faculty/mrs-nithya-p-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Cyber Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/New-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Ratna kumari M",
        "url": "https://www.srmist.edu.in/faculty/m-ratna-kumari/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/DSC_4475-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Shaik Rasheeda Begum",
        "url": "https://www.srmist.edu.in/faculty/mrs-shaik-rasheeda-begum/",
        "Designation": "Assistant Professor (Jr)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4443.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Sukanya  Varshini K",
        "url": "https://www.srmist.edu.in/faculty/mrs-sukanya-varshini-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sukanya-Photo-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mrs. Vidhya R",
        "url": "https://www.srmist.edu.in/faculty/mrs-vidhya-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Text Mining,Data Mining, Cloud Computing, Machine Learning , Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-31-at-9.04.35-AM.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Ms. Sasi Rekha Sankar",
        "url": "https://www.srmist.edu.in/faculty/ms-sasi-rekha-sankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Engineering, Artificial Intelligence, machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4348.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Ms. Vidhya J V",
        "url": "https://www.srmist.edu.in/faculty/j-v-vidhya-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet Of Things, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/J.V. Vidhya.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Sageengrana S",
        "url": "https://www.srmist.edu.in/faculty/sageengrana-s/",
        "Designation": "Assistant Professor",
        "Specialization": "DEEP LEARNING, MACHINE LEARNING",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Mr. Suresh Kumar C",
        "url": "https://www.srmist.edu.in/faculty/suresh-kumar-c/",
        "Designation": "Teaching Associate",
        "Specialization": "Natural Language Processing , Deep Learning and Machine Learning and Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_20220212_110430.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Ms. Indumathi V",
        "url": "https://www.srmist.edu.in/faculty/v-indumathi/",
        "Designation": "Teaching Associate",
        "Specialization": "Skilled in Analytical Skills, Data Analysis, Deep Learning and Machine learning, Amazon Web Services (AWS), R, and Tableau, Python, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4356.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "title": "Obaidat Mohammad S",
        "url": "https://www.srmist.edu.in/faculty/obaidat-mohammad-s/",
        "Designation": "Visiting Distinguished Professor, Life Fellow of IEEE, Fellow of AAIA and Fellow of SCS",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/obai.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Albert Antony Raj S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-albert-antony-raj/",
        "Designation": "Professor and Deputy Dean",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-Albert-S-scaled-e1683695480367.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Jayashree R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-jayashree/",
        "Designation": "Associate Professor and Head",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/8-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Ananthi Claral Mary T",
        "url": "https://www.srmist.edu.in/faculty/dr-ananthi-claral-mary-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Ananthi-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Angel Nancy A",
        "url": "https://www.srmist.edu.in/faculty/dr-angel-nancy-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/angel.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Anita Smiles J",
        "url": "https://www.srmist.edu.in/faculty/anita-smiles-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9407-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Anwar R Shaheen",
        "url": "https://www.srmist.edu.in/faculty/dr-anwar-r-shaheen/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/1-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Arunarani S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-arunarani-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Balamurugan S",
        "url": "https://www.srmist.edu.in/faculty/dr-balamurugan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Big Data Analytics, Machine Learning, Web Application Development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/11-1.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Belina V J Sara S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-belina-v-j-sara/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/7337-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Brindha S",
        "url": "https://www.srmist.edu.in/faculty/brindha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/IMG-20231010-WA00101.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. CHANTHINI P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-chanthini/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Neural Network, Bio-inspired Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/3-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Devagnanam J",
        "url": "https://www.srmist.edu.in/faculty/dr-devagnanam-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Devagnanam-J.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Elangovan V R",
        "url": "https://www.srmist.edu.in/faculty/dr-elangovan-v-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9425-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Elavarasi G",
        "url": "https://www.srmist.edu.in/faculty/dr-elavarasi-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/Dr.G.Elavarasi.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Helen D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-helen/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/5-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. John Britto M",
        "url": "https://www.srmist.edu.in/faculty/john-britto-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5122-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Kanmani K",
        "url": "https://www.srmist.edu.in/faculty/ms-k-kanmani/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kan-website-photo-4.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Kiruthiga R",
        "url": "https://www.srmist.edu.in/faculty/kiruthiga-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Dr.R.Kiruthiga-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Lakshmi S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-lakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Mothilal Nehru G",
        "url": "https://www.srmist.edu.in/faculty/mothilal-nehru-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5126-copy-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Nisha V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-nisha/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240328-WA0003.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Nithya S",
        "url": "https://www.srmist.edu.in/faculty/dr-nithya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-30-at-3.54.33-PM.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Pandiyan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-pandiyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Assistant Professor",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/13-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Reena Rose R",
        "url": "https://www.srmist.edu.in/faculty/dr-reena-rose-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Sathya K",
        "url": "https://www.srmist.edu.in/faculty/dr-sathya-k/",
        "Designation": "ASSISTANT PROFESSOR",
        "Specialization": "COMPUTER APPLICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/5119-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Shanthi R",
        "url": "https://www.srmist.edu.in/faculty/dr-shanthi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "COMPUTER APPLICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/4-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Sivakumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-sivakumar-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Dr.S.Sivakumar-600669.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Sivakumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sivakumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/7-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Srividhya B",
        "url": "https://www.srmist.edu.in/faculty/srividhya-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-28-at-12.47.52-1.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. SUDHA M R",
        "url": "https://www.srmist.edu.in/faculty/ms-sudha-m-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Thilagavathy R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-thilagavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/6-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Thilaka A",
        "url": "https://www.srmist.edu.in/faculty/dr-thilaka-a/",
        "Designation": "Assistant Professor",
        "Specialization": "COMPUTER APPLICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/thilaka.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr. Usha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-usha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/usha-2.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Dr.Nagarajan B",
        "url": "https://www.srmist.edu.in/faculty/nagarajan-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-28-at-10.05.16-AM.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Leena Nesamani S",
        "url": "https://www.srmist.edu.in/faculty/leena-nesamani-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/leena.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Mr. Venkata Subramanian J",
        "url": "https://www.srmist.edu.in/faculty/j-venkata-subramanian/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/11-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Ms. Ramla M",
        "url": "https://www.srmist.edu.in/faculty/ms-m-ramla/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/9-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "title": "Seeja R D",
        "url": "https://www.srmist.edu.in/faculty/seeja-r-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/seeja.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Muthulakshmi.P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-muthulakshmi/",
        "Designation": "Professor & Head",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/SMTPM.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Arul Leena Rose.P.J",
        "url": "https://www.srmist.edu.in/faculty/dr-p-j-arul-leena-rose/",
        "Designation": "Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/photoleena-1.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Kalpana G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-kalpana/",
        "Designation": "Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Kalpana-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Aarthi. E",
        "url": "https://www.srmist.edu.in/faculty/mrs-aarthi-e/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science - DBMS, PHP/Mysql",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/A-29823.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Elangovan D",
        "url": "https://www.srmist.edu.in/faculty/dr-elangovan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/1261-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Juhi Reashma S.R.K",
        "url": "https://www.srmist.edu.in/faculty/dr-juhi-reashma-s-r-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-01-11-at-1.19.01-PM.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Kanchana S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-kanchana/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Mining, Block Chain, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Kachana-Maam.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Mahalakshmi. B",
        "url": "https://www.srmist.edu.in/faculty/dr-mahalakshmi-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-11-at-1.19.28-PM.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Meenakshi S",
        "url": "https://www.srmist.edu.in/faculty/dr-meenakshi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Nathiya T",
        "url": "https://www.srmist.edu.in/faculty/dr-nathiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning, IOT, Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-8.00.32-PM-1.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Ramesh. M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/6-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Revathi S",
        "url": "https://www.srmist.edu.in/faculty/dr-revathi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/IMG-20240111-WA0002.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Sabeen S",
        "url": "https://www.srmist.edu.in/faculty/dr-sabeen-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/sabeen-srm-profile-photo-1.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Sweety Bakyarani E",
        "url": "https://www.srmist.edu.in/faculty/sweety-bakyarani/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-02-24-at-10.37.20.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "title": "Dr. Yoga Lakshmi P",
        "url": "https://www.srmist.edu.in/faculty/p-yogalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/11-2-scaled.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pushpalatha M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-pushpalatha/",
        "Designation": "Professor and Associate Chairperson",
        "Specialization": "Wireless Networks, Internet of Things and Data Analytics, Edge Computing, Quantum Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pushpalatha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Niranjana G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-niranjana/",
        "Designation": "Professor & Head",
        "Specialization": "Image Processing, Pattern Recognition, Networks and Data Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/niranjana-e1716472946340.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Amutha B",
        "url": "https://www.srmist.edu.in/faculty/amutha-b/",
        "Designation": "Professor",
        "Specialization": "5G, Cognitive Radio, SDN, IoT, Wireless Computing, Smart Cities",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/amutha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Baranidharan B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-baranidharan/",
        "Designation": "Professor",
        "Specialization": "Artificial Intelligence, Wireless Sensor Networks, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Baranidharan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Indhumathi R",
        "url": "https://www.srmist.edu.in/faculty/dr-indhumathi-r/",
        "Designation": "Professor",
        "Specialization": "Theoretical Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Indumathi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kavitha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-kavitha/",
        "Designation": "Professor",
        "Specialization": "Data Mining and Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kavitha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Madhavan P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-madhavan/",
        "Designation": "Professor",
        "Specialization": "Computer Networks, Data Structures and algorithm, Object Oriented Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Madhavan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Malathi D",
        "url": "https://www.srmist.edu.in/faculty/d-malathi/",
        "Designation": "Professor",
        "Specialization": "Artificial Neural Networks and Digital Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Malathi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Manoranjitham T",
        "url": "https://www.srmist.edu.in/faculty/t-manoranjitham/",
        "Designation": "Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoranjtham.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Minu R I",
        "url": "https://www.srmist.edu.in/faculty/dr-r-i-minu/",
        "Designation": "Professor",
        "Specialization": "Computer vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Minu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Murali M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-murali/",
        "Designation": "Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Murali-M.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pongiannan R K",
        "url": "https://www.srmist.edu.in/faculty/dr-r-k-pongiannan/",
        "Designation": "Professor",
        "Specialization": "Power Electronics and Drives, Energy and Embedded Systems, Soft Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pongiannan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Poovammal E",
        "url": "https://www.srmist.edu.in/faculty/e-poovammal/",
        "Designation": "Professor",
        "Specialization": "Data Mining/ Big Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poovammal.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ramamoorthy S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-ramamoorthy/",
        "Designation": "Professor",
        "Specialization": "Cloud Computing, Big Data Analytics, Data Mining, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramamoorthy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sridhar S S",
        "url": "https://www.srmist.edu.in/faculty/s-s-sridhar/",
        "Designation": "Professor",
        "Specialization": "Computer Science Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/SSS.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Subalalitha C N",
        "url": "https://www.srmist.edu.in/faculty/subalalitha-c-n/",
        "Designation": "Professor",
        "Specialization": "Natural Language Processing, Machine Learning, Discourse Analysis and Computational Linguistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Subalalitha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Umadevi M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-umadevi/",
        "Designation": "Professor",
        "Specialization": "Data Mining, Information Retrieval",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Umadevi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Usha G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-usha/",
        "Designation": "Professor",
        "Specialization": "or Subject Network Security, Wireless Networks, Cryptography, Big data Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Usha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vijaya K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-vijaya/",
        "Designation": "Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijaya-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Akilandeswari P",
        "url": "https://www.srmist.edu.in/faculty/p-akilandeswari/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Akila.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Anitha K",
        "url": "https://www.srmist.edu.in/faculty/dr-anitha-k/",
        "Designation": "Associate Professor",
        "Specialization": "Image Processing, Machine Learning, Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anitha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Anto Arockia Rosaline R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-anto-arockia-rosaline/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Data Science, Data Analytics, Text Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/RAAR_Updated.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Arthi B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-arthi/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, Artificial Intelligence, Machine Learning, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arthi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Aruna M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-aruna/",
        "Designation": "Associate Professor",
        "Specialization": "AI / ML  |  Computer Vision  |  IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Aruna.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Arunachalam N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-arunachalam/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning and Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arunachalam.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Babu S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-babu/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, IOT, WSN",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Babu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Baskar M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-baskar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks and Security(CSE)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Baskar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Deeba K",
        "url": "https://www.srmist.edu.in/faculty/k-deeba/",
        "Designation": "Associate Professor",
        "Specialization": "Theory of computation, Neural networks, Pattern Recognition",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deeba.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Deeban Chakravarthy V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-deeban-chakravarthy/",
        "Designation": "Associate Professor",
        "Specialization": "Software Defined Networking, Cloud Computing & IOT.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deeban.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Dorathi Jayaseeli J D",
        "url": "https://www.srmist.edu.in/faculty/j-d-dorathi-jayaseeli/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dorathi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Gayathri M",
        "url": "https://www.srmist.edu.in/faculty/m-gayathri/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gayathri.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Gnanavel S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-gnanavel-2/",
        "Designation": "Associate Professor",
        "Specialization": "Multimedia transmission on Wireless Networks Internet of Things  cloud security. Machine Learning cyber security  cloud computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gnanavel.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Godfrey Winster S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-godfrey-winster/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Godfrey.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jansi K R",
        "url": "https://www.srmist.edu.in/faculty/k-r-jansi/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jansi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jebakumar R",
        "url": "https://www.srmist.edu.in/faculty/dr-jebakumar-r/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jebakumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jeya R",
        "url": "https://www.srmist.edu.in/faculty/r-jeya/",
        "Designation": "Associate Professor",
        "Specialization": "Data structures, System Programming, Compiler Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jeya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jeyasekar A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-jeyasekar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jeyasekar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jothi Kumar C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-jothi-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jothikumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kalaivani J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-kalaivani/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kalaivani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kanchana M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-kanchana/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Image Processing, Pattern Recognition, Data Mining,Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanchana.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kanisha B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-kanisha/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Block chain Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanisha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kavisankar L",
        "url": "https://www.srmist.edu.in/faculty/dr-l-kavisankar/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security, Blockchain, Computer Network, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSCN3134-scaled-e1682523753169.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kowsigan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-kowsigan/",
        "Designation": "Associate Professor",
        "Specialization": "Computing Systems, Internet of Things, Theoretical Computer Science and Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kowsigan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Murali P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-murali-2/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Murali-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Muruganantham B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-muruganantham/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/BM.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nancy P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-nancy/",
        "Designation": "Associate Professor",
        "Specialization": "Data Structures, Operating Systems, Machine Learning, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/nancy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Padmapriya G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-padmapriya/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining, Artificial Intelligence, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Padmapriya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Padmini S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-padmini/",
        "Designation": "Associate Professor",
        "Specialization": "Application of Machine Learning and Deep Learning Techniques to real world problems,Solar Thermal Desalination,Demand Side Management in Microgrid",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Padmini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pandian A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-pandian/",
        "Designation": "Associate Professor",
        "Specialization": "Text processing, Information Retrieval and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pandian.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ponmagal R S",
        "url": "https://www.srmist.edu.in/faculty/dr-r-s-ponmagal/",
        "Designation": "Associate Professor",
        "Specialization": "Web services, Cloud Computing , IoT, Data Science and Big Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ponmgal.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Poornima S",
        "url": "https://www.srmist.edu.in/faculty/s-poornima/",
        "Designation": "Associate Professor",
        "Specialization": "Data Analytics and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poornima.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pradeep Mohankumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-pradeep-mohan-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks, Network Security, Cryptography, Operating System, Data Structures.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pradeep-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pradeep S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-pradeep/",
        "Designation": "Associate Professor",
        "Specialization": "Internet of Things, Machine Learning and Deep Learning, Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/DSC_5220.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ramalingam V V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-v-ramalingam/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0039-e1685240833363.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sandhia G K",
        "url": "https://www.srmist.edu.in/faculty/g-k-sandhia/",
        "Designation": "Associate Professor",
        "Specialization": "Cryptography and Network Security, Cloud Computing, Machine Learning, Quantum Cryptography.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sandhya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Santhanakrishnan C",
        "url": "https://www.srmist.edu.in/faculty/c-santhanakrishnan/",
        "Designation": "Associate Professor",
        "Specialization": "IoT, Computer Networks, Virtual Reality, Bio Inspired Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Santhu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Saranya P",
        "url": "https://www.srmist.edu.in/faculty/ms-p-saranya/",
        "Designation": "Associate Professor",
        "Specialization": "Medical Image processing, Deep learning, Machine Learning, Artificial Intelligence, Wireless Sensor Networks, Big Data.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/P-Saranya-e1716520944506.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Saravanan Santhanam",
        "url": "https://www.srmist.edu.in/faculty/s-saravanan/",
        "Designation": "Associate Professor",
        "Specialization": "AI and Machine learning, Big data Analytics and Data mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saravanan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Selvaraj P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-selvaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvaraj.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Selvin Paul Peter J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-selvin-paul-peter/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvin.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Senthil Kumar T",
        "url": "https://www.srmist.edu.in/faculty/t-senthil-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "CSE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthil-Kumar-T.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sindhu Chandra Sekharan",
        "url": "https://www.srmist.edu.in/faculty/sindhu-c/",
        "Designation": "Associate Professor",
        "Specialization": "Regional Language Computing, Indian Temple Sculpture Iconography, Epigraphy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sindhu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sivakumar B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-sivakumar/",
        "Designation": "Associate Professor",
        "Specialization": "IoT,Machine learning, cloud computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSCN2036-scaled.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sreekumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-sreekumar/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Sensor Networks, Machine Learning, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sreekumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Srinivasan R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-srinivasan/",
        "Designation": "Associate Professor",
        "Specialization": "Natural Language Processing, Computer Vision, Database Management Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/srinivasan2-2.jpeg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Subash R",
        "url": "https://www.srmist.edu.in/faculty/r-subash/",
        "Designation": "Associate Professor",
        "Specialization": "Internet Of Things, Social Internet Of Things, Data Mining, Networking and Blockchain",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Subash.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Suchithra M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-suchithra/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Cloud Computing, System Security, Computer Vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. M. Suchithra.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Thenmozhi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-thenmozhi/",
        "Designation": "Associate Professor",
        "Specialization": "Networks, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/thenmoni.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Thilagavathy R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-thilagavathy-2/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining, Natural Language Processing,  Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thilagavathy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Uma Maheswari K M",
        "url": "https://www.srmist.edu.in/faculty/k-m-uma-maheswari/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/uma.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vidhya R",
        "url": "https://www.srmist.edu.in/faculty/r-vidhya/",
        "Designation": "Associate Professor",
        "Specialization": "Learning Analytics, Big Data, Machine Learning and Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhya-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vijayakumaran C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-vijayakumaran/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Vision,  Computer Networks and Quantum Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijayakumaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vinod D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-vinod/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vinod.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Abhijit Saha",
        "url": "https://www.srmist.edu.in/faculty/dr-abhijit-saha-2/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Fuzzy set theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/abhijit.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Abirami G",
        "url": "https://www.srmist.edu.in/faculty/g-abirami-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks, Green computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Abirami.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ajanthaa Lakkshmanan",
        "url": "https://www.srmist.edu.in/faculty/dr-ajanthaa-lakkshmanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Aajaatha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Alice K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-alice/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing and Deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Alice.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Anbarasi A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-anbarasi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks,  Web Service,  Software Engineering,  Internet of Things (IOT),  Machine Learning,  Deep Learning,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anbarasi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Anbazhagu U V",
        "url": "https://www.srmist.edu.in/faculty/dr-u-v-anbazhagu/",
        "Designation": "Assistant Professor",
        "Specialization": "Big Data Analytics, Artificial Intelligence and Machine Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anbazhagu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Angayarkanni V",
        "url": "https://www.srmist.edu.in/faculty/dr-angayarkanni-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Image and video processing, Compressed Sensing, video encoders, Wireless Multimedia Sensor Networks, Free space optics, Wireless communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Angayarkanni.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Anita R",
        "url": "https://www.srmist.edu.in/faculty/r-anita/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering, Natural Language Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/anita.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Arul Prakash M",
        "url": "https://www.srmist.edu.in/faculty/m-arul-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain, Mobile Crowd Sensing, Mobile Crowd Sourcing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arulprakash.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Arulalan V",
        "url": "https://www.srmist.edu.in/faculty/mr-arulalan-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Video Processing, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arulalan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Arulmurugan A",
        "url": "https://www.srmist.edu.in/faculty/dr-arulmurugan-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Information security, Data Mining Techniques, AI & ML, Web Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/arulmurugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Arun V",
        "url": "https://www.srmist.edu.in/faculty/dr-arun-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Security in Adhoc Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arun-V.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ashokkumar C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-ashok-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ashok-Kumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ashwini S",
        "url": "https://www.srmist.edu.in/faculty/dr-ashwini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ashwini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Aswathy K Cherian",
        "url": "https://www.srmist.edu.in/faculty/dr-aswathy-k-cherian/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/aswathy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Bakkialakshmi V S",
        "url": "https://www.srmist.edu.in/faculty/mrs-bakkialakshmi-v-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Affective Computing, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bakkialakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Balamurugan G",
        "url": "https://www.srmist.edu.in/faculty/mr-g-balamurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Balamurugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Bhargavi G",
        "url": "https://www.srmist.edu.in/faculty/mrs-bhargavi-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bhargavi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Bibin Christopher V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-bibin-christopher/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bibin.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Brindha R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Brinda-R-E.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Briskilal J",
        "url": "https://www.srmist.edu.in/faculty/ms-briskilal-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Natural Language Processing, Machine Learning ,Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Briskilal.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Deepa R",
        "url": "https://www.srmist.edu.in/faculty/dr-deepa-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision,Artificial Intelligence and Machine Learning,Semantic Web",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/deepa.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Deepajothi S",
        "url": "https://www.srmist.edu.in/faculty/dr-deepajothi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deepajoothi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Divya Mohan",
        "url": "https://www.srmist.edu.in/faculty/dr-divya-mohan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/divya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Eliazer M",
        "url": "https://www.srmist.edu.in/faculty/m-eliazer/",
        "Designation": "Assistant Professor (Senior Grade)",
        "Specialization": "Big data Analytics, Optical Routing, Database system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Eliazer.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Geetha K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-geetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Spatial Data Mining, Intelligent Databases, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Geetha-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Geetha R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-geetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Geetha-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Girirajan S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-girirajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Girirajan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Gokulakrishnan D",
        "url": "https://www.srmist.edu.in/faculty/dr-gokulakrishnan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Web Services,Information Security, Network Security, Computer Vision and Machine Learning and Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gokulakrishnan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Gokulnath C",
        "url": "https://www.srmist.edu.in/faculty/dr-gokulnath-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Health Data Analytics, Machine Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gokulnath.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Hariharan R",
        "url": "https://www.srmist.edu.in/faculty/dr-hariharan-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision , Image processing , Health care",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Hariharan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Harriet Linda C",
        "url": "https://www.srmist.edu.in/faculty/dr-harriet-linda-c/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-43.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ida Seraphim B",
        "url": "https://www.srmist.edu.in/faculty/b-ida-seraphim/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Machine Learning, Image Processing, Cryptography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ida.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Iniyan S",
        "url": "https://www.srmist.edu.in/faculty/s-iniyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Iniyan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ishwarya K",
        "url": "https://www.srmist.edu.in/faculty/dr-ishwarya-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Machine Learning, IOT and Big Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/1.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jagadeesan S",
        "url": "https://www.srmist.edu.in/faculty/s-jagadeesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jagathesan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jagadeesh M",
        "url": "https://www.srmist.edu.in/faculty/dr-jagadeesh-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Applications of AI| ML| DL, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/04.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Janani M",
        "url": "https://www.srmist.edu.in/faculty/ms-janani-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Janani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jayapradha J",
        "url": "https://www.srmist.edu.in/faculty/j-jayapradha/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining and Analysis, Object Oriented Analysis and Design, Operating System, Software Engineering principles, Database Management System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jayapradha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Jesline",
        "url": "https://www.srmist.edu.in/faculty/dr-jesline-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jesline.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kandan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-kandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kandan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Karthikeyan M",
        "url": "https://www.srmist.edu.in/faculty/m-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Deep Learning  and Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Karthikeyan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Karthikeyan U",
        "url": "https://www.srmist.edu.in/faculty/dr-u-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantum Computing, Networks, Cloud Computing, IoT and Precision Agriculture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Karthikeyan-U.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kavitha R",
        "url": "https://www.srmist.edu.in/faculty/dr-kavitha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "CTECH: Information Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/4.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kirubanantham P",
        "url": "https://www.srmist.edu.in/faculty/dr-kirubanantham-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Web Services and Service Oriented Architecture, Machine Learning, Computer Vision and Geo Infomatic Systems.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kirubanantham.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Kishore Anthuvan Sahayaraj K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-kishore-anthuvan-sahayaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kishore.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Lavanya R",
        "url": "https://www.srmist.edu.in/faculty/mrs-r-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Big data analytics, Web service, Service oriented Architecture, Wireless networks.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Lavanya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Lubin Balasubramanian",
        "url": "https://www.srmist.edu.in/faculty/dr-lubin-balasubramanian/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization Algorithms, Wireless Sensor Networks, Web Services, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Lubin-Balasubramanian.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Madhumitha K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-madhumitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Underwater Acoustic Communication, Deep Learning, Incremental Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Madhumita.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Madhura R",
        "url": "https://www.srmist.edu.in/faculty/mrs-madhura-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Distributed Computing Systems, Fog Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/madhura.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Malarselvi G",
        "url": "https://www.srmist.edu.in/faculty/ms-g-malarselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Malarselvi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Manju A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-manju/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantum inspired optimization, Control systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manju.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Manjula R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-manjula/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining , Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manjula.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Manoj Kumar G",
        "url": "https://www.srmist.edu.in/faculty/gunupalli-manoj-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoj-G.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Manoj Kumar Rana",
        "url": "https://www.srmist.edu.in/faculty/dr-manoj-kumar-rana/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Simulation and Modeling in ns-3 system, New Protocol/Scheme Design and Performance Analysis of them in the 5G and 6G Mobile Communication Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoj.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Mathan Kumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-mathan-kumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mathan-Kumar-M.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Mohideen Abdulkader M",
        "url": "https://www.srmist.edu.in/faculty/dr-mohideen-abdulkader-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Mohideen.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Muralidharan C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-muralidharan/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muralidharan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Muthu Kumaran A M J",
        "url": "https://www.srmist.edu.in/faculty/a-m-j-muthu-kumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muthukumaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nagadevi S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-nagadevi/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Distributed Computing, Databases, Web Programming, HPC, Web Services , Semantic Web",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nagadevi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nalini S",
        "url": "https://www.srmist.edu.in/faculty/dr-nalini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nalini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nikkath Bushra S",
        "url": "https://www.srmist.edu.in/faculty/dr-nikkath-bushra-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Big Data, machine learning, deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/nikkath.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nithiya S",
        "url": "https://www.srmist.edu.in/faculty/s-nithiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0031.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nithiyanandam N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-nithiyanandam/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Network",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithiyanandam.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nithyakani P",
        "url": "https://www.srmist.edu.in/faculty/p-nithyakani/",
        "Designation": "Assistant Professor",
        "Specialization": "Visual Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithyakani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Nithyashri J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-nithyashri/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing Techniques, Pattern Recognition Techniques, Machine Learning, Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithyasri.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pandiaraj A",
        "url": "https://www.srmist.edu.in/faculty/dr-pandiaraj-a/",
        "Designation": "Assistant Professor",
        "Specialization": "NLP, Machine Learning, Data Mining.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pandiraj.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pavithra Guru R",
        "url": "https://www.srmist.edu.in/faculty/dr-pavithra-guru/",
        "Designation": "Assistant Professor",
        "Specialization": "Design Algorithms in the Field of VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/05-copy-1.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pavithra S",
        "url": "https://www.srmist.edu.in/faculty/dr-pavithra-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Prakash B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prakash-B.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Prakash U M",
        "url": "https://www.srmist.edu.in/faculty/mr-u-m-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio Statistics and Machine learning Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/prakash.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Pretty Diana Cyril C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-pretty-diana-cyril/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Internet of Things, Block Chaining, Machine Learning, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/pretty.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Priya S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/priya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Priyadharshini K",
        "url": "https://www.srmist.edu.in/faculty/dr-priyadharshini-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Priyadharshini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Raghavendra V",
        "url": "https://www.srmist.edu.in/faculty/dr-raghavendra-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Raghavendra-V.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ragunthar T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-ragunthar/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Analytics and  Human Computer Interaction + Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/raguthar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Rajalakshmi M",
        "url": "https://www.srmist.edu.in/faculty/m-rajalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Biometrics, Network Security, Computer Networks, Image processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajalakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Rajasekaran P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-rajasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security,Pervasive Computing,Dynamic Power Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajasekaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Rajathi V",
        "url": "https://www.srmist.edu.in/faculty/dr-rajathi-v/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-4.58.36-PM.jpeg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Rajmohan R",
        "url": "https://www.srmist.edu.in/faculty/dr-rajmohan-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Network",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajmohan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Rama P",
        "url": "https://www.srmist.edu.in/faculty/dr-rama-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, DeepLearning, Data Science, Artificial Intelligence, Wireless Sensor Networks, Computer Networks, Cloud Computing, Internet of Things, Block Chaining.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rama-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ramaprabha J",
        "url": "https://www.srmist.edu.in/faculty/mrs-j-ramaprabha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0063-e1685240775726.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ramesh S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramesh.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ramkumar Jayaraman",
        "url": "https://www.srmist.edu.in/faculty/dr-ramkumar-jayaraman/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Broadband Networks (3G / 4G), Cloud Computing, Cloud based Radio Access Network (C-RAN)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramkumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ramya G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud computing, Machine Learning, Optimization Techniques, Renewable Energy sources",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramya-G.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Ranjani M",
        "url": "https://www.srmist.edu.in/faculty/ms-m-ranjani/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning , Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/ranjana.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Revathi M",
        "url": "https://www.srmist.edu.in/faculty/mrs-m-revathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography and Network Security, Cyber Security, Software Defined Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/revathi-m.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Robert P",
        "url": "https://www.srmist.edu.in/faculty/dr-robert-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/robert.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Saminathan S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-saminathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saminathan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Samsudeen S",
        "url": "https://www.srmist.edu.in/faculty/dr-samsudeen-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sankara Narayanan S",
        "url": "https://www.srmist.edu.in/faculty/dr-sankara-narayanan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sankara-Narayanan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Saranya S S",
        "url": "https://www.srmist.edu.in/faculty/s-s-saranya/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saranya-S-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Saranya V S",
        "url": "https://www.srmist.edu.in/faculty/mrs-saranya-v-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saranya-V-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Saravanan P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-saravanan-3/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saravanan-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sathyapriya L",
        "url": "https://www.srmist.edu.in/faculty/dr-l-sathyapriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sathyapriya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Senthil Kumar K",
        "url": "https://www.srmist.edu.in/faculty/k-senthil-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Theory of Computation, Compiler Design, Artificial Intelligence, Design and Analysis of Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthilkumar-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Senthil Raja M",
        "url": "https://www.srmist.edu.in/faculty/m-senthil-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthil-Raja.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Shanmugam S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-shanmugam/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shanmugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Shibu N V",
        "url": "https://www.srmist.edu.in/faculty/dr-n-v-shibu/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shibu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Shiju Kumar P S",
        "url": "https://www.srmist.edu.in/faculty/shiju-kumar-p-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Wireless Sensor Network and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shiju-Kumar-P-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Shiny Irene D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-shiny-irene/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Decision Support Systems, Health Care Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shiny.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Shoba LK",
        "url": "https://www.srmist.edu.in/faculty/dr-l-k-shoba/",
        "Designation": "Assistant Professor",
        "Specialization": "IMAGE PROCESSING, ARTIFICIAL INTELLIGENCE, MACHINE LEARNING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shoba.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sibi Amaran",
        "url": "https://www.srmist.edu.in/faculty/mr-sibi-amaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sibi-Amaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sindhuja M",
        "url": "https://www.srmist.edu.in/faculty/dr-sindhuja-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sindhuja.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sivakumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sivakumar-3/",
        "Designation": "Assistant Professor",
        "Specialization": "Sentiment Analysis, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sivakumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sivakumar T K",
        "url": "https://www.srmist.edu.in/faculty/t-k-sivakumar/",
        "Designation": "Assistant Professor(Sr.Gr)",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sivakumar-T-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sivasakthi Selvan S",
        "url": "https://www.srmist.edu.in/faculty/dr-sivasakthi-selvan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Snehasish Ghosh",
        "url": "https://www.srmist.edu.in/faculty/dr-snehasish-ghosh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Geocomputing and Geoinformatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Snehasish-Ghosh.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sowmiya B",
        "url": "https://www.srmist.edu.in/faculty/b-sowmiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Operating system, Data mining, Software Engineering, OOPS, Blockchain, etc./ CSE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sowmiya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sudestna Nahak",
        "url": "https://www.srmist.edu.in/faculty/sudestna-nahak/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Signal Processing, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5182.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Suganiya M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-suganiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Signal Processing, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/suganiya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Suresh Anand M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-suresh-anand/",
        "Designation": "Assistant Professor",
        "Specialization": "Computing Technologies ,School Of Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Suresh-Anand.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Suresh M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-sures/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/suresh.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Sworna Kokila M. L",
        "url": "https://www.srmist.edu.in/faculty/dr-m-l-sworna-kokila/",
        "Designation": "Assistant Professor",
        "Specialization": "CSE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sworna.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Thamizhamuthu R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-thamizhamuthu/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Computer Vision, Big Data analytics, Artificial Intelligence, Text mining, Social network Analysis.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thamizhamuthu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Thanigaivelu P S",
        "url": "https://www.srmist.edu.in/faculty/mr-thanigaivelu-p-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thanigaivelu-P-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Umamageswari B",
        "url": "https://www.srmist.edu.in/faculty/ms-umamageswari-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/3.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vaidhehi M",
        "url": "https://www.srmist.edu.in/faculty/m-vaidhehi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining and Big data",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Vaidhehi_Profile.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vanusha D",
        "url": "https://www.srmist.edu.in/faculty/d-vanusha/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/vanusha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Velmurugan P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-velmurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Testing, IoT, Image Processing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Velmurugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vidhya S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-vidhya/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhya-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vidhyalakshmi M K",
        "url": "https://www.srmist.edu.in/faculty/dr-vidhyalakshmi-m-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhyalakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vijayalakshmi M",
        "url": "https://www.srmist.edu.in/faculty/vijayalakshmi-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijayalakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Viji D",
        "url": "https://www.srmist.edu.in/faculty/ms-d-viji/",
        "Designation": "Assistant Professor",
        "Specialization": "Big data analytics, Data mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/VIJI.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vijiyakumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-vijiyakumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijiyakumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vinoth N A S",
        "url": "https://www.srmist.edu.in/faculty/mr-vinoth-n-a-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/vinoth.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vinu S",
        "url": "https://www.srmist.edu.in/faculty/dr-vinu-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Vivek Justus",
        "url": "https://www.srmist.edu.in/faculty/dr-vivek-justus/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/IMG_4162-e1720053717238.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Viveka S",
        "url": "https://www.srmist.edu.in/faculty/ms-viveka-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/viveka.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Dr. Yamini R",
        "url": "https://www.srmist.edu.in/faculty/r-yamini/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Yamini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mr. Anand M",
        "url": "https://www.srmist.edu.in/faculty/mr-anand-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anand.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mr. Gowtham R",
        "url": "https://www.srmist.edu.in/faculty/gowtham-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Gowtham-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mr. Jishnu K S",
        "url": "https://www.srmist.edu.in/faculty/jishnu-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Engineering, Artificial Intelligence, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jishnu-K-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mr. Mani Deepak Choudhry",
        "url": "https://www.srmist.edu.in/faculty/mr-mani-deepak-choudhry/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Cyber-Physical Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/mani-scaled-e1715237963689.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mr. Prabu S",
        "url": "https://www.srmist.edu.in/faculty/mr-prabu-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prabu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mr. Prabu Shankar K C",
        "url": "https://www.srmist.edu.in/faculty/mr-k-c-prabu-shankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Security and Privacy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prabushankar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mr. Rohit Ravi",
        "url": "https://www.srmist.edu.in/faculty/rohit-ravi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5217.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Babeetha S",
        "url": "https://www.srmist.edu.in/faculty/babeetha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5175.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Brindha R",
        "url": "https://www.srmist.edu.in/faculty/mrs-r-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Big Data and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Brinda-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Deluxni N",
        "url": "https://www.srmist.edu.in/faculty/deluxni-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deluxni-N.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Kanmani S",
        "url": "https://www.srmist.edu.in/faculty/mrs-kanmani-sivagar/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Computer Networks, Operating Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanmani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Maria Nancy A",
        "url": "https://www.srmist.edu.in/faculty/ms-a-maria-nancy/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0046-e1685240602766.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Poonkodi S",
        "url": "https://www.srmist.edu.in/faculty/mrs-poonkodi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poonkodi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Ramya M",
        "url": "https://www.srmist.edu.in/faculty/mrs-ramya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT Security, DeepbLearning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramya-M-1.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Rekha G",
        "url": "https://www.srmist.edu.in/faculty/mrs-rekha-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rekha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Renuka devi P",
        "url": "https://www.srmist.edu.in/faculty/dr-renuka-devi-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Renuka-devi-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Selvameena P",
        "url": "https://www.srmist.edu.in/faculty/mrs-selvameena-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvameena-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Sorna Lakshmi K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-sorna-lakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Sornalakshmi-scaled.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Soshya Joshi",
        "url": "https://www.srmist.edu.in/faculty/mrs-soshya-joshi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Soshya-Joshi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Swathi Mirthika G L",
        "url": "https://www.srmist.edu.in/faculty/swathi-mirthika-g-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Knowledge Graph, Graph Theory, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Swathi-Mirthika-G-L.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Vathana D",
        "url": "https://www.srmist.edu.in/faculty/d-vathana/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep learning,Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vathana.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Mrs. Vetriselvi D",
        "url": "https://www.srmist.edu.in/faculty/vetriselvi-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vetriselvi-D.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "title": "Ms. Hema M",
        "url": "https://www.srmist.edu.in/faculty/ms-m-hema/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Hema.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Kavitha V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-kavitha/",
        "Designation": "Professor & Head",
        "Specialization": "Data Mining and Digital Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4251.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Ganesh Kumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-ganesh-kumar/",
        "Designation": "Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4236.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Murugan A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-murugan/",
        "Designation": "Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dr-murugan-a.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Prakash M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-prakash/",
        "Designation": "Professor",
        "Specialization": "Data Analytics, Machine Learning, Cloud Computing, Information Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4302.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Rajeswari D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-rajeswari/",
        "Designation": "Professor",
        "Specialization": "Big data Analytics, Cloud Computing, Evolutionary algorithms, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Rajeswari-.-D.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Sasikala E",
        "url": "https://www.srmist.edu.in/faculty/e-sasikala/",
        "Designation": "Professor",
        "Specialization": "Network Security, Wireless Sensor Networks, Intelligent Techniques",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4250.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Shanthini A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-shanthini/",
        "Designation": "Professor",
        "Specialization": "Data Science, Machine Learning, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4266.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Vadivu G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-vadivu/",
        "Designation": "Professor",
        "Specialization": "Artificial Intelligence, Generative AI, Computer Vision, Deep Learning, Machine Learning, Big Data Analytics, Social Network Analytics, Semantic Web",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4242.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Arthi K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-arthi/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Web Application Development, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4316.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Hemavathi D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-hemavathi/",
        "Designation": "Associate Professor",
        "Specialization": "Distributed Systems , Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-03-at-9.13.45-AM.jpeg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Jeba Sonia J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-jeba-sonia/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr-Jeba-Sonia-photo.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Kalpana A V",
        "url": "https://www.srmist.edu.in/faculty/dr-a-v-kalpana/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Data Science, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4273.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Kanmani P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-kanmani/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4241.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Karthick T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-karthick/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud, Webservices, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4306.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Karthik P C",
        "url": "https://www.srmist.edu.in/faculty/dr-p-c-karthik-2/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4245.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Paul T Sheeba",
        "url": "https://www.srmist.edu.in/faculty/dr-paul-t-sheeba/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Vision, Machine Learning, Block Chain",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/3.Photo-1.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Priyadarsini K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-priyadarsini/",
        "Designation": "Associate Professor",
        "Specialization": "Data Analytics, Information Security, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_-K_Priyadarsini.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Rajasekar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-rajasekar/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Data Compression, Computer Programming, Computer Graphics, HCI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/raja-website.png"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Rajkumar R",
        "url": "https://www.srmist.edu.in/faculty/r-rajkumar/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence and Expert Systems, Brain Computer Interface, Microprocessor and Microcontrollers Object oriented analysis and design Compiler design Soft computing Machine learning Genetic Algorithm.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4317.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Shantha Kumari K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-shantha-kumari/",
        "Designation": "Associate Professor",
        "Specialization": "Data Science for Good, Healthcare Informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4240.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Shanthini J",
        "url": "https://www.srmist.edu.in/faculty/dr-shanthini-j/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/JS.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Sharanya S",
        "url": "https://www.srmist.edu.in/faculty/s-sharanya/",
        "Designation": "Associate Professor",
        "Specialization": "Data Science and Business Systems, School of Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4264.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Shobana Devi A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-shobana-devi/",
        "Designation": "Associate Professor",
        "Specialization": "Bigdata Analytics, Machine Learning and Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4280.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Sornalakshmi K",
        "url": "https://www.srmist.edu.in/faculty/k-sornalakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "Big Data Analytics, Stream Computing, Optimization, Reinforcement Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4312.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Veeramakali T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-veeramakali/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Image Processing and Cognitive Radio Network.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4270.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Anand M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-anand-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4257.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Anita Jasmine R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-anita-jasmine/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4294.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Archana K S",
        "url": "https://www.srmist.edu.in/faculty/dr-archana-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4285.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Arikumar K S",
        "url": "https://www.srmist.edu.in/faculty/dr-k-s-arikumar/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4254.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Arthy M",
        "url": "https://www.srmist.edu.in/faculty/dr-arthy-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4292.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Arunsundar B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-arunsundar/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Communication, Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4295.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Chinnasamy A",
        "url": "https://www.srmist.edu.in/faculty/74244/",
        "Designation": "Assistant Professor",
        "Specialization": "VANET,IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4303.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Dhanalakshmi J",
        "url": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-j/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/4.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Dhanasekaran K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-dhanasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4247.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Divya G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-divya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/photo-11.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Elangovan G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-elangovan/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Analytics and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4300.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Elumalaivasan P",
        "url": "https://www.srmist.edu.in/faculty/mr-elumalaivasan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Security in Computing and Networks, Machine Learning, and Block Chain Technology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4258.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Geetha Jenifel M",
        "url": "https://www.srmist.edu.in/faculty/dr-geetha-jenifel-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/photo.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Jagadish Kumar N",
        "url": "https://www.srmist.edu.in/faculty/dr-jagadish-kumar-n/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/2.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Jayaraj R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-jayaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Networks, Machine Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4313.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. John Deva Prasanna D S",
        "url": "https://www.srmist.edu.in/faculty/dr-john-deva-prasanna-d-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4318.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Kavitha V",
        "url": "https://www.srmist.edu.in/faculty/dr-kavitha-v-2/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT , WSN",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4282.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Manikandan N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-manikandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, AI &ML",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4244.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Maniraj S P",
        "url": "https://www.srmist.edu.in/faculty/dr-maniraj-s-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Machine Learning, IOT, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/21.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Mercy Theresa M",
        "url": "https://www.srmist.edu.in/faculty/dr-mercy-theresa/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/mercy.jpeg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Monica Bhavani M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-monica-bhavani/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/WhatsApp-Image-2023-05-24-at-10.23.13-AM.jpeg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Nadana Ravishankar T",
        "url": "https://www.srmist.edu.in/faculty/dr-nadana-ravishankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Mining and Computer communication & Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4255.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Nandhini S",
        "url": "https://www.srmist.edu.in/faculty/dr-nandhini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4284.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Panimalar K",
        "url": "https://www.srmist.edu.in/faculty/k-panimalar/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization in Wireless sensor networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Pani-644.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Prabakar D",
        "url": "https://www.srmist.edu.in/faculty/dr-prabakar-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4297.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Prabhu kavin B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-prabhu-kavin/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography, Data Security, Cloud Computing, Cyber Security, Machine Learning, Deep Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4301.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Prasanna V",
        "url": "https://www.srmist.edu.in/faculty/dr-prasanna-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4288.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Praveen Kumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-praveen-kumar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4261-1.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Premalatha G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-premalatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Biometrics, Pattern Recognition, Health Care",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4504.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Radha R",
        "url": "https://www.srmist.edu.in/faculty/r-radha/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4269.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Ragupathi T",
        "url": "https://www.srmist.edu.in/faculty/dr-ragupathi-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep learning,Machine Learning,Cloud Computing,IoT & Web Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4249.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Rajakani M",
        "url": "https://www.srmist.edu.in/faculty/dr-rajakani-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4296.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Rajalakshmi D",
        "url": "https://www.srmist.edu.in/faculty/dr-rajalakshmi-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Networking, Wireless Networks, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4287.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Rajkumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-rajkumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4260.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Ramprasath M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-ramprasath/",
        "Designation": "Assistant Professor",
        "Specialization": "Question answering system, Information Retrieval, Semantic similarity, Machine learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4256.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Rehash Rushmi Pavitra A",
        "url": "https://www.srmist.edu.in/faculty/dr-rehash-rushmi-pavitra-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4286.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Sasikumar A",
        "url": "https://www.srmist.edu.in/faculty/dr-sasikumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4243.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Shobana J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-shobana/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/photo_sss-small.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Shri Bharathi SV",
        "url": "https://www.srmist.edu.in/faculty/dr-sv-shri-bharathi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4502.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Sindhu S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sindhu/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Data Analytics, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4263.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Siva Kumar A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-siva-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain, Cloud Security, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4259.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Srividhya S",
        "url": "https://www.srmist.edu.in/faculty/srividhya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, DBMS, Data Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4272.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Subashini B",
        "url": "https://www.srmist.edu.in/faculty/mrs-subashini-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4278-1.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Suthanthira Devi P",
        "url": "https://www.srmist.edu.in/faculty/dr-suthanthira-devi-p-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Artificial Intelligence, Data Analytics, Rumor analysis in online social network",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-02-at-12.34.06-PM.jpeg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Syed Ismail A",
        "url": "https://www.srmist.edu.in/faculty/dr-syed-ismail-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Security, Blockchain. Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4252.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Tamizhselvan C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-tamizhselvan/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4298.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Varun P",
        "url": "https://www.srmist.edu.in/faculty/dr-varun-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Security, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4299.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Vasudevan N",
        "url": "https://www.srmist.edu.in/faculty/mr-vasudevan-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4321.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Venkatesh S",
        "url": "https://www.srmist.edu.in/faculty/dr-venkatesh-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Database Management System, Software Engineering, Object Oriented Programming, Computer Networks, Operating System, Cryptography and Network SecurityImage Processing, Network Security, Data Science ,Big data ,Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4323.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Vijayalakshmi V",
        "url": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-v-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4268.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Wilson Prakash S",
        "url": "https://www.srmist.edu.in/faculty/dr-wilson-prakash-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Defined Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4246.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Dr. Yasotha B",
        "url": "https://www.srmist.edu.in/faculty/dr-yasotha-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning, Datamining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/yasotha-photo2.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Mr. Balachander S",
        "url": "https://www.srmist.edu.in/faculty/mr-balachander-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain Technology, Information Security, IoT, Privacy and Cryptography.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/5Y0A9011-copy-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Mr. Logeshwaran R",
        "url": "https://www.srmist.edu.in/faculty/mr-logeshwaran-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning in Underwater- Communication, Signal Processing, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/gnhg.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Ms. Annapoorani S",
        "url": "https://www.srmist.edu.in/faculty/ms-annapoorani-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Ms. Gayathri M",
        "url": "https://www.srmist.edu.in/faculty/ms-gayathri-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Mrs. Anna Anbumozhi",
        "url": "https://www.srmist.edu.in/faculty/mrs-anna-anbumozhi/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "Deep Learning, Machine Learning, Internet of Things.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4279.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Mrs. Mythili R",
        "url": "https://www.srmist.edu.in/faculty/mrs-mythili-r/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "Data Analytics,  Machine Learning,  Information Visualization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4253.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Mrs. Praveena Anjelin D",
        "url": "https://www.srmist.edu.in/faculty/mrs-praveena-anjelin-d/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4277.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "title": "Mr. Neelakandan R",
        "url": "https://www.srmist.edu.in/faculty/mr-neelakandan-r/",
        "Designation": "Teaching Associate",
        "Specialization": "Deep Learning, Big Data and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4238.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Mr. Beno Jones J",
        "url": "https://www.srmist.edu.in/faculty/j-beno-jones/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Defence and Strategic Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/DSC_9979.-scaled.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Prof. Nedunchezhiyan VP",
        "url": "https://www.srmist.edu.in/faculty/prof-nedunchezhiyan-vp/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PP-Photo-1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Dr. Prabhu Dass Batvari B",
        "url": "https://www.srmist.edu.in/faculty/dr-prabhu-dass-batvari-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Prabhu-1.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Dr. Ramakrishnan Ramani",
        "url": "https://www.srmist.edu.in/faculty/dr-ramakrishnan-ramani/",
        "Designation": "Adjunct Faculty",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/RAM_F.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Mr. Anoop Ajith M",
        "url": "https://www.srmist.edu.in/faculty/mr-anoop-ajith-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Defence and Strategic Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/aj-.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Mr. Shakthi Vigneshwaran",
        "url": "https://www.srmist.edu.in/faculty/mr-shakthi-vigneshwaran/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-13.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Ms. Joe Infantia",
        "url": "https://www.srmist.edu.in/faculty/ms-joe-infantia/",
        "Designation": "Teaching Associate",
        "Specialization": "Disaster Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/5Y0A8569-scaled-e1732716636678.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "title": "Ms. Sony J R",
        "url": "https://www.srmist.edu.in/faculty/ms-sony-j-r/",
        "Designation": "Teaching Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Profile-pic-scaled.jpg"
    },
    {
        "DepartmentCode": 23887,
        "DepartmentName": "Department of Economics",
        "title": "Dr. Prakash V",
        "url": "https://www.srmist.edu.in/faculty/dr-prakash-v/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.-Prakash-NSS-Programme-CoordinatorV-1.jpg"
    },
    {
        "DepartmentCode": 23887,
        "DepartmentName": "Department of Economics",
        "title": "Dr. Gopi D",
        "url": "https://www.srmist.edu.in/faculty/dr-gopi-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Gopi-Photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23887,
        "DepartmentName": "Department of Economics",
        "title": "Dr. Sankaran M",
        "url": "https://www.srmist.edu.in/faculty/dr-sankaran-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 23887,
        "DepartmentName": "Department of Economics",
        "title": "Dr. Stephy Christina  S",
        "url": "https://www.srmist.edu.in/faculty/dr-stephy-christina-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Health Economics, Econometrics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-01-at-9.32.00-AM-1.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Vijayakumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-vijayakumar/",
        "Designation": "Dean I/C, School of Electrical and Electronics Engineering",
        "Specialization": "Power Electronics Applications in Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.-Vijayakumar-K.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Sridhar R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-sridhar/",
        "Designation": "Professor & Head",
        "Specialization": "Power Electronics in Renewable Energy Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Sridhar_EEE.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Bharatiraja C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-bharatiraja/",
        "Designation": "Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/C-Bharatiraja-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Chellammal N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-chellammal/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/file.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Preetha Roselyn J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-preetha-roselyn/",
        "Designation": "Professor",
        "Specialization": "Power systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/preetha1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Rathinam A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-rathinam/",
        "Designation": "Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr-A-Rathinam-1.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Suchitra D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-suchitra/",
        "Designation": "Associate Professor",
        "Specialization": "Power System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile-Pic-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Arun Noyal Doss M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-arun-noyal-doss/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0568-1-scaled-e1690787247991.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Boopathi C S",
        "url": "https://www.srmist.edu.in/faculty/dr-c-s-boopathi/",
        "Designation": "Associate Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0658-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Divya Navamani J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-divya-navamani/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and Industrial Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Personal-photo2-1.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Jagabar Sathik M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-jagabar-sathik/",
        "Designation": "Associate Professor",
        "Specialization": "Analysis, modeling, and control of power converters for renewable energy based applications.(DC/AC converters, DC/DC convertersetc.)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/My-lastest-Photo-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Jeyashree Y",
        "url": "https://www.srmist.edu.in/faculty/dr-y-jeyashree/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0609-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Kalaiarasi N",
        "url": "https://www.srmist.edu.in/faculty/dr-kalaiarasi-n/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0673-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Mohanraj K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-mohanraj/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0570-scaled-e1691581506118-909x1024-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Narayanamoorthi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-narayanamoorthi/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Power Transfer, Electric Vehicle, Machine Learning, FBG Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0678-3-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Saravanan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-saravanan/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. K. Saravanan.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Sattianadan D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-sattianadan/",
        "Designation": "Associate Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Sattianadan-3.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Sowmmiya U",
        "url": "https://www.srmist.edu.in/faculty/dr-u-sowmmiya/",
        "Designation": "Associate Professor",
        "Specialization": "Grid integration issues with renewable sources,Power converter design, control and power transfer techniques in drive systems.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/IMG-20240824-WA0106.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Subramani C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-subramani/",
        "Designation": "Associate Professor",
        "Specialization": "Power Systems  Mail subramac@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. C.Subramani.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Anitha D",
        "url": "https://www.srmist.edu.in/faculty/d-anitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-07-30-at-9.29.22-PM.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Anuradha C",
        "url": "https://www.srmist.edu.in/faculty/c-anuradha/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.C.Anuradha-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Balaji C",
        "url": "https://www.srmist.edu.in/faculty/dr-balaji-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics, Renewable energy systems, Electric Vehicles, Wireless Power charging",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2222.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Dominic Savio A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-dominic-savio/",
        "Designation": "Assistant Professor",
        "Specialization": "Electric Vehicle Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DSC_1494-copy-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Femi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-femi/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Femi-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Geetha A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-geetha/",
        "Designation": "Associate Professor",
        "Specialization": "Electrical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/gee-photo-new-e1665573654782.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Geethanjali S",
        "url": "https://www.srmist.edu.in/faculty/s-geethanjali/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/20230406_200425-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Ilambirai R C",
        "url": "https://www.srmist.edu.in/faculty/dr-r-c-ilambirai/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_R_C_Ilambirai.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Kalyanasundaram V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-kalyanasundaram/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Sytems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0646-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Kanakaraj P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-kanakaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/5Y0A0384.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Karthikeyan D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20211216-WA0009-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Kubendran V",
        "url": "https://www.srmist.edu.in/faculty/v-kubendran/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0589-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Lavanya A",
        "url": "https://www.srmist.edu.in/faculty/dr-lavanya-a/",
        "Designation": "Associate Professor",
        "Specialization": "Power electronics and industrial drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/ALA-new-photo-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Lourdu Jame S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-lourdu-jame/",
        "Designation": "Assistant Professor",
        "Specialization": "Energy conservation and management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/SLJ.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Naveen C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-naveen/",
        "Designation": "Assistant Professor",
        "Specialization": "Renewable Energy, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0574-1-768x569-1-e1690786074435.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Nithya C",
        "url": "https://www.srmist.edu.in/faculty/c-nithya/",
        "Designation": "Assistant Professor",
        "Specialization": "Power systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0608-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Palanisamy R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-palanisamy/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/palanisamy-r-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Phani Teja Bankupalli",
        "url": "https://www.srmist.edu.in/faculty/dr-phani-teja-bankupalli/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/phani-pic.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Poornima P U",
        "url": "https://www.srmist.edu.in/faculty/p-u-poornima/",
        "Designation": "Assistant Professor",
        "Specialization": "power electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/P. U. Poornima.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Pradeep V",
        "url": "https://www.srmist.edu.in/faculty/dr-pradeep-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives  Mail pradeepv@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/pradeep-v.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. R.Rajarajeswari",
        "url": "https://www.srmist.edu.in/faculty/dr-r-rajarajeswari/",
        "Designation": "Assistant Professor",
        "Specialization": "Demand Response Strategy and its Application in Smart Grid Environment",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0612-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Ramya R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0583-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Ravi Eswar K M",
        "url": "https://www.srmist.edu.in/faculty/dr-ravi-eswar-k-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0580-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Ravichandran D",
        "url": "https://www.srmist.edu.in/faculty/mr-d-ravichandran/",
        "Designation": "Assistant Professor",
        "Specialization": "Power System Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/MY_PHOTO_REDUCED.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. S. Vijayalakshmi",
        "url": "https://www.srmist.edu.in/faculty/dr-s-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr_S_Vijayalakshmi.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Sadees M",
        "url": "https://www.srmist.edu.in/faculty/m-sadees/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Untitled.png"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Selvabharathi D",
        "url": "https://www.srmist.edu.in/faculty/d-selvabharathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Selva_Photo-1.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Selvakumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-selvakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DSC_1419-1-scaled-e1678075283775.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Senthil Kumar R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-senthil-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power electronics & drives, Digital signal processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0572-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Shanmugapriya S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-shanmugapriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0624-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Subha Sharmini K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-subha-sharmini/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "Electronics and Control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/20211216_100853-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Suresh P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-suresh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.P.Suresh-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Sureshkumar A",
        "url": "https://www.srmist.edu.in/faculty/mr-a-sureshkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/IMG_0656-1536x1024-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Thamizh Thentral T M",
        "url": "https://www.srmist.edu.in/faculty/dr-t-m-thamizh-thentral/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/TMT_DP_PH_1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Usha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-usha/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0662-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Uthra R",
        "url": "https://www.srmist.edu.in/faculty/mrs-uthra-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/RU2-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Vidyasagar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-vidyasagar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/SVS-photo-new-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "title": "Dr. Vinothkumar B",
        "url": "https://www.srmist.edu.in/faculty/mr-b-vinothkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0650-scaled.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sangeetha M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-sangeetha/",
        "Designation": "Professor & Head",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/sangeetha-1.png"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Akbar S.A",
        "url": "https://www.srmist.edu.in/faculty/dr-s-a-akbar/",
        "Designation": "Chief Scientist and Professor AcSIR (retd.)",
        "Specialization": "Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_S_A_Akbar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Aruna Priya P",
        "url": "https://www.srmist.edu.in/faculty/p-aruna-priya/",
        "Designation": "Professor",
        "Specialization": "Nano Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100213-Dr.-P.-Aruna-Priya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Dhanalakshmi S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-dhanalakshmi/",
        "Designation": "Professor",
        "Specialization": "Computer Vision, Biomedical Image / Speech, Signal Processing / Machine Learning / Deep Learning / Sensors / FBG",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101911-Dr.-S.-Dhanalakshmi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Eswaran P",
        "url": "https://www.srmist.edu.in/faculty/p-eswaran/",
        "Designation": "Professor",
        "Specialization": "MEMS, Embedded System design, IoT, Avionics, Computer vision and Image Processing, Robotics, Industrial automation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100251-Dr.-P.-Eswaran.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Kumar R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-kumar/",
        "Designation": "Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Kumar-Photo-Passport.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Malarvizhi S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-malarvizhi/",
        "Designation": "Professor",
        "Specialization": "Wireless 5G, B5G communication, massive MIMO, VLSI architecture for (massive) MIMO algorithms, RF circuit design, Machine and deep learning for images and medical images.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. S. Malarvizhi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Manimegalai C T",
        "url": "https://www.srmist.edu.in/faculty/mrs-c-t-manimegalai/",
        "Designation": "Professor",
        "Specialization": "Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100224-Dr.-C.T.-Manimegalai.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Rama Rao T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-rama-rao/",
        "Designation": "Professor",
        "Specialization": "Mobile & Wireless Communications/ Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100210-Dr.T.-Ramarao.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Ramachandran B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-ramachandran/",
        "Designation": "Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100206-Dr.-B.-Ramachandran.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Selvakumar J",
        "url": "https://www.srmist.edu.in/faculty/j-selvakumar/",
        "Designation": "Professor",
        "Specialization": "VLSI and Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100232-Dr.J.-Selvakumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Shanthi Prince",
        "url": "https://www.srmist.edu.in/faculty/dr-shanthi-prince/",
        "Designation": "Professor",
        "Specialization": "Optical Communication and Bio-Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/100215-Dr.-Shanthi-Prince.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vidhyacharan Bhaskar",
        "url": "https://www.srmist.edu.in/faculty/dr-vidhyacharan-bhaskar/",
        "Designation": "Adjunct Professor",
        "Specialization": "Electrical Communication Engineering and Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dr_vidhyacharan_bhaskar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vijayakumar P",
        "url": "https://www.srmist.edu.in/faculty/p-vijayakumar/",
        "Designation": "Professor",
        "Specialization": "Signal processing, Machine learning, Deep learning, cognitive radio and intelligent system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100271-Dr.-P.-Vijayakumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Ceronmani Sharmila. V",
        "url": "https://www.srmist.edu.in/faculty/ceronmani-sharmila-v/",
        "Designation": "ASSOCIATE PROFESSOR",
        "Specialization": "Cyber Security and Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Sharmi-SRM.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Dayana R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-dayana/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100261-Dr.-R.-Dayana.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Deepa T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-deepa/",
        "Designation": "Associate Professor",
        "Specialization": "Digital Signal Processing, Digital Communication & Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100259-Dr.-T.-Deepa.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Diwakar R. Marur",
        "url": "https://www.srmist.edu.in/faculty/dr-diwakar-r-marur/",
        "Designation": "Associate Professor",
        "Specialization": "Digital Image Processing, Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7022.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Kalimuthu K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-kalimuthu/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. K. Kalimuthu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Karthik T S",
        "url": "https://www.srmist.edu.in/faculty/dr-karthik-t-s/",
        "Designation": "Associate Professor",
        "Specialization": "Computational VLSI, EDA & Device Modelling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7046-3.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Krithiga  S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-krithiga/",
        "Designation": "Associate Professor",
        "Specialization": "Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100867-Dr.-S.-Krithiga.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Latha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-latha/",
        "Designation": "Associate Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101503-Dr.S.-Latha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Manjula J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-manjula/",
        "Designation": "Associate Professor",
        "Specialization": "VLSI Design, RF Circuit Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100227-Dr.-J.-Manjula.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Maria Jossy A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-maria-jossy/",
        "Designation": "Associate Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100238-Dr.A.-Maria-Jossy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Nithya V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-nithya/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Communication, Wireless sensor networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Dr.-V.-Nithya-Profile-Photo-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Rajalakshmi T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-rajalakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100748-Dr.T.-Rajalakshmi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Rajesh Agarwal",
        "url": "https://www.srmist.edu.in/faculty/dr-rajesh-agarwal/",
        "Designation": "Associate Professor",
        "Specialization": "Solid State Devices, Thin Film Transistor, Analog Circuit Design, Digital Electronics, Integrated Circuit Technology, Microelectronic Fabrication Techniques and Characterization, Organic Electronics, Flexible and Wearable Electronics, and Organic Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102436-Dr.-Rajesh-Agarwal.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Roji Marjorie S",
        "url": "https://www.srmist.edu.in/faculty/dr-roji-marjoie-s/",
        "Designation": "Associate Professor",
        "Specialization": "Microelectronics, High power MOSFETs, Semiconductor devices, TCAD modelling of semiconductor devices, VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/ROJI-3.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Ruhan Bevi A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-ruhan-bevi/",
        "Designation": "Associate Professor",
        "Specialization": "Embedded Systems Technologies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100226-Dr.-A.-Ruhan-Bevi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Subhashini J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-subhashini/",
        "Designation": "Associate Professor",
        "Specialization": "Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100229-Dr.-J.-Subhashini.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Susila M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-susila/",
        "Designation": "Associate Professor",
        "Specialization": "Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100221-Dr.-M.-Susila.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vasanthi M.S",
        "url": "https://www.srmist.edu.in/faculty/dr-m-s-vasanthi/",
        "Designation": "Associate Professor",
        "Specialization": "Electronics and Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100216-Dr.-M.S.-Vasanthi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Yuvaraj S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-yuvaraj/",
        "Designation": "Associate Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101281-Dr.-S.-Yuvaraj.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Ananda Venkatesan B",
        "url": "https://www.srmist.edu.in/faculty/mr-b-ananda-venkatesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101333-Mr.-B.-Ananda-Venkatesan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Ananya Parameswaran",
        "url": "https://www.srmist.edu.in/faculty/dr-ananya-parameswaran/",
        "Designation": "Assistant Professor",
        "Specialization": "MICROWAVE ENGINEERING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/ANU_NEW_1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Anilet Bala A",
        "url": "https://www.srmist.edu.in/faculty/mrs-a-anilet-bala/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101334-Mrs.-A.-Anilet-Bala.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Anusooya V",
        "url": "https://www.srmist.edu.in/faculty/dr-anusooya-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/anussoya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Arijit Bardhan Roy",
        "url": "https://www.srmist.edu.in/faculty/dr-arijit-bardhan-roy/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102980-Dr.-Arijit-Bardhan-Roy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Arumbu V N",
        "url": "https://www.srmist.edu.in/faculty/dr-arumbu-v-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication systems, Wireless Communications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Arumbu_photo_SRMIST.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Bashyam S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-bashyam/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/101223-Dr.-S.-Bashyam.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Bharatha babu K",
        "url": "https://www.srmist.edu.in/faculty/dr-bharathababu-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Bharath-babu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Chitra E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-chitra/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100264-Dr.-E.-Chitra.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Damodar Panigrahy",
        "url": "https://www.srmist.edu.in/faculty/dr-damodar-panigrahy/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102435-Dr.-Damodar-Panigrahy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Debanjan Sarkar",
        "url": "https://www.srmist.edu.in/faculty/debanjan-sarkar/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7047.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Debarati Nath",
        "url": "https://www.srmist.edu.in/faculty/dr-debarati-nath/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic electronics , IOT and Machine learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/debarati-nath.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Dhivya K",
        "url": "https://www.srmist.edu.in/faculty/dr-dhivya-k-2/",
        "Designation": "Assistant Professor",
        "Specialization": "5G Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Dhivya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. E. Elamaran",
        "url": "https://www.srmist.edu.in/faculty/mr-e-elamaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101292-Dr.-E.-Elamaran.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Elavel Visuvanathan G",
        "url": "https://www.srmist.edu.in/faculty/mr-g-elavel-visuvanathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Mr_G_Elavel_Visuvanathan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Ferents Koni Jiavana K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-ferents-koni-jiavana/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100249-Dr.-K.-Ferents-Koni-Jiavana-4.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Gayathri S. S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-s-gayathri/",
        "Designation": "Assistant Professor",
        "Specialization": "Reversible logic design, Reconfigurable VLSI design, Quantum Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101994-Mrs.S.S.-Gayathri.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Giriprasad S",
        "url": "https://www.srmist.edu.in/faculty/dr-giriprasad-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7031.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Gulothungan G",
        "url": "https://www.srmist.edu.in/faculty/gulothungan-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded Systems, Computational Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7021_GULOPHOTO-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Hannah Pauline S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-hannah-pauline/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101577-Mrs.S.-Hannah-Pauline.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Harisudha K",
        "url": "https://www.srmist.edu.in/faculty/dr-harisudha-k-2/",
        "Designation": "Assistant Professor (SrG)",
        "Specialization": "Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100267-Dr.-K.-Harisudha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Haroonhaider H. Sidhwa",
        "url": "https://www.srmist.edu.in/faculty/dr-haroonhaider-homi-sidhwa/",
        "Designation": "Assistant Professor",
        "Specialization": "Electromagnetics, Antenna Theory, Abstract Algebra, Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7033.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Heartlin Maria H",
        "url": "https://www.srmist.edu.in/faculty/ms-heartlin-maria-h/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/heartlin.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Jaba Deva Krupa A",
        "url": "https://www.srmist.edu.in/faculty/mrs-a-jaba-deva-krupa/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engieering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mrs. A. Jaba Deva Krupa.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Jansi. R",
        "url": "https://www.srmist.edu.in/faculty/r-jansi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102956-Dr.R.-Jansi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Jenath M",
        "url": "https://www.srmist.edu.in/faculty/dr-jenath-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/JEN-SRM-PHOTO-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Kanaparthi V. Phani Kumar",
        "url": "https://www.srmist.edu.in/faculty/dr-kanaparthi-v-phani-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "RF/Microwave Engineering.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102400-Dr.-Kanaparthi-V-Phani-Kumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Kasthuri Bha J.K",
        "url": "https://www.srmist.edu.in/faculty/dr-j-k-kasthuri-bha/",
        "Designation": "Assistant Professor",
        "Specialization": "Example - VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100247-Dr.-J.K.-Kasthuri-Bha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Kayalvizhi R",
        "url": "https://www.srmist.edu.in/faculty/dr-kayalvizhi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Image processing and Artificial Intelligence",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Kayalvizhi S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-kayalvizhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded System, Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100243-Dr.-S.-Kayalvizhi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Lakshmi Thara R",
        "url": "https://www.srmist.edu.in/faculty/dr-lakshmi-thara/",
        "Designation": "Assistant Professor",
        "Specialization": "Nano Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/1.jpeg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Lavanya A.",
        "url": "https://www.srmist.edu.in/faculty/dr-a-lavanya-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102950-Mrs.-Lavanya-A.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Lokesh S",
        "url": "https://www.srmist.edu.in/faculty/dr-lokesh-s/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI DESIGN",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/lokesh.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Manikandan A",
        "url": "https://www.srmist.edu.in/faculty/dr-manikandan-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio Medical Image Processing, Wireless Sensor Network, VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7034.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Manikandan A.V.M",
        "url": "https://www.srmist.edu.in/faculty/a-v-m-manikandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Microelectronics, Nanoelectronics, Photovoltaics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100244-Mr.-A.V.M.-Manikandan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Maria Dominic Savio M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-maria-dominic-savio/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101555-Mr.-M.-Maria-Dominic-Savio.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Masood M H",
        "url": "https://www.srmist.edu.in/faculty/dr-masood-m-h/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7023-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Md Jawaid Alam",
        "url": "https://www.srmist.edu.in/faculty/dr-md-jawaid-alam/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanoelectronics, Metal-oxides based energy harvesting devices, MEMS for Biomedical sensors application.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102962-Dr.-MD-Jawaid-Alam.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Monika  R",
        "url": "https://www.srmist.edu.in/faculty/ms-r-monika/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/101986-Mrs.-R.-Monika.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Murugaveni S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-murugaveni/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering, Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100273-Dr.-S.-Murugaveni.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Neelaveni Ammal M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-neelaveni-ammal/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/FINAL-WHITE.png"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Padmajothi V",
        "url": "https://www.srmist.edu.in/faculty/mrs-v-padmajothi/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics, Embedded Cyber Physical Systems, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100255-Mrs.-V.-Padmajothi-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Parthiban I",
        "url": "https://www.srmist.edu.in/faculty/dr-parthiban-i/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/partiban.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Prabhu P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-prabhu/",
        "Designation": "Assistant Professor",
        "Specialization": "RF antenna design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101993-Dr.-P.-Prabhu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Prasad Jones Christydass",
        "url": "https://www.srmist.edu.in/faculty/dr-prasad-jones-christydass/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/prasad.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Prasanna R",
        "url": "https://www.srmist.edu.in/faculty/dr-prasanna-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Communication, UWB Antennas, Bio-Medical Antennas, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Prasanna-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Pratik Mondal",
        "url": "https://www.srmist.edu.in/faculty/pratik-mondal/",
        "Designation": "Assistant Professor",
        "Specialization": "RF and Microwaves",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7060.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Praveen Kumar S",
        "url": "https://www.srmist.edu.in/faculty/s-praveen-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Emdedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101279-Dr.S.-Praveen-Kumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Prithiviraj Rajalingam",
        "url": "https://www.srmist.edu.in/faculty/dr-r-prithivi-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "Low Power VLSI Design, Radiation Hardened Based Design.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101504-Dr.-R.-Prithiviraj.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Priyadharshini R",
        "url": "https://www.srmist.edu.in/faculty/dr-priyadharshini-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Information and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Priya-dharshini.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Priyalakshmi B",
        "url": "https://www.srmist.edu.in/faculty/mrs-b-priyalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering, Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100248-Dr.-B.-Priyalakshmi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Pulkit Singh",
        "url": "https://www.srmist.edu.in/faculty/dr-pulkit-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "Hardware Implementation, Lightweight Cryptography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/pulkit-singh.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Radhika P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-radhika/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100236-Dr.-P.-Radhika.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Ramya T",
        "url": "https://www.srmist.edu.in/faculty/ms-t-ramya/",
        "Designation": "Assistant Professor(Sr.G)",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100254-Ms.T.-Ramya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Saminathan T",
        "url": "https://www.srmist.edu.in/faculty/mr-t-saminathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101495-Mr.-T.-Saminathan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sandeep Kumar P",
        "url": "https://www.srmist.edu.in/faculty/dr-sandeep-kumar-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Planar antennas, Monopole antennas, Wideband antennas, Conformal antennas, Antenna measurements, Microwaves,MIMO antennas,3D antennas.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102192-Dr.-Sandeep-Kumar-P.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sanjay Kumar Sahu",
        "url": "https://www.srmist.edu.in/faculty/dr-sanjay-kumar-sahu/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Communication, Applied Optics and Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102992-Dr.-Sanjay-Kumar-Sahu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sarada V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-sarada/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100263-Dr.-V.-Sarada.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sathiyan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sathiyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Fiber Lasers, Waveguide Polarizers, Graphene and its related two-dimensional layered materials, nanomaterial based saturable absorbers.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102251-Dr.-S.-Sathiyan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sayantani Bhattacharya",
        "url": "https://www.srmist.edu.in/faculty/mrs-sayantani-bhattacharya/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical fiber sensors, Fiber Bragg Grating (FBG), Regenerated Fiber Bragg Grating sensors  design, fabrication and characterizations, High-temperature stable grating",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7042-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Senthil Kumaran R",
        "url": "https://www.srmist.edu.in/faculty/dr-senthil-kumaran-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Mobile Adhoc Networks, Internet of Things (IoT), Communication and Signal Processing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/rsk.jpeg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Shayna Kumari",
        "url": "https://www.srmist.edu.in/faculty/dr-shayna-kumari/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/shyana.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sivakumar E",
        "url": "https://www.srmist.edu.in/faculty/mr-sivakumar-e/",
        "Designation": "Assistant Professor",
        "Specialization": "Antennas, Microelectronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100266-Dr.-E.-Sivakumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Soumyaranjan Routray",
        "url": "https://www.srmist.edu.in/faculty/dr-soumyaranjan-routray/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Semiconductor Devices, Reliability and Failure Analysis, IC Design, Neuromorphic Computing, Qubit Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102437-Dr.-Soumyaranjan-Routray.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sounik Kiran Kumar Dash",
        "url": "https://www.srmist.edu.in/faculty/dr-sounik-kiran-kumar-dash/",
        "Designation": "Research Assistant Professor",
        "Specialization": "RF and Microwave Engineering, Antennas, Filters",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102812-Dr.-Sounik-Kiran-Dash.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sowmya N",
        "url": "https://www.srmist.edu.in/faculty/ms-sowmya-n/",
        "Designation": "Assistant Professor",
        "Specialization": "•Signal processing, Embedded system, IoT. •Artificial Intelligence enabled food analysis, Machine Learning, Deep Learning, Blockchain.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/sowmya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Srilekha M K",
        "url": "https://www.srmist.edu.in/faculty/mrs-m-k-srilekha/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless nano sensor networks, Biosensor.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101124-Mrs.-M.K.-Srilekha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Srinath R",
        "url": "https://www.srmist.edu.in/faculty/dr-srinath-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio Medical Signal Processing, AI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/srinath.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sriram A",
        "url": "https://www.srmist.edu.in/faculty/mr-a-sriram/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101594-Mr.-A.-Sriram.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sudhanya P",
        "url": "https://www.srmist.edu.in/faculty/dr-sudhanya-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102954-Dr.P.-Sudhanya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Suganthi K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-suganthi/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100241-Dr.-K.-Suganthi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sukanya Ghosh",
        "url": "https://www.srmist.edu.in/faculty/dr-sukanya-ghosh/",
        "Designation": "Assistant Professor",
        "Specialization": "Microelectronics and VLSI, Semiconductor Device Based Gas Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/profile_picture.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sumitra V",
        "url": "https://www.srmist.edu.in/faculty/sumitra-v/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7035.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Sunithamani S",
        "url": "https://www.srmist.edu.in/faculty/dr-sunithamani-s/",
        "Designation": "Assistant Professor",
        "Specialization": "MEMS SENSORS, ENERGY HARVESTING,VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/dr-S-Sunithamani.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Tharani D",
        "url": "https://www.srmist.edu.in/faculty/dr-tharani-d/",
        "Designation": "Assistant Professor",
        "Specialization": "RF and Microwave",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7039.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Uday Kumar Singh",
        "url": "https://www.srmist.edu.in/faculty/dr-uday-kumar-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7024-2.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Umamaheswari S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-umamaheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Image Processing, Signal Processing, Machine learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102136-Dr.S.-Uma-maheswari.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vadivukkarasi K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-vadivukkarasi/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Embedded system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100272-Dr.-K.-Vadivukkarasi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Valarmathi M",
        "url": "https://www.srmist.edu.in/faculty/m-valarmathi/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "Low power VLSI design, Signal processing in VLSI and ASIC design for Hardware security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100265-Mrs.-M.-Valarmathi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vasanthadev Suryakala S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-vasanthadev-suryakala/",
        "Designation": "Assistant Professor (Sr. G)",
        "Specialization": "Spectroscopy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100252-Dr.-S.-Vasanthadev-Suryakala.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vasudevan B",
        "url": "https://www.srmist.edu.in/faculty/dr-vasudevan-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Devices, Medical Imaging, Photonics,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/Screenshot-2024-02-11-162849-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Veer Chandra",
        "url": "https://www.srmist.edu.in/faculty/dr-veerchandra/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/pic2.jpeg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vijayalakshmi D",
        "url": "https://www.srmist.edu.in/faculty/ms-d-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical sensors and VLSI design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Vijayalakshmi.D-Photo.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vimala C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-vimala/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101107-Dr.C.-Vimala.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vishvas Kumar",
        "url": "https://www.srmist.edu.in/faculty/vishvas-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7029.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr. Vivek Devendra Kachhatiya",
        "url": "https://www.srmist.edu.in/faculty/dr-vivek-devendra-kachhatiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Access Network and Optical Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102985-Dr.-Vivek-Devendra-Kachhatiya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr.S.Kolangiammal",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-kolangiammal/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7027.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Dr.Tulika Srivastava",
        "url": "https://www.srmist.edu.in/faculty/dr-tulika-srivastava/",
        "Designation": "Assistant Professor",
        "Specialization": "Optoelectronics, Electronic Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7040-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mr. Aravindan  M",
        "url": "https://www.srmist.edu.in/faculty/m-aravindan/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100712-Mr.-M.-Aravindan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mr. Joshua Jafferson. A",
        "url": "https://www.srmist.edu.in/faculty/a-joshua-jafferson/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101118-Mr.A.-Joshua-Jafferson.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mr. MuthuKumaran B",
        "url": "https://www.srmist.edu.in/faculty/b-muthukumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/MUTHU.JPJ_.jpeg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Aarthy S.T",
        "url": "https://www.srmist.edu.in/faculty/s-t-aarthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100246-Mrs.-S.T.-Aarthy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Abanah Shirley J",
        "url": "https://www.srmist.edu.in/faculty/mrs-abanah-shirley-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Wearable Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7044.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Bhavani A",
        "url": "https://www.srmist.edu.in/faculty/ms-a-bhavani/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101722-Mrs.-A.-Bhavani.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Diana Emerald Aasha S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-diana-emerald-aasha/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101561-Mrs.-S.-Diana-Emerald-Aasha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Kalaimagal G",
        "url": "https://www.srmist.edu.in/faculty/g-kalaimagal/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101291-Mrs.-G.-Kalaimagal.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Ponnammal P",
        "url": "https://www.srmist.edu.in/faculty/p-ponnammal/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded System Technologies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/P.Ponnammal.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Ramya A",
        "url": "https://www.srmist.edu.in/faculty/ms-a-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101585-Mrs.-A.-Ramya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Saraswathi N",
        "url": "https://www.srmist.edu.in/faculty/mrs-n-saraswathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100219-Mrs.-N.-Saraswathi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Suganthi Brindha G",
        "url": "https://www.srmist.edu.in/faculty/mrs-g-suganthi-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101583-Mrs.G.-Suganthi-Brindha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Veni  N",
        "url": "https://www.srmist.edu.in/faculty/mrs-n-veni/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101988-Mrs.-N.Veni_.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "title": "Mrs. Vinnarasi A",
        "url": "https://www.srmist.edu.in/faculty/a-vinnarasi/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded Systems, IoT,ML,DL",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101161-Mrs.-A.-Vinnarasi.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Joselin Retna Kumar G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-joselin-retna-kumar/",
        "Designation": "Professor And Head",
        "Specialization": "Process control and Instrumentation, Automation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-6.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Vimala Juliet A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-vimala-juliet/",
        "Designation": "Professor, MEMS & Microsystems",
        "Specialization": "Instrumentation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/chocolate-saree-vjweb-1.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Asuntha A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-asuntha/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "Process control, Adaptive control, Non Linear control, Medical Image processing, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-13.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Bakiya lakshmi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-bakiyalakshmi-2/",
        "Designation": "Assistant Professor",
        "Specialization": "MEMS, Control systems, Modern control systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-11.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Brindha A",
        "url": "https://www.srmist.edu.in/faculty/ms-a-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Video and medical Image Processing, Data analysis and Classification, Design and development of medical instrument",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-1-1.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Indirani S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-indirani/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics  &  Instrumentation, Industrial Instrumentation, Instrumentation & Control in Iron and Steel industry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/phto-indirani-2024-e1733911331513.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Jekan P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-jekan/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Instrumentation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-10-at-10.33.22-e1733912143336.jpeg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Likith Kumar C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-likith-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "MEMS, Control Systems, Automation and PLC",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Likith-e1733911973320-234x300-1.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Rajaa Vikhram G Y",
        "url": "https://www.srmist.edu.in/faculty/dr-g-y-rajaa-vikhram/",
        "Designation": "Assistant Professor",
        "Specialization": "Power System Control",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Sam Jeba Kumar J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-sam-jeba-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Automation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-22.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Sharanya S",
        "url": "https://www.srmist.edu.in/faculty/mrs-sharanya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio Medical Signal Processing, Instrumentation System Design, Industrial Instrumentation, Communication Engineering, Neural Network &Fuzzy Logic, Artificial Intelligence, Process Control and Control System.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2025/01/srm-faculty-12.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "title": "Dr. Vibha K",
        "url": "https://www.srmist.edu.in/faculty/dr-vibha-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Karthiga S.V.",
        "url": "https://www.srmist.edu.in/faculty/dr-s-v-karthiga/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "English Language Teaching (ELT)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Dr.-Karthiga.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Shanthichitra K.",
        "url": "https://www.srmist.edu.in/faculty/dr-k-shanthichitra/",
        "Designation": "Professor",
        "Specialization": "Culture Studies and Phenomenology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Abirami T.",
        "url": "https://www.srmist.edu.in/faculty/dr-abirami-t/",
        "Designation": "Assistant professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Dr.-Abirami-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Annie Vimala D.",
        "url": "https://www.srmist.edu.in/faculty/dr-annie-vimala-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Dr.-Annie-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Arunprabu C.S.",
        "url": "https://www.srmist.edu.in/faculty/dr-c-s-arunprabu/",
        "Designation": "Assistant Professor",
        "Specialization": "New Historicism, Existential Philosophy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/2-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Daryl Cressida G.",
        "url": "https://www.srmist.edu.in/faculty/dr-daryl-cresseda/",
        "Designation": "Assistant Professor",
        "Specialization": "Literature and Literary Criticism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Fredrick Jorgenson C.",
        "url": "https://www.srmist.edu.in/faculty/dr-fredrick-jorgenson-c/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature subjects",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/2-6-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Shalini Infanta L.",
        "url": "https://www.srmist.edu.in/faculty/dr-shalini-infanta-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Postcolonial Literature, Gender studies, American Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/3-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "title": "Dr. Vennila V.",
        "url": "https://www.srmist.edu.in/faculty/dr-v-vennila/",
        "Designation": "Assistant Professor",
        "Specialization": "Linguistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Kavitha Nair L",
        "url": "https://www.srmist.edu.in/faculty/dr-l-kavitha-nair/",
        "Designation": "Professor and Head",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_1377-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Andrei A Sychev",
        "url": "https://www.srmist.edu.in/faculty/dr-andrei-a-sychev/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/Dr.-Andrei-A-Sychev1.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Latha R",
        "url": "https://www.srmist.edu.in/faculty/dr-latha-r/",
        "Designation": "Associate Professor",
        "Specialization": "English Language Teaching and Testing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Untitled-3.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Mahesh M",
        "url": "https://www.srmist.edu.in/faculty/dr-mahesh-m/",
        "Designation": "Associate Professor",
        "Specialization": "Linguistics, Phonetics, Phonology, Acoustic Phonetics, Language Documentation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/erfet.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Tamilarasan P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-tamilarasan/",
        "Designation": "Associate Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/1722671904866.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Busareddy Vijaya Kumar",
        "url": "https://www.srmist.edu.in/faculty/busareddy-vijaya-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/busareddy.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Debashrita Dey",
        "url": "https://www.srmist.edu.in/faculty/debashrita-dey/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/dey.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr C M Sharmi Rachel",
        "url": "https://www.srmist.edu.in/faculty/dr-sharmi-rachel-c-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Creative Writing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Sharmi-Rachel.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Alagesan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-alagesan/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1412-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Alice Ligoria D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-alice-ligoria/",
        "Designation": "Assistant Professor",
        "Specialization": "Afrofuturism, Science Fiction, Literary Theory and Criticism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Alice.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Anderleen Diana Lazarus",
        "url": "https://www.srmist.edu.in/faculty/anderleen-diana-lazarus/",
        "Designation": "Asst Prof.,  Executive Asst. to VC & Manager Faculty Personnel",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_8645-copys-5.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Argha Basu",
        "url": "https://www.srmist.edu.in/faculty/argha-basu/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/basu.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Arul Dayanand S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-arul-dayanand/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied & Computational Linguistics, Educational Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7352.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Bhargavi S",
        "url": "https://www.srmist.edu.in/faculty/dr-bhargavi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Bhargavi.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Bishnu Paramguru Mahapatra",
        "url": "https://www.srmist.edu.in/faculty/dr-bishnu-paramguru-mahapatra/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Bishnu-PM.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Caleb Theodar M",
        "url": "https://www.srmist.edu.in/faculty/dr-caleb-theodar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Film Adaptation Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/2024-Caleb-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. David T",
        "url": "https://www.srmist.edu.in/faculty/dr-david-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/David.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Ezhil K",
        "url": "https://www.srmist.edu.in/faculty/ms-k-ezhil/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1415-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Horizan Prasanna Kumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-horizan-prasanna-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1380-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. John Joseph",
        "url": "https://www.srmist.edu.in/faculty/dr-john-joseph/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching and Material Development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/1.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Karunanithi V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-karunanithi-2/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Karunanithi-V.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Mahadevan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-mahadevan/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Mahadevan-S.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Maragathavel K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-maragathavel/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Maragathavel-K.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Micheal Raj J",
        "url": "https://www.srmist.edu.in/faculty/micheal-raj-j/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Dr.-Micheal-Raj-J-3.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Monika Nair B",
        "url": "https://www.srmist.edu.in/faculty/ms-b-monika-nair/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Website-Photo-Dr.-Monika-Nair-B-1.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Poonam U",
        "url": "https://www.srmist.edu.in/faculty/dr-poonam/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Poonam-U.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Poongodi A",
        "url": "https://www.srmist.edu.in/faculty/ms-a-poongodi/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1396-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Prasanth P S",
        "url": "https://www.srmist.edu.in/faculty/dr-prasanth-p-s/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Prasanth-P-S-Photo-4.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Pressila Daissy S",
        "url": "https://www.srmist.edu.in/faculty/dr-pressila-daissy-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Prisci-Photo-SRM-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Ramya S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/ramya-pic-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Sandhiya Devi G",
        "url": "https://www.srmist.edu.in/faculty/dr-sandhiya-devi-g/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/oioi.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Sulagna Mohanty",
        "url": "https://www.srmist.edu.in/faculty/dr-sulagna-mohanty/",
        "Designation": "Assistant Professor of English",
        "Specialization": "Visual Media Narrative, Myth and Folklore Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sulgana.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Sumathy M",
        "url": "https://www.srmist.edu.in/faculty/dr-sumathy-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Indian Writing in English",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/DSC_7380-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Thomas Alwa Edison. K",
        "url": "https://www.srmist.edu.in/faculty/dr-thomas-alwa-edison-k/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Thomas.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Dr. Uma Maheswari M M",
        "url": "https://www.srmist.edu.in/faculty/m-m-uma-maheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1413-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mr. Sabastian Satish J",
        "url": "https://www.srmist.edu.in/faculty/j-sabastian-satish/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "French, Spanish",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr.-Sabastian-Satish-J-1.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mr. Velupula Krishnaiah",
        "url": "https://www.srmist.edu.in/faculty/velupula-krishnaiah/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Untitled-1-2.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mrs. Chandralega R",
        "url": "https://www.srmist.edu.in/faculty/ms-r-chandralega/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Mrs.-Chandralega-R-2-3.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mrs. Latha S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-latha/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG-20230420-WA0001.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mrs. Magdalene Sowmya K",
        "url": "https://www.srmist.edu.in/faculty/ms-k-magdalene-sowmya/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1381-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mrs. Manju Rekha A",
        "url": "https://www.srmist.edu.in/faculty/manju-rekha-a/",
        "Designation": "Assistant Professor",
        "Specialization": "French",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1390-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mrs. Rekhaa P R",
        "url": "https://www.srmist.edu.in/faculty/p-r-rekhaa/",
        "Designation": "Assistant Professor",
        "Specialization": "Japanese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Rekhaas-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Gayle Renee Franswah",
        "url": "https://www.srmist.edu.in/faculty/ms-gayle-renee-franswah/",
        "Designation": "Assistant Professor",
        "Specialization": "French",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1402-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Jayati C Banerjee",
        "url": "https://www.srmist.edu.in/faculty/ms-jayati-c-banerjee/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1388-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Kala Sharma",
        "url": "https://www.srmist.edu.in/faculty/kala-sharma/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kala-Passport-2.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Sangeetha H",
        "url": "https://www.srmist.edu.in/faculty/ms-sangeetha-h/",
        "Designation": "Assistant Professor",
        "Specialization": "French",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/sangeetha-EFL-SRM.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Sundaravalli V",
        "url": "https://www.srmist.edu.in/faculty/__trashed-61/",
        "Designation": "Assistant Professor",
        "Specialization": "Japanese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Ms.-Sundaravalli-V.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Yantsubeni Ngullie",
        "url": "https://www.srmist.edu.in/faculty/yantsubeni-ngullie/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/B612_20240705_100650_229.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ganga Devi G",
        "url": "https://www.srmist.edu.in/faculty/ganga-devi-g-2/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Ganga-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mr. Krishnamourthy V",
        "url": "https://www.srmist.edu.in/faculty/mr-v-krishnamourthy/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Krishnamourthy-V.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Mary Florence D",
        "url": "https://www.srmist.edu.in/faculty/mary-florence-d/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Mary-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Mrs. Bhuvana Udhayakumar",
        "url": "https://www.srmist.edu.in/faculty/ms-bhuvana-udhayakumar/",
        "Designation": "Visiting Faculty",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1416-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Ling Yun Tsai",
        "url": "https://www.srmist.edu.in/faculty/ms-ling-yun-tsai/",
        "Designation": "Director of TEC-SRMIST & Mandarin Instructor of EFL department",
        "Specialization": "Chinese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/蔡翎芸04-1.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms. Yu Cheng Chiu",
        "url": "https://www.srmist.edu.in/faculty/ms-yu-cheng-chiu/",
        "Designation": "Mandarin  Instructor",
        "Specialization": "Mandarin Chinese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo1.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "title": "Ms.Yoko Naito",
        "url": "https://www.srmist.edu.in/faculty/ms-yoko-naito/",
        "Designation": "Adjunct Faculty",
        "Specialization": "Japanese Language",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/DSC_1389-1sCpFwQa0-transformed.png"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "title": "Dr. Murugan N",
        "url": "https://www.srmist.edu.in/faculty/dr-murugan-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Sericulture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Muru-2-scaled.jpg"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "title": "Dr. Muthukumar M",
        "url": "https://www.srmist.edu.in/faculty/m-muthukumar/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muthukumar-2023-Jul-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "title": "Dr. Nisha R",
        "url": "https://www.srmist.edu.in/faculty/dr-nisha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.R.Nisha_-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "title": "Mr. Kamaraj Dharmalingam",
        "url": "https://www.srmist.edu.in/faculty/kamaraj-dharmalingam/",
        "Designation": "Assistant Professor",
        "Specialization": "Agrl. Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Kama-2-scaled-e1693997889438.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "title": "Dr. Priyanka R",
        "url": "https://www.srmist.edu.in/faculty/r-priyanka/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Textiles",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20230304-WA0053-removebg-preview-2.png"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "title": "Dr. Umamageshwari S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-umamageshwari/",
        "Designation": "Assistant Professor",
        "Specialization": "Fashion Designing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_27781.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "title": "Mrs. Balaguru H. (Margaret Magizhini)",
        "url": "https://www.srmist.edu.in/faculty/h-balaguru/",
        "Designation": "Assistant Professor",
        "Specialization": "Textile Designing, Fashion Illustration, Fashion Merchandising ,Visual Merchandising,Theatre Costumes,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/2-scaled.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "title": "Mrs. Lavanya J",
        "url": "https://www.srmist.edu.in/faculty/lavanya-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Fashion and Textile Designing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-scaled.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "title": "Mr. Sasikumar S",
        "url": "https://www.srmist.edu.in/faculty/mr-sasikumar-s/",
        "Designation": "Technical Instructor",
        "Specialization": "Pattern Making and Dress Designing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/SASI-JPG-1_page-0001.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "title": "Dr. Anandhi S",
        "url": "https://www.srmist.edu.in/faculty/s-anandhi/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Floriculture and Medicinal Crops",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Anan-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "title": "Dr. Rajiv G",
        "url": "https://www.srmist.edu.in/faculty/dr-rajiv-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Floriculture and Landscape Gardening",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Rajiv.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "title": "Dr. Shakila S",
        "url": "https://www.srmist.edu.in/faculty/dr-shakila-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Floriculture and Landscape Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Shak-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "title": "Ms. Kanimozhi C",
        "url": "https://www.srmist.edu.in/faculty/c-kanimozhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Floriculture & Landscaping",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ms.-Kanimozhi.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "title": "Dr. Gurumoorthi P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-gurumoorthi/",
        "Designation": "Associate Professor",
        "Specialization": "Food Safety and Quality Management, Food Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.-Gurumoorthy.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "title": "Dr. Nagamaniammai G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-nagamaniammai/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Profile-photo-Dr.-Nagamaniammai.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "title": "Dr. Periyar Selvam S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-periyar-selvam/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Dr.-S.-Periyar-Selvam.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "title": "Dr. Preetha R",
        "url": "https://www.srmist.edu.in/faculty/dr-preetha-r/",
        "Designation": "Associate Professor",
        "Specialization": "Food Biotechnology and Environmental Biotechnology",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "title": "Dr. Antony Catherine Flora L",
        "url": "https://www.srmist.edu.in/faculty/dr-antony-catherine-flora-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Food Technology, Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/catherine.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "title": "Dr. G. Sarathchandra",
        "url": "https://www.srmist.edu.in/faculty/dr-g-sarathchandra/",
        "Designation": "Adjunct Faculty",
        "Specialization": "Food Toxicology, Veterinary Toxicology, Veterinary Pharmacology & Fish Pharmacology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/sarath-1.jpg"
    },
    {
        "DepartmentCode": 24105,
        "DepartmentName": "Department of French",
        "title": "Mr. Kumaravel K",
        "url": "https://www.srmist.edu.in/faculty/mr-kumaravel-k/",
        "Designation": "HEAD",
        "Specialization": "FRENCH - TRANSLATION,  INTERPRETATION, GRAMMAR, CIVILISATION AND LITERATURE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/2-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24105,
        "DepartmentName": "Department of French",
        "title": "Divya Dharshini M",
        "url": "https://www.srmist.edu.in/faculty/divya-dharshini-m/",
        "Designation": "Teaching Associate",
        "Specialization": "French Literature and  Linguistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "title": "Dr. Gopu B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-gopu/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Horticulture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/GOPU-B.jpg"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "title": "Dr. Akino A",
        "url": "https://www.srmist.edu.in/faculty/dr-akino-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Horticulture (Fruit Science)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Akino-A-scaled-e1680764448966.jpg"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "title": "Dr. Deepika V",
        "url": "https://www.srmist.edu.in/faculty/dr-deepika-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Crop management in fruit crops",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Deep-3-scaled-e1680760260209.jpg"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "title": "Dr. Gopi V",
        "url": "https://www.srmist.edu.in/faculty/dr-gopi-v/",
        "Designation": "Assistant Professor (Horticulture - Fruit Science)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/W.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Kirankumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-kirankumar/",
        "Designation": "Associate Professor and Head",
        "Specialization": "Developmental Biology & Zebrafish Disease Models",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Kiran-Profile-Picture-copy.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Parani Madasamy",
        "url": "https://www.srmist.edu.in/faculty/dr-m-parani/",
        "Designation": "Professor",
        "Specialization": "Genetic Engineering & Genomics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Parani-Madasamy.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Ramya M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-ramya/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/ramya-prof.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Megala J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-megala/",
        "Designation": "Associate Professor",
        "Specialization": "Cancer Biology, Human Genetics, Immunogenetics, Clinical Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0036_DSC_9272.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Raja N. S.",
        "url": "https://www.srmist.edu.in/faculty/dr-n-s-raja/",
        "Designation": "Associate Professor",
        "Specialization": "Molecular biology, Structural Biology, Membrane Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0025_DSC_9285.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Rajnish K.N",
        "url": "https://www.srmist.edu.in/faculty/dr-k-n-rajnish/",
        "Designation": "Associate Professor",
        "Specialization": "Functional genomics, recombinant DNA technology, molecular microbiology Phone Number 91-44-27417817",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0022_DSC_9289.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Satish Ramalingam",
        "url": "https://www.srmist.edu.in/faculty/dr-satish-ramalingam/",
        "Designation": "Associate Professor",
        "Specialization": "Cancer Biology, Molecular Cell Biology, Physiology, Immunology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0014_DSC_9299.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Senthilkumar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-senthilkumar/",
        "Designation": "Associate Professor",
        "Specialization": "Plant Pathogen Interactions, Bioremediation, Defense-related proteins",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_0629-copy-1-e1711969701384.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Usha B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-usha/",
        "Designation": "Associate Professor",
        "Specialization": "Plant Molecular Biology and Biotechnology, Polycystic Ovary Syndrome",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/05/Profile_Bio-Tech_0011_DSC_9302.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. ArulJothi K.N",
        "url": "https://www.srmist.edu.in/faculty/dr-k-n-aruljothi/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Genetic Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0009_DSC_9304.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Ganesan G",
        "url": "https://www.srmist.edu.in/faculty/dr-ganesan-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant biotic and abiotic stress tolerance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-G.-Ganesan-Genetic-Department-4.jpeg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Manoj Kumar N",
        "url": "https://www.srmist.edu.in/faculty/manoj-kumar-n/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Bioprocess and Downstream processing, Nanotechnology, Drug delivery, Biofuel production",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Manoj-Kumar-N.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Prabahan Chakraborty",
        "url": "https://www.srmist.edu.in/faculty/dr-prabahan-chakraborty/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Neuroscience",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Prabahan-Chakraborty_passport-photo-scaled.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Revathi Devi S",
        "url": "https://www.srmist.edu.in/faculty/ms-revathi-devi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Cancer Genomics and Gene editing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/revathi.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Selvarajan E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-selvarajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Selvarajan-E.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "title": "Dr. Sivaramakrishnan V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-sivaramakrishnan/",
        "Designation": "Assistant Professor [SL.G.]",
        "Specialization": "Cancer Biology and Molecular cancer therapeutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/DSC_0282-scaled.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "title": "Dr. Thirugnana kumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-thirugnana-kumar-s/",
        "Designation": "Professor and Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Thir-scaled.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "title": "Dr. Ambika S",
        "url": "https://www.srmist.edu.in/faculty/dr-ambika-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ambi-2-scaled.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "title": "Dr. Chandrasekar A",
        "url": "https://www.srmist.edu.in/faculty/dr-chandrasekar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Chandrasekar.-A.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "title": "Dr. Jegadeeswaran M",
        "url": "https://www.srmist.edu.in/faculty/dr-jegadeeswaran-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Jegadeeswaran.-M.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "title": "Dr. Mahendran R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-mahendran-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Mahendran.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "title": "Dr. Sathya R",
        "url": "https://www.srmist.edu.in/faculty/dr-sathya-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Sath-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "title": "Dr. Selvakumar G",
        "url": "https://www.srmist.edu.in/faculty/dr-selvakumar-g/",
        "Designation": "Assistant Professor (Genetics and Plant Breeding)",
        "Specialization": "Mutation Breeding, Molecular Genetics, Genomics and Transcriptomics.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Selvakumar-G.png"
    },
    {
        "DepartmentCode": 23783,
        "DepartmentName": "Department of Hindi",
        "title": "Dr. Md. Shwahidul Islam",
        "url": "https://www.srmist.edu.in/faculty/dr-md-shwahidul-islam/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Modern Poetry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230222-WA0010.jpg"
    },
    {
        "DepartmentCode": 23783,
        "DepartmentName": "Department of Hindi",
        "title": "Dr. Preeti S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-preeti/",
        "Designation": "Associate Professor",
        "Specialization": "Hindi Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 23783,
        "DepartmentName": "Department of Hindi",
        "title": "Dr. Razia Begum. S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-razia-begum/",
        "Designation": "Assistant Professor",
        "Specialization": "Hindi",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Razia-Photo-1.jpg"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "title": "Dr. Jawaharlal M",
        "url": "https://www.srmist.edu.in/faculty/dr-jawaharlal-m/",
        "Designation": "Dean,  SRM College of Agriculture Sciences",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Jawaharlal-M.png"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "title": "Dr. Ganesh S",
        "url": "https://www.srmist.edu.in/faculty/dr-ganesh-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ganesh-Sir-with-coat.jpg"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "title": "Dr. Ilakiya T",
        "url": "https://www.srmist.edu.in/faculty/dr-ilakiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/T.Ilakiya-1.jpg"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "title": "Dr. Rajasekar. M",
        "url": "https://www.srmist.edu.in/faculty/dr-rajasekar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/DSC_0248-copy.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "title": "Dr. Praveen Kumar P",
        "url": "https://www.srmist.edu.in/faculty/mr-praveen-kumar/",
        "Designation": "Assistant Professor & Head",
        "Specialization": "Journalism and Mass Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Praveen_JMC_Cropp.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "title": "Dr. Archana Arul",
        "url": "https://www.srmist.edu.in/faculty/dr-archana-arul/",
        "Designation": "Assistant Professor (On Deputation)",
        "Specialization": "Journalism and Mass Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Archana-Arul.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "title": "Dr. Naneetha R",
        "url": "https://www.srmist.edu.in/faculty/dr-naneetha-r-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/picture-profile-e1677065956949.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "title": "Dr. Shiva Shankaran K.R",
        "url": "https://www.srmist.edu.in/faculty/k-r-shiva-shankaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Journalism & Mass Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600235-scaled-e1677137779960.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "title": "Dr. MONISHA M",
        "url": "https://www.srmist.edu.in/faculty/dr-monisha-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Development Communication Information Society Gender Studies",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "title": "Dr. Vaishali Raj",
        "url": "https://www.srmist.edu.in/faculty/dr-vaishali-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Prof. (Dr.) P. Sree Sudha",
        "url": "https://www.srmist.edu.in/faculty/prof-p-sree-sudha/",
        "Designation": "Dean, School of Law",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/law-dean.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Ishita  Chatterjee",
        "url": "https://www.srmist.edu.in/faculty/dr-ishita-chatterjee/",
        "Designation": "Professor",
        "Specialization": "Constitutional Law, Law of Torts",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/p3.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Sreelatha",
        "url": "https://www.srmist.edu.in/faculty/dr-sreelatha/",
        "Designation": "Associate Professor",
        "Specialization": "Constitution and Administrative Law, Intellectual Property Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Photo-6.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Keerthana R",
        "url": "https://www.srmist.edu.in/faculty/dr-keerthana-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/keerthana.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Parveen Yadav",
        "url": "https://www.srmist.edu.in/faculty/mr-parveen-yadav/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR, Criminal Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/15-scaled.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Senthivel K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-senthivel/",
        "Designation": "Assistant Professor",
        "Specialization": "Politics and Public Administration",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/WhatsApp-Imagec-2023-06-08-at-9.42.43-AM.jpeg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Sumana Vedanth",
        "url": "https://www.srmist.edu.in/faculty/dr-sumana-vedanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitution and Business Laws",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/My-Photo.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Sundaresh K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-sundaresh/",
        "Designation": "Assistant Professor",
        "Specialization": "FInance and Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/8-e1680685435184.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Vinayagam G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-vinaygam/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching (ELT), Translation and Inter-Cultural Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/2.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Dr. Yoga S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-yoga/",
        "Designation": "Assistant Professor",
        "Specialization": "Economics, Agriculture Economics. Crop Insurance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/1-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Jai Deep D",
        "url": "https://www.srmist.edu.in/faculty/jai-deep-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Alankar Upadhyay",
        "url": "https://www.srmist.edu.in/faculty/mr-alankar-upadhyay/",
        "Designation": "Assistant Professor",
        "Specialization": "Property Law, Intellectual Property Laws, Law of Taxation, International Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Mr.-Alankar-Upadhyay.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Anand Shukla",
        "url": "https://www.srmist.edu.in/faculty/mr-anand-shukla/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG-20240402-WA0000.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Anandha  Kumar",
        "url": "https://www.srmist.edu.in/faculty/mr-anandha-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Business Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Passport-size-pic-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Azhar R Asharaf",
        "url": "https://www.srmist.edu.in/faculty/mr-azhar-r-asharaf/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR and Public Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-14-at-2.12.03-PM.jpeg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Bennet Paul Giftson D",
        "url": "https://www.srmist.edu.in/faculty/mr-d-bennet-paul-giftson/",
        "Designation": "Assistant Professor",
        "Specialization": "International Law and Organizations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/5-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Chidambaram M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-chidambaram/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional law and Human Rights , Administrative law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/7.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Gajendhra A K",
        "url": "https://www.srmist.edu.in/faculty/mr-a-k-gajendhra/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Rights and Duties Education",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/23.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Gyanendra  Kumar",
        "url": "https://www.srmist.edu.in/faculty/mr-gyanendra-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Corporate Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/32.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Jai Ganesh B",
        "url": "https://www.srmist.edu.in/faculty/mr-jai-ganesh-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Jai Ganesh M",
        "url": "https://www.srmist.edu.in/faculty/jai-ganesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional Law and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/jai-pass.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Mahalingam V",
        "url": "https://www.srmist.edu.in/faculty/mr-v-mahalingam/",
        "Designation": "Assistant Professor",
        "Specialization": "Legal and Constitutional History",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mahalingam-Photo.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Mangala Charan Patra",
        "url": "https://www.srmist.edu.in/faculty/mr-mangala-charan-patra/",
        "Designation": "Assistant Professor",
        "Specialization": "Business Law and Family Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/6.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Mohammed Shahzad",
        "url": "https://www.srmist.edu.in/faculty/mohammed-shahzad/",
        "Designation": "Assistant Professor",
        "Specialization": "Alternative Dispute Resolution, Competition Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Mohammed-Shahzad-Photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Muralidhar Barik H",
        "url": "https://www.srmist.edu.in/faculty/mr-muralidhar-barik-h/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Nishanth J",
        "url": "https://www.srmist.edu.in/faculty/nishanth-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Property Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/passport-photo-2.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Partheeswaran P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-partheeswaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Corporate law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/photo_2024-04-02_12-45-08.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Sakthivel K",
        "url": "https://www.srmist.edu.in/faculty/mr-k-sakthivel/",
        "Designation": "Assistant Professor",
        "Specialization": "Property Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/12.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mr. Yokesh M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-yokesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/profile_picture.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Mrs. Bhavani G",
        "url": "https://www.srmist.edu.in/faculty/ms-g-bhavani/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional Law & Legal Order",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Bhavani-Photo.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Aarthi G",
        "url": "https://www.srmist.edu.in/faculty/ms-aarthi-g/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Agnel Benita A",
        "url": "https://www.srmist.edu.in/faculty/ms-agnel-benita-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-8.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Anviti  Mishra",
        "url": "https://www.srmist.edu.in/faculty/ms-anviti-mishra/",
        "Designation": "Assistant Professor",
        "Specialization": "International Trade Law, Election Laws, Maritime Law, Cyber Law, Drafting Pleading",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/17.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Athma Rubavathi M",
        "url": "https://www.srmist.edu.in/faculty/ms-m-athma-rubavathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour Law and Administative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Athma-Ph-2.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Deepika S",
        "url": "https://www.srmist.edu.in/faculty/ms-deepika-s/",
        "Designation": "Assistant Professor",
        "Specialization": "International Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-12.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Dhivya R",
        "url": "https://www.srmist.edu.in/faculty/ms-r-dhivya/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour Law and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG-20230413-WA0002.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Indira A",
        "url": "https://www.srmist.edu.in/faculty/ms-indira-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Sociology and Labour Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/11.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Kalaiarasi B",
        "url": "https://www.srmist.edu.in/faculty/kalaiarasi-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/6369117185.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Kalaivani S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-kalaivani/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240314-WA0048.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Kaushika  MN",
        "url": "https://www.srmist.edu.in/faculty/ms-kaushika-mn/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional law and Human Rights",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.Kaushika-MN.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Lakshmi M P",
        "url": "https://www.srmist.edu.in/faculty/ms-lakshmi-m-p/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240321-WA0021.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Liji Shamilin V S",
        "url": "https://www.srmist.edu.in/faculty/ms-liji-shamilin-v-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/16.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Logapriya P",
        "url": "https://www.srmist.edu.in/faculty/ms-p-logapriya/",
        "Designation": "Assistant Professor",
        "Specialization": "PROPERTY LAW",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG_20210915_215304.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Mariya Joseph",
        "url": "https://www.srmist.edu.in/faculty/ms-mariya-joseph/",
        "Designation": "Assistant Professor",
        "Specialization": "Business Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/LAW-V15.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Mary Jerlin F",
        "url": "https://www.srmist.edu.in/faculty/ms-f-mary-jerlin/",
        "Designation": "Assistant Professor",
        "Specialization": "Criminal Law and Criminal Administration, Women and Children relate Laws",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/jerlin.jpeg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Parvathy K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-parvathy/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/1622811139100_A-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Pooja Saharan",
        "url": "https://www.srmist.edu.in/faculty/ms-pooja-saharan/",
        "Designation": "Assistant Professor",
        "Specialization": "Criminal Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Pooja-Saharan.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Preyadharshne  K N",
        "url": "https://www.srmist.edu.in/faculty/mrs-preyadharshne-k-n/",
        "Designation": "Assistant Professor",
        "Specialization": "LL.M. - TAXATION LAW",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Preyadharshne.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Priyanka T Gopal",
        "url": "https://www.srmist.edu.in/faculty/ms-priyanka-t-gopal/",
        "Designation": "Assistant Professor",
        "Specialization": "Public Law and IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/19.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Pushpam K",
        "url": "https://www.srmist.edu.in/faculty/ms-pushpam-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-9.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Ramadevi J",
        "url": "https://www.srmist.edu.in/faculty/ms-ramadevi-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Economics and Management, General LAW",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Ramadevi.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Tapasi Mohanty",
        "url": "https://www.srmist.edu.in/faculty/ms-tapasi-mohanty/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-7.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Vidya Menon",
        "url": "https://www.srmist.edu.in/faculty/ms-vidya-menon/",
        "Designation": "Assistant Professor",
        "Specialization": "International Trade Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Vidya-photo.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "title": "Ms. Yuva Poornima A",
        "url": "https://www.srmist.edu.in/faculty/ms-yuva-poornima-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-10.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Shivganesh Bhargava",
        "url": "https://www.srmist.edu.in/faculty/dr-shivganesh-bhargava/",
        "Designation": "Dean, Faculty of Management",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/Dr.-Shivganesh-Bhargava.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Senthilkumar S",
        "url": "https://www.srmist.edu.in/faculty/s-senthilkumar/",
        "Designation": "Professor & Program Coordinator (MBA)",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/17.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Santhosh Kumar N",
        "url": "https://www.srmist.edu.in/faculty/n-santhosh-kumar/",
        "Designation": "Associate Professor & Chairperson (E-Learning Technologies & Resources)",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0029_DSC_9381.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Krishnan A.R.",
        "url": "https://www.srmist.edu.in/faculty/dr-a-r-krishnan/",
        "Designation": "Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0020_DSC_9393.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Ramachandran T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-ramachandran/",
        "Designation": "Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0030_DSC_9380.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Shenbagaraman V.M.",
        "url": "https://www.srmist.edu.in/faculty/dr-v-m-shenbagaraman/",
        "Designation": "Professor",
        "Specialization": "Information Systems and Business Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0012_DSC_9403.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Arivazhagan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-arivazhagan/",
        "Designation": "Associate Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0032_DSC_9378.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Arun Kumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-arunkumar/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0027_DSC_9383.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Gajendran A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-gajendran/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/96308.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Manivannan S.K.",
        "url": "https://www.srmist.edu.in/faculty/dr-s-k-manivannan/",
        "Designation": "Associate Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0017_DSC_9396.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Nisha Ashokan",
        "url": "https://www.srmist.edu.in/faculty/dr-nisha-ashokan/",
        "Designation": "Director and Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Nisha-Ashokan-New-a-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Premkumar B",
        "url": "https://www.srmist.edu.in/faculty/dr-premkumar-b/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0052_DSC_9358.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Rajeswari P.S.",
        "url": "https://www.srmist.edu.in/faculty/dr-p-s-rajeswari/",
        "Designation": "Associate Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0028_DSC_9382-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Santhana Lakshmi K",
        "url": "https://www.srmist.edu.in/faculty/k-santhana-lakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0005_DSC_9413.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Saravanan P",
        "url": "https://www.srmist.edu.in/faculty/p-saravanan/",
        "Designation": "Associate Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/DSC_0001-removebg-preview-1.png"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Sujatha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sujatha-2/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0041_DSC_9369.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Vijaykarthigeyan K T",
        "url": "https://www.srmist.edu.in/faculty/dr-k-t-vijaykarthigeyan/",
        "Designation": "Associate Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0013_DSC_9402.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Yaaseen Masvood",
        "url": "https://www.srmist.edu.in/faculty/dr-yaaseen-masvood/",
        "Designation": "Associate Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Masvood-New.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Anitha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-anitha/",
        "Designation": "Assistant Professor (SG)",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0049_DSC_9361.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Aravindaraj K",
        "url": "https://www.srmist.edu.in/faculty/aravindaraj-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Profile_Photos_SRM.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. ARUL PRAKASH A",
        "url": "https://www.srmist.edu.in/faculty/mr-a-arulprakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0035_DSC_9375.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Arunfred N",
        "url": "https://www.srmist.edu.in/faculty/dr-arunfred/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/photo-my-white-background.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Balaji K.D",
        "url": "https://www.srmist.edu.in/faculty/dr-k-d-balaji/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0007_DSC_9411.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Baskar B",
        "url": "https://www.srmist.edu.in/faculty/dr-baskar-b/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/24.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Bharathi R",
        "url": "https://www.srmist.edu.in/faculty/bharathi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/04.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Bhuvana M",
        "url": "https://www.srmist.edu.in/faculty/bhuvana-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/01-2.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Celina A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-celina/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG20230308153529.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Dhivya Devi S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-dhivya-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "STATISTICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/21-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Dinesh J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-dinesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0002_DSC_9417.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Franklin M",
        "url": "https://www.srmist.edu.in/faculty/franklin-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/IMG-20220313-WA0003.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Ganaga Durga devi R",
        "url": "https://www.srmist.edu.in/faculty/dr-ganaga-durga-devi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "HR(CDC)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/13.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Ganeshkumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-ganeshkumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing(Digital)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/19.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Ilankadhir M",
        "url": "https://www.srmist.edu.in/faculty/dr-ilankadhir/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0039_DSC_9371.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Jagan Babu K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-jagan-babu/",
        "Designation": "Assistant Professor",
        "Specialization": "General Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0036_DSC_9374.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Jahira Parveen S",
        "url": "https://www.srmist.edu.in/faculty/s-jahira-parveen/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0006_DSC_9412.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Jain Jacob M",
        "url": "https://www.srmist.edu.in/faculty/dr-jain-jacob-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/09.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Jayanthi L",
        "url": "https://www.srmist.edu.in/faculty/l-jayanthi/",
        "Designation": "Assistant Professor & Program Coordinator (BBA)",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0050_DSC_9360.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Kanmani G R",
        "url": "https://www.srmist.edu.in/faculty/dr-kanmani-g-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Statistics and Operations Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/12.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Karthik Sridar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-karthik-sridar/",
        "Designation": "Assistant Professor (SG)",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/photo-profile-karthik-scaled.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Kavitha K",
        "url": "https://www.srmist.edu.in/faculty/ms-k-kavitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0022_DSC_9391-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Kesavan D",
        "url": "https://www.srmist.edu.in/faculty/kesavan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/kesav-removebg-preview.png"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Kumar G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/PHOTO-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Lakshmi G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-lakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/DSC_9366-scaled.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Lokesh S",
        "url": "https://www.srmist.edu.in/faculty/dr-lokesh-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/WhatsApp-Image-2022-03-17-at-11.04.34-AM-Copy-1.png"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Madhanrajan Udayanan",
        "url": "https://www.srmist.edu.in/faculty/madhanrajan-u/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/DrMadhanrajan.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Madhumithaa N",
        "url": "https://www.srmist.edu.in/faculty/dr-madhumithaa-n/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/23.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Maheswari K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-maheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0042_DSC_9368.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Maheswari P",
        "url": "https://www.srmist.edu.in/faculty/dr-maheswari-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing(Digital)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/18.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Manikandan M",
        "url": "https://www.srmist.edu.in/faculty/dr-manikandan-m-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/11.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Maya G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-maya/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0026_DSC_9384.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Megavannan R",
        "url": "https://www.srmist.edu.in/faculty/r-megavannan/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/IMG-20230315-WA0015-removebg-preview_2-removebg-preview-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Mohana Sundari V",
        "url": "https://www.srmist.edu.in/faculty/dr-mohana-sundari-v/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/22.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Murugan M",
        "url": "https://www.srmist.edu.in/faculty/murugan-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/02-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Naga Lakshmi M V N",
        "url": "https://www.srmist.edu.in/faculty/naga-lakshmi-m-v-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/profile-pic-2.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Nazim Sha S",
        "url": "https://www.srmist.edu.in/faculty/dr-nazim-sha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0004_DSC_9414.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Noble Kennedy E",
        "url": "https://www.srmist.edu.in/faculty/mr-e-nobel-kennedy/",
        "Designation": "Assistant Professor",
        "Specialization": "Supply Chain Management and Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0034_DSC_9376.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Pavithra J",
        "url": "https://www.srmist.edu.in/faculty/dr-pavithra-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/05.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Poonguzhali  P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-poonguzhali/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0003_DSC_9415.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Prabu G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-prabu/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/21.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Prem Chand Bhargaw R",
        "url": "https://www.srmist.edu.in/faculty/mr-prem-chand-bhargaw/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Prem-Chand-Bhargaw.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Priya  K",
        "url": "https://www.srmist.edu.in/faculty/ms-priya-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/profile-1_0008_DSC_9409.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Priya S",
        "url": "https://www.srmist.edu.in/faculty/s-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0019_DSC_9394.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Priya Xavier",
        "url": "https://www.srmist.edu.in/faculty/dr-priya-xavier/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0040_DSC_9370-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Rajalakshmi J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-rajalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0048_DSC_9362.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Ramkumar. A",
        "url": "https://www.srmist.edu.in/faculty/dr-ramkumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "HR(CDC)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Dr.Ramkumar-updated-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Revathy S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-revathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/07.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Saillaja V",
        "url": "https://www.srmist.edu.in/faculty/saillaja-v/",
        "Designation": "Assistant Professor",
        "Specialization": "HR(CDC)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/10.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Saithu Mohammed",
        "url": "https://www.srmist.edu.in/faculty/saithu-mohammed/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/20.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Sakthi Prasath G.B",
        "url": "https://www.srmist.edu.in/faculty/mr-sakthi-prasath-gb/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Sakthi-Prasath-G-B.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Sankara Moorthy K",
        "url": "https://www.srmist.edu.in/faculty/k-sankara-moorthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0023_DSC_9389.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Senthilnathan C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-senthilnathan/",
        "Designation": "Assistant Professor -Senior Grade",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0053_DSC_9356.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Shanmuga Priya A R",
        "url": "https://www.srmist.edu.in/faculty/shanmuga-priya-a-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0016_DSC_9397.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Shyamala Devi B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-shyamala-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/16.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Srilalitha R",
        "url": "https://www.srmist.edu.in/faculty/dr-srilalitha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Srilalitha.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Srinivasan M",
        "url": "https://www.srmist.edu.in/faculty/m-srinivasan/",
        "Designation": "Assistant Professor",
        "Specialization": "General Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0037_DSC_9373.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Sriram M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-sriram/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0031_DSC_9379.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Subathra K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-subathra/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/17000067-2.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Sudha L",
        "url": "https://www.srmist.edu.in/faculty/sudha-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/15.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Suganya A",
        "url": "https://www.srmist.edu.in/faculty/mrs-a-suganya/",
        "Designation": "Assistant Professor (O.G)",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0025_DSC_9387.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Suresh V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-suresh/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0045_DSC_9365.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Thilagavathy S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-thilagavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0043_DSC_9367.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Thirumaleswari T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-thirumaleswari/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/03.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Velmurugan T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-velmurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0011_DSC_9404.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Vijay Raja R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-vijay-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0033_DSC_9377.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Dr. Vinitha K",
        "url": "https://www.srmist.edu.in/faculty/dr-vinitha-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0047_DSC_9363.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Mr. Anand M",
        "url": "https://www.srmist.edu.in/faculty/m-anand-2/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Anand_Passport-size-7.2cm-x-8.5cm.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "title": "Mr. Rajasekar S",
        "url": "https://www.srmist.edu.in/faculty/rajasekar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "SOFT SKILLS TRAINER",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0038_DSC_9372.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Ritesh Kumar Dubey",
        "url": "https://www.srmist.edu.in/faculty/dr-ritesh-kumar-dubey/",
        "Designation": "Research Associate Professor  & Head",
        "Specialization": "Numerical analysis and PDEs,  Deep Learning and Scientific computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5320.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Ganesan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-ganesan/",
        "Designation": "Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/kg-photo.png"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Parvathi N",
        "url": "https://www.srmist.edu.in/faculty/dr-parvathi-n/",
        "Designation": "Professor",
        "Specialization": "Pure Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5339.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Balaji N",
        "url": "https://www.srmist.edu.in/faculty/dr-balaji-n/",
        "Designation": "Associate Professor",
        "Specialization": "Optimization techniques, Multicriteria decision Models",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5249.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Bapuji Pullepu",
        "url": "https://www.srmist.edu.in/faculty/dr-bapuji-pullepu/",
        "Designation": "Associate Professor",
        "Specialization": "Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/DSC_0349.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Harekrushna Behera",
        "url": "https://www.srmist.edu.in/faculty/dr-harekrushna-behera/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Harekrushna-Behera.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sambath P",
        "url": "https://www.srmist.edu.in/faculty/dr-sampath-p/",
        "Designation": "Associate Professor",
        "Specialization": "Mathematics/ Applied Mathematics/ Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5252.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Senthamarai R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-senthamarai/",
        "Designation": "Associate Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5292.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Shobana L",
        "url": "https://www.srmist.edu.in/faculty/dr-l-shobana/",
        "Designation": "Associate Professor",
        "Specialization": "Graph Labeling, Automata and Formal Languages, Number Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5323.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Siva E.P",
        "url": "https://www.srmist.edu.in/faculty/dr-siva-e-p/",
        "Designation": "Associate Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5259.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Subburayan V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-subburayan/",
        "Designation": "Associate Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5240.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Vennila B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-vennila/",
        "Designation": "Associate Professor",
        "Specialization": "Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/WP_20130725_003-215x300-1.jpeg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Abhishek Banerjee",
        "url": "https://www.srmist.edu.in/faculty/dr-abhishek-banerjee/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5361.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Abirami C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-abirami/",
        "Designation": "Assistant Professor",
        "Specialization": "Geometric Function Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5266.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Akash Singh",
        "url": "https://www.srmist.edu.in/faculty/dr-akash-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5270.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Animesh Roy",
        "url": "https://www.srmist.edu.in/faculty/dr-animesh-roy/",
        "Designation": "Assistant Professor",
        "Specialization": "Dynamical system, Chaos, Cryptography, Deep Learning, Federated learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5287.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Anuradha A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-anuradha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5362.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Arul Joseph G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-arul-joseph/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5342.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Arulprakasam R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-arulprakasam/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5244.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Athithan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-athithan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5262.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Balaganesan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-balaganesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5354.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Bibekananda Bira",
        "url": "https://www.srmist.edu.in/faculty/dr-bibekananda-bira/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5340.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Bikash Koli Dey",
        "url": "https://www.srmist.edu.in/faculty/dr-bikash-koli-dey/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Optimization; Inventory control; Operations Research; Production Planning; Smart manufacturing; Supply Chain Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/bikash.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Celine Prabha S",
        "url": "https://www.srmist.edu.in/faculty/dr-celine-prabha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Graph Theory, Algebraic Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5275.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Debabrata Singh",
        "url": "https://www.srmist.edu.in/faculty/dr-debabrata-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "Numerical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Debabrata.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Deeksha Singh",
        "url": "https://www.srmist.edu.in/faculty/dr-deeksha-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Deeksha.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Dhanalakshmi K",
        "url": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5269.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Dhanalakshmi. R",
        "url": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5291.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Gajendran G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-gajendran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5246.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Ganesamurthy S",
        "url": "https://www.srmist.edu.in/faculty/dr-ganesamurthy-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Dr-S-Ganesamurthy-3-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Godhandaraman P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-godhandaraman/",
        "Designation": "Assistant Professor",
        "Specialization": "Stochastic Processes, Operations Research, Applied Probability, Queueing Theory, Machine Learning, Reliability Engineering, Computer Network, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5335.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Kalaiyarasi R",
        "url": "https://www.srmist.edu.in/faculty/mrs-kalaiyarasi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-8.10.40-PM.jpeg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Kamalakkannan R",
        "url": "https://www.srmist.edu.in/faculty/dr-kamalakkannan-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Integral Transforms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5316.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Kannan R.M",
        "url": "https://www.srmist.edu.in/faculty/dr-r-m-kannan/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Mathematics, Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. R.M.Kannan.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Karthick B",
        "url": "https://www.srmist.edu.in/faculty/dr-karthick-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Photo-Karthick.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Karthick S",
        "url": "https://www.srmist.edu.in/faculty/dr-karthick-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5332.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Karthick. S. A",
        "url": "https://www.srmist.edu.in/faculty/dr-karthick-s-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Control Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Karthick.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Karthik C",
        "url": "https://www.srmist.edu.in/faculty/dr-karthick-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Time Delay Sytems, Stability Analysis and Control Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5299.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Kousalya M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-kousalya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5306.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Krishna Kumari R",
        "url": "https://www.srmist.edu.in/faculty/dr-krishna-kumari-r/",
        "Designation": "Assistant professor",
        "Specialization": "Formal Languages and Automata Theory, GBML",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/krishna-photo.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Krishnaveni G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-krishnaveni/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5326.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Krishnodas Goswami",
        "url": "https://www.srmist.edu.in/faculty/dr-krishnodas-goswami/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5302.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Lavanya G",
        "url": "https://www.srmist.edu.in/faculty/g-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5294.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Leelavathy T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-leelavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics, Fuzzy Optimization and Multi Objective Optimization.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5313.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Mahendran R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-mahendran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5247.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Meena Parvathy Sankar",
        "url": "https://www.srmist.edu.in/faculty/meena-parvathy-sankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5277.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Melita Vinoliah",
        "url": "https://www.srmist.edu.in/faculty/dr-melita-vinoliah/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5325.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Merlyn Margaret H",
        "url": "https://www.srmist.edu.in/faculty/merlyn-margaret-h/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5251.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Mohanaselvi S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-mohanaselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "Fuzzy optimization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5364.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Muthukumaran V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-muthukumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Algebraic Cryptography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5309.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Nandakumar E",
        "url": "https://www.srmist.edu.in/faculty/e-nandakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/nanda-photo.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Nirmala T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-nirmala/",
        "Designation": "Assistant Professor",
        "Specialization": "Interval Optimization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5324.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Padma V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-padma/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5258.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Perumal R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-perumal/",
        "Designation": "Assistant Professor",
        "Specialization": "Algebra",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5347.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Poongothai V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-poongothai/",
        "Designation": "Assistant Professor",
        "Specialization": "Stochastic Processes, Applied Probability, Operations Research, Queueing Theory, Theoretical Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5317.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Prabakaran K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-prabakaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5285.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Prakash D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_0003-copy-5.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Prakash Kar",
        "url": "https://www.srmist.edu.in/faculty/dr-prakash-kar/",
        "Designation": "Assistant Professor",
        "Specialization": "Water waves, Fluid structures interactions",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/visa_photo_prakash.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Pratyush Kumar",
        "url": "https://www.srmist.edu.in/faculty/dr-pratyush-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5281.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Priyajit Mondal",
        "url": "https://www.srmist.edu.in/faculty/dr-priyajit-mondal/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5301.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Provanjan Mallick",
        "url": "https://www.srmist.edu.in/faculty/provanjan-mallick/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5273.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Raja V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "Numerical Methods",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5253.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Ramesh G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5256.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sabarinathan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sabarinathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. S. Sabarinathan.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sahadeb Kuila",
        "url": "https://www.srmist.edu.in/faculty/dr-sahadeb-kuila/",
        "Designation": "Assistant Professor",
        "Specialization": "Partial Differential Equations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/20210525_0955252-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sandip Maji",
        "url": "https://www.srmist.edu.in/faculty/dr-sandip-maji/",
        "Designation": "Assistant Professor",
        "Specialization": "Numerical Solutions of Fractional Differential Equations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Sandip-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sangeetha S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sangeetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Non-Archimedean Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5268.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Santosh Kumar",
        "url": "https://www.srmist.edu.in/faculty/dr-santosh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5283.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Saraswathi A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-saraswathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5289.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Saravanakumar T",
        "url": "https://www.srmist.edu.in/faculty/dr-saravanakumar-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Stabilization of dynamical control systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/saravana-.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sasi Kumar J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-sasi-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/JS-PHOTO.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sathishkumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-sathishkumar-m/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Systems and Control Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/sathish.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Senthilkumar L.S",
        "url": "https://www.srmist.edu.in/faculty/l-s-senthilkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Finite Element Method, Finite Difference Method, Fuzzy Algebraic Equation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/resize-16395919231449480155DSC0650copy.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Shafiya M",
        "url": "https://www.srmist.edu.in/faculty/dr-shafiya-m/",
        "Designation": "Assistant professor",
        "Specialization": "Dynamical Analysis of Fractional-order Neural Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5315.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sheeja G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-sheeja/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5296.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sheena Christy D.K",
        "url": "https://www.srmist.edu.in/faculty/d-k-sheena-christy/",
        "Designation": "Assistant Professor(Sr.G)",
        "Specialization": "Mathematics , Formal Language and Automata theory, Graph theory, Graph Grammar",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/sheena-photo-2.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sivakumar Narsu",
        "url": "https://www.srmist.edu.in/faculty/dr-narsu-sivakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5284.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sourav Mondal",
        "url": "https://www.srmist.edu.in/faculty/dr-sourav-mondal/",
        "Designation": "Assistant Professor",
        "Specialization": "Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/sourav-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sriraman R",
        "url": "https://www.srmist.edu.in/faculty/dr-sriraman-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Stability Analysis of  Neural Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5360.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Subrata Maiti",
        "url": "https://www.srmist.edu.in/faculty/dr-subrata-maiti/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio-Fluid Dynamics, Heat Transfer, Modelling and Simulation.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5280.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sudha B",
        "url": "https://www.srmist.edu.in/faculty/b-sudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5343.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sudha G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-sudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5345.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Suja K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-suja/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5264.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sujatha E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-sujatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5286.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sumana Ghosh",
        "url": "https://www.srmist.edu.in/faculty/dr-sumana-ghosh/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Mathematical Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5357.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Suresh  M",
        "url": "https://www.srmist.edu.in/faculty/m-suresh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5346.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Suresh E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-suresh/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5321.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Sushobhan Maity",
        "url": "https://www.srmist.edu.in/faculty/dr-sushobhan-maity/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5274.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Suvitha V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-suvitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Stochastic Processes (Queueing Theory)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/8883167430.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Swaraj Paul",
        "url": "https://www.srmist.edu.in/faculty/dr-swaraj-paul/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Wavelets, Shearlets, Microlocal Analysis, Integral equations, Differential equations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5336.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Swarup Barik",
        "url": "https://www.srmist.edu.in/faculty/dr-swarup-barik/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Mechanics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/pic_swarup2.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Tamizhazhagan S",
        "url": "https://www.srmist.edu.in/faculty/dr-tamizhazhagan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Statistical Mechanics & Mathematical Modelling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Tamizhazhagan.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Tanmoy Chakraborty",
        "url": "https://www.srmist.edu.in/faculty/dr-tanmoy-chakraborty/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5276.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Tapas Barman",
        "url": "https://www.srmist.edu.in/faculty/dr-tapas-barman/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5242.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Thamilvanan S.K.",
        "url": "https://www.srmist.edu.in/faculty/dr-s-k-tamilvanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5241.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Thenmozhi S",
        "url": "https://www.srmist.edu.in/faculty/dr-thenmozhi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Fixed Point Theory and Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5307.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Uma J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-uma/",
        "Designation": "Assistant Professor",
        "Specialization": "Non-Archimedean analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5355.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Uma Maheswari P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-uma-maheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5330.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Varadharajan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-varadharajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5245.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Venkatesan R",
        "url": "https://www.srmist.edu.in/faculty/r-venkatesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5353.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Vidhya V",
        "url": "https://www.srmist.edu.in/faculty/dr-vidhya-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5255.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Vidyanandini S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-vidyanandini/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5278.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Vignesh P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-vignesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Algebraic Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5331.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Vijayakumar B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-vijaya-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics/Applied Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/9444904228-KB-Copy-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Vijayalakshmi G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Stochastic Processes",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5279.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Vijayalakshmi T",
        "url": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5298.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Mr. Sudhagar A",
        "url": "https://www.srmist.edu.in/faculty/sudhagar-a/",
        "Designation": "Teaching Assistant",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5267-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "title": "Mrs. Jeya Indira R",
        "url": "https://www.srmist.edu.in/faculty/mrs-jeya-indira-r/",
        "Designation": "Teaching Assistant",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5365.jpg"
    },
    {
        "DepartmentCode": 146423,
        "DepartmentName": "Department of Mathematics",
        "title": "Dr. Selvasundaram K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-selvasundaram/",
        "Designation": "Professor and Head",
        "Specialization": "All Accounting and Finance Papers",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/salva-scaled-e1677910592663.jpg"
    },
    {
        "DepartmentCode": 146423,
        "DepartmentName": "Department of Mathematics",
        "title": "Ms. Sivakavitha S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-sivakavitha/",
        "Designation": "Assistant Professor",
        "Specialization": "CS & AF",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Lakshmi Priya S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-lakshmi-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/edit-LP-photo-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Aniji M",
        "url": "https://www.srmist.edu.in/faculty/dr-aniji-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5130-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Kalaivani M",
        "url": "https://www.srmist.edu.in/faculty/m-kalaivani/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Photo_MK-new-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Kavitha R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-kavitha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/RK_Profile-Photo-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Madhumitha J",
        "url": "https://www.srmist.edu.in/faculty/j-madhumitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600161-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Parvathi S",
        "url": "https://www.srmist.edu.in/faculty/dr-parvathi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Advanced Algebra",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/IMG_5423-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Poongodisathiya S",
        "url": "https://www.srmist.edu.in/faculty/dr-poongodisathiya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations Research in Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/Poongodisathiya.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Saravanakumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-saravanakumar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/saravanan.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Sivakami L",
        "url": "https://www.srmist.edu.in/faculty/dr-l-sivakami/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/PHOTOFEB-23-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "title": "Dr. Venmani A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-venmani/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600420-scaled.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Gopal T V",
        "url": "https://www.srmist.edu.in/faculty/professor-t-v-gopal/",
        "Designation": "Dean, Faculty of Engineering and Technology",
        "Specialization": "Computer Aided Assembly Planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Dr.-GOPAL-T-V-2.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Kingsly Jeba Singh D",
        "url": "https://www.srmist.edu.in/faculty/professor-d-kingsly-jeba-singh-ph-d/",
        "Designation": "Dean, Mechanical Engineering",
        "Specialization": "Industry 4.0, Artificial Intelligence, Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DKJS-PP-75-kb-compressed-for-Biometric.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Suresh Kumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-suresh-kumar/",
        "Designation": "Professor  & Head",
        "Specialization": "Mechanical Engineering, Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-79.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Chandrasekaran P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-chandrasekaran/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-20.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Cheralathan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-cheralathan/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/Untitled-1.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Duraivelu K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-duraivelu/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering (Industrial Engineering)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-86.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Karthik Lakshmanan",
        "url": "https://www.srmist.edu.in/faculty/dr-karthik-lakshmanan/",
        "Designation": "Visiting Professor",
        "Specialization": "Electronics cooling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-29-at-06.40.07.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Lakshmanan T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-lakshmanan/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/WhatsApp-Image-2023-04-06-at-9.15.29-PM.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Mohammed Iqbal U",
        "url": "https://www.srmist.edu.in/faculty/dr-u-mohammed-iqbal/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering (Manufacturing)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-4.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Nandakumar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-nandakumar/",
        "Designation": "Professor",
        "Specialization": "Advanced Mechanism Design, Mechanical vibrations, Finite Element Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-29.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Prabhakar Subrahmanyam",
        "url": "https://www.srmist.edu.in/faculty/dr-prabhakar-subrahmanyam/",
        "Designation": "Visiting Professor",
        "Specialization": "Electronics cooling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prabhakar.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Prabhu S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-prabhu/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-15.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Rajasekaran T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-rajasekaran/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-55.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Stalin John M R",
        "url": "https://www.srmist.edu.in/faculty/dr-m-r-stalin-john/",
        "Designation": "Professor",
        "Specialization": "Manufacturing, Robotics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-41.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Arul Jeya Kumar A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-arul-jeya-kumar-2/",
        "Designation": "Professor",
        "Specialization": "Manufacturing technology, material science, Industrial engineering, Industry 4.0",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-65.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Balaji G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-balaji/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Engineering, IC Engines",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-32.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Infanta Mary Priya I",
        "url": "https://www.srmist.edu.in/faculty/dr-i-infanta-mary-priya/",
        "Designation": "Associate Professor",
        "Specialization": "Advanced Composite Materials, Nanocomposites, Tribology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-52.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Jeyakarthikeyan P V",
        "url": "https://www.srmist.edu.in/faculty/dr-p-v-jeyakarthikeyan/",
        "Designation": "Associate Professor",
        "Specialization": "Numerical Integration on finite element methods, computational mechanics and Functionally graded materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-35.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Kamaraj M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-kamaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Design Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/M-Kamaraj.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Karuppudaiyan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-karuppudaiyan/",
        "Designation": "Associate Professor",
        "Specialization": "Bio-Mechanics, Mechanical characterization of cortical bone, and Engineered tissue scaffold structures using 3D Printer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-3.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Kasiraman G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-kasiraman/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Engineering  Mail kasiramg1@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-26.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Magesh V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-magesh-2/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Aided Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/MAGESH.V_Photo.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Murali S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-murali/",
        "Designation": "Associate Professor",
        "Specialization": "Human Factors and Ergonomics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Murali-SRM-Profile-LightYellowBG.png"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Prakash M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-prakash-3/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-66.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Santhana Krishnan R",
        "url": "https://www.srmist.edu.in/faculty/santhana-krishnan-r/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Design, Mechanics of Solids, Engineering Mechanics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-89.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Selvam C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-selvam/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Engineering, Refrigeration and Air-Conditioning, Heat and Mass Transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/932-Selvam-a.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Senthil R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-senthil/",
        "Designation": "Professor",
        "Specialization": "Thermal Engineering : Solar Energy -Thermal Energy Storage - Building Thermal Comfort",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-14.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sumit Pramanik",
        "url": "https://www.srmist.edu.in/faculty/dr-sumit-pramanik/",
        "Designation": "Research Associate Professor",
        "Specialization": "Materials & Manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-45.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Vijaya A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-vijaya/",
        "Designation": "Associate Professor",
        "Specialization": "Experimental Mechanics, Metrology, Vision system, Computer Aided manufacturing , Nano finsihing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-61.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Aatthisugan I",
        "url": "https://www.srmist.edu.in/faculty/mr-i-aatthisugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-18.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Abburi Lakshman Kumar",
        "url": "https://www.srmist.edu.in/faculty/mr-abburi-lakshman-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_4647-copy.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Ambigai R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-ambigai/",
        "Designation": "Associate Professor",
        "Specialization": "Functionally Graded Composites, Metal Matrix Composite, Tribology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-60.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Arun N",
        "url": "https://www.srmist.edu.in/faculty/mr-n-arun/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/9789233486.....jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Balakrishnan P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-balakrishnan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Gas Dynamics, Fluid Mechanics, Thermodynamics, Propulsion, Rocket Technology, Solar Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-27.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Daniel Glad Stephen J",
        "url": "https://www.srmist.edu.in/faculty/mr-j-daniel-glad-stephen/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-57.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Deborah Serenade Stephen",
        "url": "https://www.srmist.edu.in/faculty/ms-deborah-serenade-stephen/",
        "Designation": "Assistant Professor",
        "Specialization": "Grinding / Manufacturing Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dss.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. GaneshKumar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-ganesh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/Untitled.png"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Gunasekaran M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-gunasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Mechanics, Applied Aerodynamics, Applied Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/04-2-2.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Harshavardhana N.",
        "url": "https://www.srmist.edu.in/faculty/dr-n-harshavardhana/",
        "Designation": "Associate Professor",
        "Specialization": "Manufacturing engineering and material science.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Mech-Photos-901.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Joji Johnson",
        "url": "https://www.srmist.edu.in/faculty/mr-joji-johnson/",
        "Designation": "Assistant Professor",
        "Specialization": "Solar Energy / Thermal Engineering  / Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-photo-2.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Kumaran D",
        "url": "https://www.srmist.edu.in/faculty/d-kumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Product Design and Development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-21.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Manikanda Raja G",
        "url": "https://www.srmist.edu.in/faculty/mr-g-manikanda-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "(Thermal Engineering, Alternate Fuels, Heat Exchangers, Refrigeration, Waste Heat Recovery Systems)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/5H0A3678-1.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Manikandan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-manikandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Renewable Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-25.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Mathan Raj V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-mathan-raj/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-68.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Muralidharan S",
        "url": "https://www.srmist.edu.in/faculty/mr-muralidharan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Metal forming, Non-traditional machining, Fluid power control, operation research, Metrology and quality control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-7.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Murugesan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-murugesan/",
        "Designation": "Associate Professor",
        "Specialization": "Manufacturing Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Murugesan_photo_convocation-1.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Nagaraj C M",
        "url": "https://www.srmist.edu.in/faculty/dr-nagaraj-c-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Processes & Metallurgy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/My-Photo_Profess.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Oliver Nesa Raj S",
        "url": "https://www.srmist.edu.in/faculty/s-oliver-nesa-raj/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "Manufacturing Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-40.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Pankaj Kumar",
        "url": "https://www.srmist.edu.in/faculty/dr-pankaj-kumar-2/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Cavitation, Boiling, Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-24.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Praveena V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-praveena/",
        "Designation": "Associate Professor",
        "Specialization": "IC Engines, Applied thermal engineering, Heat and mass transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-6.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Premkumar N",
        "url": "https://www.srmist.edu.in/faculty/dr-premkumar-n/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-48.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Premnath D",
        "url": "https://www.srmist.edu.in/faculty/d-premnath/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-16.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Raghavendra Rao V",
        "url": "https://www.srmist.edu.in/faculty/v-raghavendra-rao/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-19.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Raja D",
        "url": "https://www.srmist.edu.in/faculty/mr-d-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "Design, Mechanics and Biomechanics and Biomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-44.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Rajasekar V",
        "url": "https://www.srmist.edu.in/faculty/v-rajasekar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-36.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. S. Malarmannan",
        "url": "https://www.srmist.edu.in/faculty/s-malarmannan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical / Thermal Power Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Malarmannan.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sandipan Roy",
        "url": "https://www.srmist.edu.in/faculty/dr-sandipan-roy/",
        "Designation": "Research Assistant Professor",
        "Specialization": "•Orthopedic Biomechanics •Dental Biomechanics •Dental Biomaterials •Bio composite •Mechanobiology of bone •Solid Mechanics •In-Silico Modeling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Pic.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Santhakumar J",
        "url": "https://www.srmist.edu.in/faculty/mr-j-santha-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "CAD/CAM",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/santhakumar-1.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Santhosh Kumar Singh",
        "url": "https://www.srmist.edu.in/faculty/dr-santhosh-kumar-singh/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Thermal Engineering (Fluid Mechanics)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-38.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Saravanakumar R",
        "url": "https://www.srmist.edu.in/faculty/r-saravanakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Conventional welding and Solid state Welding process",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-01-at-11.10.17-AM.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sasikumar S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-sasikumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Casting, Physical Metallurgy, Additive Manufacturing-3D Printing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mech-Photos-81.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sathishkumar A",
        "url": "https://www.srmist.edu.in/faculty/mr-sathishkumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Cool Thermal Energy Storage Systems, Building Cooling applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/A.-Sathishkumar.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Selwyn Jebadurai D",
        "url": "https://www.srmist.edu.in/faculty/d-selwyn-jebadurai/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering - Manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-8.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Senthil Kumar R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-senthil-kumar-2/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/senthilkumar.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Shravan Kumar C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-shravan-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-95.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Siva Krishna Reddy D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-siva-krishna-reddy/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-75.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sivashankar M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-sivashankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Solar energy systems, Internal Combustion engines, Heat transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/PA1913002012005-Sivashakar-M.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sudhakar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-sudhakar/",
        "Designation": "Associate Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_8946-scaled-e1678960205747.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sundar Singh Sivam Sundarlingam Paramasivam",
        "url": "https://www.srmist.edu.in/faculty/sundar-singh-sivam-s-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization, MCDA, Machine learning, Manufacturing process, Metal Forming, Metal Cutting",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-46.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Sundaram P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-sundaram/",
        "Designation": "Assistant Professor",
        "Specialization": "Solar Energy Conversion Technologies, Thermal Energy Storage and Nanofluid phase change materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_9003.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Susai Manickam P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-susai-manickam/",
        "Designation": "Assistant Professor",
        "Specialization": "BioMechanics, Finite element analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-84.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Thavamani J",
        "url": "https://www.srmist.edu.in/faculty/mr-j-thavamani/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering, Fluid Mechanics & Refrigeration and Air conditioning, CFD Two phase flow analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-97.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Thirunavukkarasu V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-thirunavukkarasu/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-49.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Umasekar V G",
        "url": "https://www.srmist.edu.in/faculty/v-g-umasekar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical (Manufacturing Engineering)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-53.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Vamsi Krishna Dommeti",
        "url": "https://www.srmist.edu.in/faculty/mr-vamsi-krishna-dommeti/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-70.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Vignesh K S",
        "url": "https://www.srmist.edu.in/faculty/dr-k-s-vignesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/WhatsApp-Image-2023-03-30-at-9.25.44-AM.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Vijayaragavan E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-vijayaragavan/",
        "Designation": "Associate Professor",
        "Specialization": "Biomechanics, New Product Development, Process Excellence, Rehabilitation Engineering, Electric / Autonomous Vehicles",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/EVR.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Dr. Vinoth A",
        "url": "https://www.srmist.edu.in/faculty/vinoth-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Design / Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-93.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Arokya Agustin S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-arokya-agustin/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-12.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Arul Kumar S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-arul-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-22.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Arun Prasad K R",
        "url": "https://www.srmist.edu.in/faculty/mr-kr-arun-prasad/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-11.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Arun Prasath S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-arun-prasath/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Aided Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-87.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Arun Raj A C",
        "url": "https://www.srmist.edu.in/faculty/mr-a-c-arun-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "Advanced Materials Technology, Micromachining, Advanced Manufacturing Processes, Design of Experiments, Optimization Techniques, etc.  Mail arunrajc@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-103.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Balamurugan S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-balamurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio mechanics, Thermal spray coating, Robotics and FEM.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-9.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Barathraj R K",
        "url": "https://www.srmist.edu.in/faculty/mr-barathraj-r-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal and Fluid Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Barath_Latest_Passport_pic_crop.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Dhanasekaran M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-dhanasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Science, Powder metallurgy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-101.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Harris Samuel R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-harris-samuel/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engg design, Mechanics of solids",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-85.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Jegadeesan  K",
        "url": "https://www.srmist.edu.in/faculty/mr-jegadeesan-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-03-28-at-9.11.48-AM-e1680890931895.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Karthikeyan N",
        "url": "https://www.srmist.edu.in/faculty/mr-n-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Elements of Mechatronics, Metrology and Quality Control, Manufacturing Technology, Additive Manufacturing, Computer Aided Manufacturing and Industry 4.0",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-39.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Kathir Kaman M D",
        "url": "https://www.srmist.edu.in/faculty/m-d-kathir-kaman/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/KATHIR.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Kolli Balasivarama Reddy S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-kolli-balasivarama-reddy/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-58.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Manoj Kumar V",
        "url": "https://www.srmist.edu.in/faculty/mr-v-manoj-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Robotics, Microcontroller,IoT, Industrial Automation, Artificial Intelligence , Neural Networks, Machine Learning, Optimization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-96.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Manoj Samson R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-manoj-samson/",
        "Designation": "Assistant Professor",
        "Specialization": "Advanced Machining and Welding Processes, Robotics and Advanced Characterization Techniques",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/Manoj-Samson-R-75kb.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Muthu E",
        "url": "https://www.srmist.edu.in/faculty/e-muthu/",
        "Designation": "Assistant Professor",
        "Specialization": "Basic Mechanical Engineering, Engineering Mechanics; Mechanics of Solids; Machines & Mechanism; Mechanical Engineering Design; Fundamentals of Vibration and Noise, Design of Transmission Systems  Mail muthue@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/emuthu.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Panneerselvam S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-panneerselvam/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-51.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Ponsankar S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-ponsankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Refrigeration, Psychrometry, Fluid dynamics, CFD",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_20230316_114940-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Sachidhanandam M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-sachidhanandam/",
        "Designation": "Assistant Professor",
        "Specialization": "CAD, ROBOTICS, DESIGN OF MECHANICAL SYSTEMS, WELDING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-64.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Sampath Kumar S",
        "url": "https://www.srmist.edu.in/faculty/s-sampath-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Technology,Unconventional Machining processes,Materials Technology,Metrology and Quality Control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-37.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Sathiyamoorthy K",
        "url": "https://www.srmist.edu.in/faculty/mr-k-sathiyamoorthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Renewable Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-31.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Senkathir S",
        "url": "https://www.srmist.edu.in/faculty/senkathir-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Welding, Metallurgy, Operational research  Mail senkaths@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-99.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Sodisetty V N B Prasad",
        "url": "https://www.srmist.edu.in/faculty/mr-v-n-b-prasad-sodisetty/",
        "Designation": "Assistant Professor",
        "Specialization": "Design Engineering  Mail prasadsm@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prasad-Sodisetty.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Subramanian C",
        "url": "https://www.srmist.edu.in/faculty/c-subramanian/",
        "Designation": "Assistant Professor",
        "Specialization": "Composite Materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-33.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Sundar S",
        "url": "https://www.srmist.edu.in/faculty/s-sundar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical EngineeringSoftware Interfacing, Fabrication of Mechanical product and Assembly of Mechanical product using software.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-30.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Thirugnanam A",
        "url": "https://www.srmist.edu.in/faculty/a-thirugnanam/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-98.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Udayakumar P",
        "url": "https://www.srmist.edu.in/faculty/mr-p-udayakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering, Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-76.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Veeranaath V",
        "url": "https://www.srmist.edu.in/faculty/mr-veeranaath-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-88.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Vijay Krishna N",
        "url": "https://www.srmist.edu.in/faculty/mr-n-vijay-krishna/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-102.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mrs. Anusuya K",
        "url": "https://www.srmist.edu.in/faculty/ms-anusuya-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/anusuya.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Bhaskar V S",
        "url": "https://www.srmist.edu.in/faculty/mr-v-s-bhaskar/",
        "Designation": "Teaching Assistant",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-78.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "title": "Mr. Palani Ganesa Chakravarthy C S",
        "url": "https://www.srmist.edu.in/faculty/mr-c-s-palani-ganesa-chakravarthy/",
        "Designation": "Teacher Trainee",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-80.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Muthuramalingam T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-muthuramalingam/",
        "Designation": "Professor and Head",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/DSC_3100-scaled.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Belsam Jeba Ananth .M",
        "url": "https://www.srmist.edu.in/faculty/belsam-ananth-m/",
        "Designation": "Professor",
        "Specialization": "Automation, Drives & Control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Dr_Belsam_Jeba_Ananth__M.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Murali G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-murali/",
        "Designation": "Professor",
        "Specialization": "Manufacturing Engineering and Micro electro Mechanical Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Murali.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Senthilnathan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-senthilnathan/",
        "Designation": "Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Senthilnathan_R.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Fouziya Sulthana S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-fouziya-sulthana/",
        "Designation": "Associate Professor",
        "Specialization": "Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__S__Fouziya_Sulthana.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Gangadevi R",
        "url": "https://www.srmist.edu.in/faculty/dr-gangadevi-r/",
        "Designation": "Associate Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Gangadevi_R.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Madhavan Shanmugavel",
        "url": "https://www.srmist.edu.in/faculty/dr-madhavan-shanmugavel/",
        "Designation": "Associate Professor",
        "Specialization": "Unmanned Autonomous Vehicles (UAVs), Dynamical systems design, Modelling and Control, Mechatronics, Industrial Robotics.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Madhavan_Shanmugavel.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Mohamed Rabik M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-mohamed-rabik/",
        "Designation": "Associate Professor",
        "Specialization": "Mechatronics Engineering and Vehicle controls",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_M_Mohamed_Rabik.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Priya Esther B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-priya-esther/",
        "Designation": "Associate Professor",
        "Specialization": "Smart grid and Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-12-at-16.07.29.jpeg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Santhosh Rani M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-santhosh-rani/",
        "Designation": "Associate Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__M__Santhosh_Rani.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Anitha Kumari S",
        "url": "https://www.srmist.edu.in/faculty/dr-k-anitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Process Control, System Identification, Robotics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr__S__Anitha_Kumari.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Arivarasan J",
        "url": "https://www.srmist.edu.in/faculty/arivarasan-j/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Mr__Arivarasan_J.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Cross T. Asha Wise",
        "url": "https://www.srmist.edu.in/faculty/dr-cross-t-asha-wise/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital systems design, Electronics, VLSI design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Cross_T__Asha_Wise.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Krithika V",
        "url": "https://www.srmist.edu.in/faculty/v-krithika/",
        "Designation": "Assistant Professor",
        "Specialization": "Electric Vehicles/ Hybrid Electric Vehicle, Power Converters",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mrs.-Krithika.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Ranjith Pillai R",
        "url": "https://www.srmist.edu.in/faculty/mr-ranjith-pillai-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics, Robotics & Control, Smart Actuators and Mechanisms, AI , IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr__Ranjith.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Senthilraja S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-senthilraja/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__S__Senthilraja.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Sivanathan K",
        "url": "https://www.srmist.edu.in/faculty/dr-sivanathan-k/",
        "Designation": "Assistant Professor(Sr.G)",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Sivanathan_K.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Sujatha V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-sujatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication/ Instrumentation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/SUJATHA-V.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Thiyagarajan J",
        "url": "https://www.srmist.edu.in/faculty/j-thiyagarajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/thia.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Vani S",
        "url": "https://www.srmist.edu.in/faculty/dr-vani-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Biosignal Processing, Machine Learning and Deep Learning,Embedded  Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr__S__Vani.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Vasanth S",
        "url": "https://www.srmist.edu.in/faculty/s-vasanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vasanth-Swaminathan.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Vignesh SM",
        "url": "https://www.srmist.edu.in/faculty/s-m-vignesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Vignesh_S_M.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Dr. Vimalastarbino A",
        "url": "https://www.srmist.edu.in/faculty/dr-vimalastarbino-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Manipulator Robotics, Process Control and Design of controllers",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Vimala_Starbino.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Mr. Balakumaran G",
        "url": "https://www.srmist.edu.in/faculty/g-balakumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Engineering, Micro Machining, Tool condition monitoring",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Balakumaran.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Mr. Chandrasekaran M",
        "url": "https://www.srmist.edu.in/faculty/m-chandrasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering; Gear design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Chandrasekaran.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Mr. Josin Hippolitus A",
        "url": "https://www.srmist.edu.in/faculty/josin-hippolitus-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics, Robotics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/profile-pic.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Mr. Lakshmi Srinivas A",
        "url": "https://www.srmist.edu.in/faculty/mr-lakshmi-srinivas-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Lakshmi_Srinivas.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Mr. Saravanan K",
        "url": "https://www.srmist.edu.in/faculty/k-saravanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_7088-1.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Mr. Thirugnanam M",
        "url": "https://www.srmist.edu.in/faculty/mr-m-thirugnanam/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Mr_M_Thirugnanam.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Ms. Gayathiri D",
        "url": "https://www.srmist.edu.in/faculty/ms-d-gayathiri/",
        "Designation": "Assistant Professor",
        "Specialization": "Smart Material",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Ms_D_Gayathiri.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Ms. Madhumitha G",
        "url": "https://www.srmist.edu.in/faculty/g-madhumitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Madhumitha_Gnanasankaran.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Ms. Nandhini M",
        "url": "https://www.srmist.edu.in/faculty/ms-m-nandhini/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/nandhini.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Ms. Rajalakshmi TS",
        "url": "https://www.srmist.edu.in/faculty/t-s-rajalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Rajalakshmi_TS-transformed.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Ms. Sasikala D",
        "url": "https://www.srmist.edu.in/faculty/ms-sasikala-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Systems Design, Electronics and Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms Sasikala D..jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "title": "Praveena T",
        "url": "https://www.srmist.edu.in/faculty/praveena-t/",
        "Designation": "Teaching Associate",
        "Specialization": "Advanced Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/02.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "title": "Dr. Kothai Seshathri",
        "url": "https://www.srmist.edu.in/faculty/kothai-seshathri/",
        "Designation": "Professor and Head",
        "Specialization": "Agroecology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Kothai-photo.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "title": "Dr. Anbukkarasi Kaliyaperumal",
        "url": "https://www.srmist.edu.in/faculty/dr-anbukkarasi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Anbu-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "title": "Dr. Chikkaraju S.N",
        "url": "https://www.srmist.edu.in/faculty/dr-s-n-chikkaraju/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Science and Agricultural Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Chik-2-scaled.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "title": "Dr. Dharani C",
        "url": "https://www.srmist.edu.in/faculty/dr-dharani-c-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Agrometeorology- Climate change, Climate Variability and  Crop modelling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-C.-Dharani.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "title": "Dr. Sanjeevagandhi. M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-sanjeevagandhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Sanjeevagandhi.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "title": "Dr. Sivakumar S",
        "url": "https://www.srmist.edu.in/faculty/dr-sivakumar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Engineering - Farm Power and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-04-12-at-2.37.58-AM.jpeg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "title": "Mr. Dhinesh K S",
        "url": "https://www.srmist.edu.in/faculty/dhinesh-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Agro forestry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dhinesh.-K.-S.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Revathi Venkataraman",
        "url": "https://www.srmist.edu.in/faculty/dr-revathi-venkataraman/",
        "Designation": "Professor and Chair Person",
        "Specialization": "Wireless Network Security, Trust Computing, Internet of Things, Responsible AI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prof.-Revathi-Venkataraman.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Lakshmi M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-lakshmi/",
        "Designation": "Professor & Head",
        "Specialization": "Machine Learning,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4325.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Annapurani Panaiyappan K",
        "url": "https://www.srmist.edu.in/faculty/dr-annapurani-panaiyappan-k/",
        "Designation": "Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3760.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Krishnaraj N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-krishnaraj/",
        "Designation": "Professor",
        "Specialization": "Biometrics, Artificial Intelligence, Internet of Things , Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3751.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Malathy C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-malathy/",
        "Designation": "Professor",
        "Specialization": "Biometrics, Biometrics security, Pattern Recognition",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4309.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Mukesh Krishnan M B",
        "url": "https://www.srmist.edu.in/faculty/m-b-mukeshkrishnan/",
        "Designation": "Professor",
        "Specialization": "Networking and Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3768.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Saravanan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-saravanan/",
        "Designation": "Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3796.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Thenmozhi M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-thenmozhi/",
        "Designation": "Professor",
        "Specialization": "Data structures, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4308.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Anand L",
        "url": "https://www.srmist.edu.in/faculty/dr-l-anand/",
        "Designation": "ISRO -IIRS & Naan Mudhalvan Nodal officer & AICTE  Internships Co Ordinator - SRMIST - Associate  Professor",
        "Specialization": "Deep learning & IoT & DevOps, GIS, GeoWeb Computation and resources ,disaster management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3815.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Arokiaraj Jovith A",
        "url": "https://www.srmist.edu.in/faculty/mr-a-arokiaraj-jovith/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Security and Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/jovith.png"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Arun A",
        "url": "https://www.srmist.edu.in/faculty/dr-arun-a/",
        "Designation": "Associate Professor",
        "Specialization": "Image Processing & Networks.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4227.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Balaji Srikaanth P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-balaji-srikaanth/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3769.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Balamurugan P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-balamurugan/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, Internet of Things, Wireless Sensor Networks, Cyber Security, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4326.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Deepa Thilak K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-deepa-thilak/",
        "Designation": "Associate Professor",
        "Specialization": "Information Security, VANET, MANET, Optimization Techniques, Cloud Computing, Machine Learning, Deep Learning, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3808.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Elizabeth Jesi V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-elizabeth-jesi/",
        "Designation": "Associate Professor",
        "Specialization": "Image processing, Data Structures and algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Elizabeth-Jesi.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Gayathri V M",
        "url": "https://www.srmist.edu.in/faculty/mrs-v-m-gayathri/",
        "Designation": "Associate Professor",
        "Specialization": "Information Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3787.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Godwin Ponsam J",
        "url": "https://www.srmist.edu.in/faculty/j-godwin-ponsam/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3820.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Helen Victoria A",
        "url": "https://www.srmist.edu.in/faculty/ms-a-helen-victoria/",
        "Designation": "Associate Professor",
        "Specialization": "Big Data Analytics,Cloud Computing,Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3783.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Hemamalini V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-hemamalini/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, Ad hoc and Sensor networks, Security, Artificial Intelligence, Web Programming, Operating System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4210.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Kalaiselvi K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-kalaiselvi/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Sensor Networks, Machine Learning, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3807.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Kayalvizhi R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-kayalvizhi/",
        "Designation": "Associate Professor",
        "Specialization": "Cryptography, Wireless Sensor Security, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4223.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Lakshminarayanan R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-lakshminarayanan/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Sensor Networks, IoT, Image Processing, Networking, Cloud Computing, Machine Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4226.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Mary Subaja Christo",
        "url": "https://www.srmist.edu.in/faculty/dr-mary-subaja-christo/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security, Block Chain, IoT, Machine Learning, Cloud Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4216.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Metilda Florence S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-metilda-florence/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, IOT, Image Processing, Video Processing, AI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3818.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Murugaanandam S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-murugaanandam/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks, Information Security, Mobile Ad hoc Networks, Information Assurance and Security, Data Center Administration & Management, Artificial Intelligence, Computer Architecture. Computer Communication, Network Programming and Protocols. Information Assurance and Security, Information Security, Microprocessor.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3800.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Naga Malleswari T Y J",
        "url": "https://www.srmist.edu.in/faculty/dr-tyj-naga-malleswari/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4222.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Nimala K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-nimala/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4235.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Prabakeran S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-prabakeran/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security/ Information Security, Cloud Computing, WSN, Machine Learning Techniques.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3773.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Prasath N",
        "url": "https://www.srmist.edu.in/faculty/n-prasath/",
        "Designation": "Associate Professor",
        "Specialization": "IoT and Cloud, Sensor Data Fusion, Intelligent Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3814.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Radhika R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-radhika/",
        "Designation": "Associate Professor",
        "Specialization": "Internet of Things ,Cloud Computing , Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3812.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Rajaram V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-rajaram/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3765.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Srinivas L N B",
        "url": "https://www.srmist.edu.in/faculty/dr-l-n-b-srinivas/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining, Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3834.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Supraja P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-supraja/",
        "Designation": "Associate Professor",
        "Specialization": "Deep Learning, Computer Vision, Machine Learning, Cognitive Computing, Optimization Algorithms, Soft Computing, Cognitive radio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG_20240902_223558-1.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Suresh A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-suresh/",
        "Designation": "Associate Professor",
        "Specialization": "IoT / Data Mining, Image Processing, Networking, Distributed Computing, Bigdata and Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3762.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Suseela G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-suseela/",
        "Designation": "Associate Professor",
        "Specialization": "Image Processing, Image Security, Wireless Sensor Networks, Machine Learning, Malware visualization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4224.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Thenmalar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-thenmalar/",
        "Designation": "Associate Professor",
        "Specialization": "Natural Language Processing, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3838.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Ushasukhanya S",
        "url": "https://www.srmist.edu.in/faculty/ushasukhanya-s/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4221.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Vaishnavi Moorthy",
        "url": "https://www.srmist.edu.in/faculty/vaishnavi-moorthy/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Cyber Security, AR/VR/MR technologies, Generative AI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/vaish-pic.png"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Venkatesh K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-venkatesh/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, Cloud Computing, AI & ML, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3755.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Vinoth Kumar C N S",
        "url": "https://www.srmist.edu.in/faculty/dr-c-n-s-vinoth-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security | Forensics | Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/DSC_3844.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Visalakshi P",
        "url": "https://www.srmist.edu.in/faculty/p-visalakshi/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3835.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr.R.Naresh",
        "url": "https://www.srmist.edu.in/faculty/dr-r-naresh/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing, Distributed Networks, Group Key Management, Web Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3758.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Abinaya G",
        "url": "https://www.srmist.edu.in/faculty/ms-abinaya-g/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/abinaya.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Anand M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-anand/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3752.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Angayarkanni S A",
        "url": "https://www.srmist.edu.in/faculty/dr-s-a-angayarkanni/",
        "Designation": "Assistant Professor",
        "Specialization": "Intelligent Road Transportation System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3791.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Balachander T",
        "url": "https://www.srmist.edu.in/faculty/t-balachander/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Communication and Networking, Cognitive Networks, Wireless Communication, Cybersecurity",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4230.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Balakiruthiga B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-balakrithiga/",
        "Designation": "Assistant Professor",
        "Specialization": "NETWORKING AND COMMUNICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Balakiruthiga-Photograph.jpeg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Banu Priya P",
        "url": "https://www.srmist.edu.in/faculty/dr-banu-priya-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Medical Internet of Things, Biomedical Signal and Image Processing, Deep Learning, Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3852.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Dayana D S",
        "url": "https://www.srmist.edu.in/faculty/dr-dayana-d-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3830-1.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Deepa N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-deepa/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3790.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Deepika D",
        "url": "https://www.srmist.edu.in/faculty/dr-deepika-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning in Healthcare Application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3792.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Fancy C",
        "url": "https://www.srmist.edu.in/faculty/mrs-c-fancy/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3767.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. G. Ramya",
        "url": "https://www.srmist.edu.in/faculty/dr-g-ramya-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Defined Networks, Network Function Virtualization, Blockchain",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Geetha G",
        "url": "https://www.srmist.edu.in/faculty/geetha-g/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3825.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Gouthaman P",
        "url": "https://www.srmist.edu.in/faculty/p-gouthaman/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Project management, Communication, Interpersonal skills, Management, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3779.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Gowri A S",
        "url": "https://www.srmist.edu.in/faculty/mrs-gowri-a-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Reinforcement Learning, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4207.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Jeyaselvi M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-jeyaselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "Networking and Communications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3804.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Joseph Raymond V",
        "url": "https://www.srmist.edu.in/faculty/mr-v-joseph-raymond/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3821.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Lakshmi Dhevi B",
        "url": "https://www.srmist.edu.in/faculty/dr-lakshmi-dhevi/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Artificial Intelligence, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3781.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Logeshwari R",
        "url": "https://www.srmist.edu.in/faculty/dr-logeshwari-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3810.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Mahalakshmi M",
        "url": "https://www.srmist.edu.in/faculty/dr-mahalakshmi-m/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT, Computer Vision and Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3846.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Mahalakshmi P",
        "url": "https://www.srmist.edu.in/faculty/mahalakshmi-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Retrieval, Machine Learning, Deep Learning, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3839.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Manickam M",
        "url": "https://www.srmist.edu.in/faculty/dr-manickam-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Network and Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3798.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Maranco M",
        "url": "https://www.srmist.edu.in/faculty/dr-maranco-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security, Digital Forensics, Cyber Physical Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3813.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Meenakshi K",
        "url": "https://www.srmist.edu.in/faculty/k-meenakshi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3832.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Mursal Hamdani",
        "url": "https://www.srmist.edu.in/faculty/dr-mursal-hamdani/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography, Quantum Communication, Quantum Optics, Photonic Integrated Circuits.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/IMG_4968.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Nallarasan V",
        "url": "https://www.srmist.edu.in/faculty/mr-v-nallarasan/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Networks, Internet of things, Data Security, Bigdata, Machine learning, Edge computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4229.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Nithya Paranthaman R",
        "url": "https://www.srmist.edu.in/faculty/dr-nithya-paranthaman-r/",
        "Designation": "Assistant Professor",
        "Specialization": "CYBERSECURITY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3775.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Nivedhitha M",
        "url": "https://www.srmist.edu.in/faculty/dr-nivedhitha-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4218.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Prabhu Chakkaravarthy A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-prabhu-chakkaravarthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Image Processing, Machine Learning, Deep Learning, Optimization Techniques,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3848.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Prabhu R",
        "url": "https://www.srmist.edu.in/faculty/dr-prabhu-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Remote Sensing, Image Processing, Machine learning, Deep Learning, Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3841.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Praveena Akki",
        "url": "https://www.srmist.edu.in/faculty/dr-praveena-akki/",
        "Designation": "Assistant  Professor",
        "Specialization": "Cloud Computing, Networking, Security, Artificial Intelligence, Machine learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3801.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Preethiya T",
        "url": "https://www.srmist.edu.in/faculty/dr-preethiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3859.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Priyanka R",
        "url": "https://www.srmist.edu.in/faculty/dr-priyanka-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning & Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3777.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Rajeshkumar K",
        "url": "https://www.srmist.edu.in/faculty/dr-rajeshkumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/srm-faculty-1-3.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Ramesh S",
        "url": "https://www.srmist.edu.in/faculty/dr-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3759.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Safa M",
        "url": "https://www.srmist.edu.in/faculty/mrs-m-safa/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4202.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Saranya G",
        "url": "https://www.srmist.edu.in/faculty/ms-g-saranya/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Laerning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3766.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Savaridassan P",
        "url": "https://www.srmist.edu.in/faculty/savaridassan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Explainable AI, Cyber Security, Deep Learning, Computer Vision, Machine Learning, Computer Networks, , Augmented Reality",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3822.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Saveetha.D",
        "url": "https://www.srmist.edu.in/faculty/mrs-d-saveetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3826.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Senthamarai N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-senthamarai/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4212.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Senthil Murugan V",
        "url": "https://www.srmist.edu.in/faculty/dr-senthil-murugan-v/",
        "Designation": "Assistant Professor",
        "Specialization": "MANET’s, VANET’s, IoT, Machine learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_5730.jpeg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Shanmuganathan V",
        "url": "https://www.srmist.edu.in/faculty/mr-shanmuganathan-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Network Security, Wireless Sensor Networks and Wireless Networks.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Mr.-Shanmuganathan-V.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Sivakumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-sivakumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Programming, Machine Learning, Computer Networks, Web Development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3753.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Sivamohan S",
        "url": "https://www.srmist.edu.in/faculty/dr-sivamohan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Sujatha G",
        "url": "https://www.srmist.edu.in/faculty/ms-g-sujatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Information security and cloud storage security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4204.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Sundarrajan M",
        "url": "https://www.srmist.edu.in/faculty/dr-sundarrajan-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3771.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Swathy R",
        "url": "https://www.srmist.edu.in/faculty/dr-swathy-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning , Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3763.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Thanga Revathi S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-thanga-revathi/",
        "Designation": "Associate Professor",
        "Specialization": "Security and Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3856.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Varun kumar K A",
        "url": "https://www.srmist.edu.in/faculty/dr-k-a-varun-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security, Malware Analysis, Image Processing, Networking, Cloud Computing, Machine Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3827.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Vedhavathy T R",
        "url": "https://www.srmist.edu.in/faculty/dr-t-r-vedhavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3802.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Vijay Vasanth A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-vijay-vasanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Ad hoc Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4233.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Dr. Yamini B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-yamini/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security, Image Processing, Wireless Sensor Networks, System Design, Machine Learning, Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/DSC_3803.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Indra Bhooshan Sharma",
        "url": "https://www.srmist.edu.in/faculty/mr-indra-bhooshan-sharma/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mr. Karthikeyan H",
        "url": "https://www.srmist.edu.in/faculty/h-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4231.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mr. Manikandan K",
        "url": "https://www.srmist.edu.in/faculty/mr-k-manikandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/K.MANIKANDAN-PP7.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mr. Prabakaran J",
        "url": "https://www.srmist.edu.in/faculty/mr-j-prabakaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks, Cloud Computing, Cryptography and Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3816.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mr. Senthil Kumar K",
        "url": "https://www.srmist.edu.in/faculty/mr-k-senthil-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/senthil_photo.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Abirami R",
        "url": "https://www.srmist.edu.in/faculty/ms-r-abirami/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Image security, Watermarking, Deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3780.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Asha Abraham",
        "url": "https://www.srmist.edu.in/faculty/mrs-asha-abraham/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3795.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Dhwarithaa R",
        "url": "https://www.srmist.edu.in/faculty/ms-dhwarithaa-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4219.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Divya G",
        "url": "https://www.srmist.edu.in/faculty/ms-g-divya/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Blockchain",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3789.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Lavanya V",
        "url": "https://www.srmist.edu.in/faculty/v-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3849.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Parimala G",
        "url": "https://www.srmist.edu.in/faculty/g-parimala/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things,Network Security,Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4206.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Preethi V",
        "url": "https://www.srmist.edu.in/faculty/mrs-preethi-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning, Deep Learning, NLP",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3794.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Saisanthiya D",
        "url": "https://www.srmist.edu.in/faculty/mrs-saisanthiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Computer Networks, Artificial Intelligence, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3788.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Sujatha R",
        "url": "https://www.srmist.edu.in/faculty/mrs-sujatha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing, Data Mining, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4209.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mrs. Vijayalakshmi V",
        "url": "https://www.srmist.edu.in/faculty/ms-v-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Structure, Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3793.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Ms. Priyanga S",
        "url": "https://www.srmist.edu.in/faculty/priyanga-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4220.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Justina Michael J",
        "url": "https://www.srmist.edu.in/faculty/justina-michael-j/",
        "Designation": "Teaching Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/justina.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "title": "Mr. Pradeshwaran V",
        "url": "https://www.srmist.edu.in/faculty/mr-pradeshwaran-v/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "title": "Prof. Manikandan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-manikandan/",
        "Designation": "Professor and Head",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/27.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "title": "Prof. Dr. Lakshmi K S",
        "url": "https://www.srmist.edu.in/faculty/prof-k-s-lakshmi/",
        "Designation": "Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/02/Dr-K-S-Lakshmi.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "title": "Dr. Kavitha J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-kavitha/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/kavitha-photo.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "title": "Dr. Kokilambigai K S",
        "url": "https://www.srmist.edu.in/faculty/dr-k-s-kokilambigai/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Staff-profile-Photo.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "title": "Dr. Seetharaman R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-seetharaman/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/2024-09-Seetharaman-for-website.jpeg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "title": "Prof. Kathiravan M K",
        "url": "https://www.srmist.edu.in/faculty/prof-m-k-kathiravan/",
        "Designation": "Professor and Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/unnamed-300x300-1.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "title": "Dr. Sundarrajan T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-sundarrajan/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/42.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "title": "Dr. Velmurugan V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-velmurugan/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/30-1.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "title": "Dr. Gandi Sony Pears",
        "url": "https://www.srmist.edu.in/faculty/dr-gandhi-sony-pears/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/13-2-300x300-1.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "title": "Dr. Priya D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Re.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "title": "Dr. ShanthaKumar B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-shanthakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/15-3.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "title": "Dr. G.V. Anjana",
        "url": "https://www.srmist.edu.in/faculty/mrs-g-v-anjana/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/36-300x300-1.jpg"
    },
    {
        "DepartmentCode": 54629,
        "DepartmentName": "Department of Pharmaceutical Quality Assurance",
        "title": "Dr. Manimaran V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-manimaran/",
        "Designation": "Associate Professor and Head",
        "Specialization": "Pharmaceutical Quality Assurance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/43.jpg"
    },
    {
        "DepartmentCode": 54629,
        "DepartmentName": "Department of Pharmaceutical Quality Assurance",
        "title": "Dr. Kanaka Parvathi .K",
        "url": "https://www.srmist.edu.in/faculty/dr-kanaka-parvathi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Quality Assurance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/23.jpg"
    },
    {
        "DepartmentCode": 54629,
        "DepartmentName": "Department of Pharmaceutical Quality Assurance",
        "title": "Dr. Kella Alekhya",
        "url": "https://www.srmist.edu.in/faculty/dr-kella-alekhya/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Pharmaceutical Analysis and Quality Assurance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/24.jpg"
    },
    {
        "DepartmentCode": 54626,
        "DepartmentName": "Department of Pharmaceutical Regulatory Affairs",
        "title": "Dr. Tirumala Chetty Sudheer Kumar",
        "url": "https://www.srmist.edu.in/faculty/mr-tirumala-chetty-sudheer-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Regulatory Affairs",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/44.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Prof. Damodharan N",
        "url": "https://www.srmist.edu.in/faculty/prof-n-damodharan/",
        "Designation": "Vice Principal / Professor & Head",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/4.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. Mothilal M",
        "url": "https://www.srmist.edu.in/faculty/prof-m-mothilal/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Mothilal-Profile-Photo-SRMCP.jpeg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. Sangeetha S",
        "url": "https://www.srmist.edu.in/faculty/prof-s-sangeetha/",
        "Designation": "Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-09-at-10.02.38-AM.jpeg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. Umashankar M S",
        "url": "https://www.srmist.edu.in/faculty/prof-m-s-umashankar/",
        "Designation": "Professor",
        "Specialization": "PHARMACEUTICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/10-1.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. Kavitha R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-kavitha/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/19.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. P.N. Remya",
        "url": "https://www.srmist.edu.in/faculty/dr-p-n-remya/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Remya-PN-Photo.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. Saraswathi T S",
        "url": "https://www.srmist.edu.in/faculty/mrs-t-s-saraswathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/20.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. Farhath Sherin",
        "url": "https://www.srmist.edu.in/faculty/dr-farhath-sherin/",
        "Designation": "Assistant Professor",
        "Specialization": "PHARMACEUTICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/PHOTO-2024-09-03-09-57-05-1.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "title": "Dr. Gayathri H",
        "url": "https://www.srmist.edu.in/faculty/mrs-h-gayathri/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/22-1.jpg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "title": "Prof. Kamaraj R",
        "url": "https://www.srmist.edu.in/faculty/prof-r-kamaraj/",
        "Designation": "Professor and Head",
        "Specialization": "Pharmaceutical Regulatory Affairs, Clinical Research, Pharmacovigilance and Medical Writing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/5.jpg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "title": "Dr. Thirumal M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-thirumal/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmacognosy and Phytochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/25.jpg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "title": "Dr. Sakthi Priyadarsini S",
        "url": "https://www.srmist.edu.in/faculty/dr-sakthi-priyadharshini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "PHARMACOGNOSY, PHYTOCHEMISTRY, NATURAL PRODUCTS RESEARCH, ANTI-CANCER RESEARCH",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/38.jpg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "title": "Dr. Shalini K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-shalini/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/40.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "title": "Dr. Chitra V",
        "url": "https://www.srmist.edu.in/faculty/prof-v-chitra/",
        "Designation": "Dean, Professor & Head, Department of Pharmacology, College of Pharmacy",
        "Specialization": "Neuroscience, Metabolic disease, Diabetes",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/1-1.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "title": "Dr. Sumithra M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-sumithra/",
        "Designation": "Associate Professor",
        "Specialization": "Neuropharmacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/33-1.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "title": "Dr. Gowri K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-gowri/",
        "Designation": "Assistant Professor",
        "Specialization": "OSTEOARTHRITIS, IN-VIVO, EX-OVO AND IN-VITRO METHODS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/34-1.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "title": "Dr. Krishna Prabha N",
        "url": "https://www.srmist.edu.in/faculty/mrs-n-krishna-prabha/",
        "Designation": "Assistant Professor",
        "Specialization": "Neuroscience",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/39.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "title": "Dr. Narayanan J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-narayanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/3-2.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "title": "Mrs. Gayathiri K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-gayathri/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/17-2.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "title": "Mrs. Sri Devi R",
        "url": "https://www.srmist.edu.in/faculty/mrs-r-sri-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/12.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "title": "Dr. Vijayakumar T M",
        "url": "https://www.srmist.edu.in/faculty/dr-t-m-vijayakumar/",
        "Designation": "Professor and Head",
        "Specialization": "Pharmacy Practice/Clinical Pharmacy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/vijayakumar.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "title": "Dr. Rajanandh M G",
        "url": "https://www.srmist.edu.in/faculty/dr-rajanandh-m-g/",
        "Designation": "Professor",
        "Specialization": "Clinical Research, Pharmacovigilance, Pharmacoepidemiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/MGR.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "title": "Dr. Sarumathy S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-sarumathy/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmacy Practice",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/26.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "title": "Dr. Jagadeesan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-jagadeesan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Dr-Jagadeesan.jpeg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "title": "Dr. Nandimandalam Sai Supra Siddhu K",
        "url": "https://www.srmist.edu.in/faculty/dr-nandimandalam-sai-supra-siddhu-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Siddhu.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "title": "Dr. Priyadharshini A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-priyadharshini/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmacy Practice",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/35.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "title": "Dr. Mohana Krishnan R",
        "url": "https://www.srmist.edu.in/faculty/dr-mohana-krishnan-r/",
        "Designation": "Director, Sports",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/02/Dr-R-Mohana-Krishnan.jpeg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "title": "Dr. Jayasingh Albert Chandrasekar S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-jayasingh-albert-chandrasekar/",
        "Designation": "Associate Professor & Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230315-WA0008.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "title": "Dr. ASATH ALIKHAN D J",
        "url": "https://www.srmist.edu.in/faculty/dr-asath-alikhan-d-j/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0031.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "title": "Dr. Louis Raj Y C",
        "url": "https://www.srmist.edu.in/faculty/dr-y-c-louis-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0034-1.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "title": "Dr. Siva M",
        "url": "https://www.srmist.edu.in/faculty/dr-siva-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Sports Training and Volleyball",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/siva.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "title": "Dr. GOKUL RAJ M",
        "url": "https://www.srmist.edu.in/faculty/179464/",
        "Designation": "Assistant Professor",
        "Specialization": "Physical Education",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Gokul.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. John Thiruvadigal D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-john-thiruvadigal/",
        "Designation": "Professor and Dean of Sciences",
        "Specialization": "Physics & Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. D. JOHN THIRUVADIGAL.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Senthil Kumar E",
        "url": "https://www.srmist.edu.in/faculty/dr-e-senthil-kumar/",
        "Designation": "Research Associate Professor & Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/Senthil-Kumar.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Iyakutti K",
        "url": "https://www.srmist.edu.in/faculty/dr-iyakutti-k/",
        "Designation": "Professor (Emeritus)",
        "Specialization": "Computational design and Experimental studies in nano material",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.KI_.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Karthigeyan A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-karthigeyan/",
        "Designation": "Professor",
        "Specialization": "Physics & Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4701.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Malar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-malar/",
        "Designation": "Research Professor",
        "Specialization": "Thin film photovoltaics for green energy adaptation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4748.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Sarpangala Venkataprasad Bhat, FRSC",
        "url": "https://www.srmist.edu.in/faculty/dr-s-venkataprasad-bhat/",
        "Designation": "Research Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/svbhat-photo-2024.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Abhay A. Sagade",
        "url": "https://www.srmist.edu.in/faculty/dr-abhay-a-sagade/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Abhay-Sagade.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Alagiri M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-alagiri/",
        "Designation": "Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4762.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Annie Sujatha R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-annie-sujatha/",
        "Designation": "Associate Professor",
        "Specialization": "Physics, Material science and Non linear optics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4779.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Archana J",
        "url": "https://www.srmist.edu.in/faculty/dr-j-archana/",
        "Designation": "Associate Professor (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Archana_Physics-a.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Arijit Sen",
        "url": "https://www.srmist.edu.in/faculty/dr-arijit-sen/",
        "Designation": "Research Associate Professor",
        "Specialization": "Quantum Transport at Nanoscale",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/AS.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Chandramohan S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-chandramohan/",
        "Designation": "Research Associate Professor",
        "Specialization": "Experimental Condensed Matter Physics - 2D Materials and Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4714.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Debabrata Sarkar",
        "url": "https://www.srmist.edu.in/faculty/dr-debabrata-sarkar/",
        "Designation": "Research Associate Professor",
        "Specialization": "Nanomaterials for Energy and Environmental Applications:",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4740.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Devanand Venkatasubbu G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-devanand-venkatasubbu/",
        "Designation": "Associate Professor",
        "Specialization": "Nanomedicine",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Picture.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Jaivardhan Sinha",
        "url": "https://www.srmist.edu.in/faculty/jaivardhan-sinha/",
        "Designation": "Research Associate Professor",
        "Specialization": "Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Jaivardhan-Sinha_Photo.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Kalaivani T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-kalaivani/",
        "Designation": "Associate Professor",
        "Specialization": "Synthesis of nanomagnetic materials for supercapacitor applications and drug delivery applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4788.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Kamala Bharathi K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-kamala-bharathi/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4712.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Kathirvel V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-kathirvel/",
        "Designation": "Associate Professor",
        "Specialization": "DFT calculations on Thermoelectric Materials, High Pressure Studies on Intermetallics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4765.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Kiran Mangalampalli",
        "url": "https://www.srmist.edu.in/faculty/dr-kiran-mangalampalli/",
        "Designation": "Research Associate Professor",
        "Specialization": "Experimental Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kiran-Photo-recent.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Krishnamohan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-krishnamohan/",
        "Designation": "Associate Director (Admissions) & Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. M. Krishnamohan.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Nisha K D",
        "url": "https://www.srmist.edu.in/faculty/dr-k-d-nisha/",
        "Designation": "Associate Professor",
        "Specialization": "Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/KDN-FP-PHOTO.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Preferencial Kala C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-preferencial-kala/",
        "Designation": "Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-2-2-e1714110462919.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Rohit Dhir",
        "url": "https://www.srmist.edu.in/faculty/dr-rohit-dhir/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4731.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Sanjay Kumar Mehta",
        "url": "https://www.srmist.edu.in/faculty/dr-sanjay-kumar-mehta/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4749-1.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Saurabh Ghosh",
        "url": "https://www.srmist.edu.in/faculty/dr-saurabh-ghosh/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/SaurabhGhosh_photo-scaled.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Vijayakumar T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-vijayakumar/",
        "Designation": "Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4783.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. A. Naga Rajesh",
        "url": "https://www.srmist.edu.in/faculty/dr-a-naga-rajesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Atmospheric Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/NagaRajesh.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Ajay Rakkesh R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-ajay-rakkesh/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/New-Photo_Ajay_edited.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Alagiri Swamy A A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-a-alagiri-swamy/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic nanoelectronics, Molecular Assembly Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.-Alagiri-Swamy-A-A.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Alladi Hemanth Kumar",
        "url": "https://www.srmist.edu.in/faculty/dr-alladi-hemanth-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Clouds and Atmospheric aerosols",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Hem_Profile_pic.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Alok Kumar",
        "url": "https://www.srmist.edu.in/faculty/dr-alok-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematical Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/alok-recent.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Anand Mohan Shrivastav",
        "url": "https://www.srmist.edu.in/faculty/dr-anand-mohan-shrivastav/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Optics and Photonics, Biosensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/5Y0A0902.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Anbumozhi Angayarkanni S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-anbumozhi-angayarkanni/",
        "Designation": "Assistant Professor",
        "Specialization": "Soft matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4752.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Angeline Little Flower N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-angeline-little-flower/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Nanoscience",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4686.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Anil Kumar Pal",
        "url": "https://www.srmist.edu.in/faculty/dr-anil-kumar-pal/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Arnab Ganguly",
        "url": "https://www.srmist.edu.in/faculty/dr-arnab-ganguly/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4725.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Arul Varman K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-arul-varman/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic and Perovskite Semiconductors for Electronic Device Applications.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Pic_SRM-3.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Bakiyaraj Ganeshamoorthy",
        "url": "https://www.srmist.edu.in/faculty/g-bakiyaraj/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4690-1-3.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Banasree Sadhukhan",
        "url": "https://www.srmist.edu.in/faculty/dr-banasree-sadhukhan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Condensed Matter Physics (Theory)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/BS-scaled.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Bharath G",
        "url": "https://www.srmist.edu.in/faculty/bharath-g/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Sustainable Perspectives in Research on the Water-Energy-Food Nexus",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4735.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Bhaskar Chandra Behera",
        "url": "https://www.srmist.edu.in/faculty/dr-bhaskar-chandra-behera/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Experimental Condensed Matter and Nanomaterials Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4711.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Dibyendu Dey",
        "url": "https://www.srmist.edu.in/faculty/dr-dibyendu-dey/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Computational Condensed Matter and Materials Physics",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Elangovan Elamurugu",
        "url": "https://www.srmist.edu.in/faculty/dr-elangovan-elamurugu/",
        "Designation": "Assistant Professor",
        "Specialization": "Device Fabrication (Thin-films, Nanoparticles, Materials Synthesis, 2D Materials, Crystal Growth)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/PP_Elangovan-Elamurugu.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Eswara Vara Prasadarao Komarala",
        "url": "https://www.srmist.edu.in/faculty/mr-eswara-vara-prasadarao/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Materials Science",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Eswaraiah Varrla",
        "url": "https://www.srmist.edu.in/faculty/dr-eswaraiah-varrla/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4737.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Geetha A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-geetha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanotechnology, Spectroscopy, Ultrasonics, Advanced Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4761.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Gunasekaran B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-gunasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-B.-Gunasekaran.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Hariharan R M",
        "url": "https://www.srmist.edu.in/faculty/dr-r-m-hariharan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Materials Science, Nano Devices and Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4780.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Harish S",
        "url": "https://www.srmist.edu.in/faculty/dr-s-harish/",
        "Designation": "Associate Professor",
        "Specialization": "Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Dr.-S.-Harish.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Janani Sivasankar K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-jananisivasankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Physics & Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4790.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Junaid Masud Laskar",
        "url": "https://www.srmist.edu.in/faculty/dr-junaid-masud-laskar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Junaid-passport.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Justin Jesuraj P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-justin-jesuraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Optoelectronic devices, Nanomaterials for water splitting and environmental remediation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/jj-scaled.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Karthika P C",
        "url": "https://www.srmist.edu.in/faculty/karthika-p-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanocomputating , Nanoelectronics simulation, Nanotechnology in Machine Learning, Nanotechnology in Artificial Intelligence & Datascience,Nanomodeling & computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4697.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Kovendhan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-kovendhan/",
        "Designation": "Assistant Professor",
        "Specialization": "Condensed Matter Physics (Experimental)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4751.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Lakshya Daukiya",
        "url": "https://www.srmist.edu.in/faculty/dr-lakshya-daukiya/",
        "Designation": "Research Assistant Professor",
        "Specialization": "2D materials and Surface Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-10.44.12_617e1f8e.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Madhuparna Karmakar",
        "url": "https://www.srmist.edu.in/faculty/dr-madhuparna/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Quantum Many Body Theory, Superconductivity, Magnetism, Ultracold atomic gases, Disorder induced phase transitions",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/mkarmakar_photo.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Maheswaran R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-maheswaran/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4768.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Manas Ranjan Panda",
        "url": "https://www.srmist.edu.in/faculty/dr-manas-ranjan-panda/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Mani Rahulan K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-mani-rahulan/",
        "Designation": "Assistant Professor",
        "Specialization": "Intense field laser-matter Interaction, Nanophotonics and Nanomedicine.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4764.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Meenal Deo",
        "url": "https://www.srmist.edu.in/faculty/dr-meenal-deo/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Photo.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Muthuganesan R",
        "url": "https://www.srmist.edu.in/faculty/muthuganesan-r/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Muthu-Photo.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Payel Bandyopadhyay",
        "url": "https://www.srmist.edu.in/faculty/dr-payel-bandyopadhyay/",
        "Designation": "Assistant Professor",
        "Specialization": "Structure-Property correlation, Mechanical behaviour of materials, Polymer thin films",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4721.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Radhamani  A. V",
        "url": "https://www.srmist.edu.in/faculty/dr-a-v-radhamani/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Advanced Materials Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Radhamani-photo_24th-April-24.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Raja Rajendran",
        "url": "https://www.srmist.edu.in/faculty/mr-raja-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Science",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Rajaboopathi Mani",
        "url": "https://www.srmist.edu.in/faculty/dr-rajaboopathi-m/",
        "Designation": "Research Assistant Professor",
        "Specialization": "THz Materials, Nanophosphors, Mesocrystals, Non-Classical Crystallization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4728-e1714706455573.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Ramesh V",
        "url": "https://www.srmist.edu.in/faculty/dr-v-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Crystal growth and Characterization & Functional Nanomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4703.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Ravikirana",
        "url": "https://www.srmist.edu.in/faculty/dr-ravikirana/",
        "Designation": "Assistant Professor",
        "Specialization": "Metullurgy / materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4729.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Rohit Chakraborty",
        "url": "https://www.srmist.edu.in/faculty/dr-rohit-chakraborty/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Weather Extremes, Climate Change, Remote Sensing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/rohit.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Rudra Banerjee",
        "url": "https://www.srmist.edu.in/faculty/dr-rudra-banerjee/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Dr.-Rudra-Banerjee.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Sandeep K. Lakhera",
        "url": "https://www.srmist.edu.in/faculty/sandeep-k-lakhera/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4773.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Santhi K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-santhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Physics and Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG-20240425-WA0005.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Shadak Alee K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-shadak-alee/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Optics and Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Shadak-sir.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Siva C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-siva/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanocomposites, Nanocatalysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4695.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Sivakumar P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-sivakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Nuclear Magnetic Resonance Spectroscopy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PSK.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Sougata Mallick",
        "url": "https://www.srmist.edu.in/faculty/sougata-mallick/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Spintronics & Nanomagnetism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4766.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Subhajit Sarkar",
        "url": "https://www.srmist.edu.in/faculty/subhajit-sarkar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Condensed Matter Theory and Statistical Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4705.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Subhojyoti Sinha",
        "url": "https://www.srmist.edu.in/faculty/subhojyoti-sinha/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Materials for electronic applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-3.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Sujit Kumar",
        "url": "https://www.srmist.edu.in/faculty/dr-sujit-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Energy Materials and Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/sujit.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Tamilselvan Appadurai",
        "url": "https://www.srmist.edu.in/faculty/tamilselvan-appadurai/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Semiconductor nanomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4769.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Trilochan Sahoo",
        "url": "https://www.srmist.edu.in/faculty/dr-trilochan-sahoo/",
        "Designation": "Assistant Professor",
        "Specialization": "Solid State Physics & Materials Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4771.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Triparno Bandyopadhyay",
        "url": "https://www.srmist.edu.in/faculty/dr-triparno-bandyopadhyay/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Particle Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4722.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Tushar H. Rana",
        "url": "https://www.srmist.edu.in/faculty/tushar-h-rana/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational condensed matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4689.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Vattikondala Ganesh",
        "url": "https://www.srmist.edu.in/faculty/dr-vattikondala-ganesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4710.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "title": "Dr. Venkata Ravindra A",
        "url": "https://www.srmist.edu.in/faculty/dr-venkata-ravindra-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Venkata-Ravindra-A_2-e1714130398264.jpg"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "title": "Dr. Karpagavalli S",
        "url": "https://www.srmist.edu.in/faculty/dr-karpagavalli-s/",
        "Designation": "Associate Professor and HoD",
        "Specialization": "Plant Pathology - Integrated Management of diseases of rice, pulses",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Karp-2-scaled-e1681973643757.jpg"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "title": "Dr. Akshaya S B",
        "url": "https://www.srmist.edu.in/faculty/dr-akshaya-s-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Mushroom Cultivation Technology, Biomolecules, Biological control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Akshaya.jpg"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "title": "Dr. Rex. B",
        "url": "https://www.srmist.edu.in/faculty/dr-b-rex/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Pathology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rex.-B.png"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "title": "Ms. Aruna G",
        "url": "https://www.srmist.edu.in/faculty/aruna-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Pathology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/WhatsApp-Image-2023-07-25-at-11.56.30-AM.jpeg"
    },
    {
        "DepartmentCode": 134565,
        "DepartmentName": "Department of Plant Protection",
        "title": "Dr. Rageshwari Selvaraj",
        "url": "https://www.srmist.edu.in/faculty/dr-rageshwari-selvaraj/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Plant Pathology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rageshwari.jpg"
    },
    {
        "DepartmentCode": 134565,
        "DepartmentName": "Department of Plant Protection",
        "title": "Dr. Ashokkumar N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-ashokkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Nematology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr__ASHOKKUMAR_N.png"
    },
    {
        "DepartmentCode": 134565,
        "DepartmentName": "Department of Plant Protection",
        "title": "Dr. Ramazeame L",
        "url": "https://www.srmist.edu.in/faculty/dr-ramazeame-l/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Rama-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90465,
        "DepartmentName": "Department of Post Harvest and Technology",
        "title": "Dr. Prakash K",
        "url": "https://www.srmist.edu.in/faculty/dr-prakash-k/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Fruit Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Prak-1-scaled.jpg"
    },
    {
        "DepartmentCode": 90465,
        "DepartmentName": "Department of Post Harvest and Technology",
        "title": "Dr. Sheela. P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-sheela/",
        "Designation": "Assistant Professor",
        "Specialization": "Food Science and Nutrition",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Shee-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90465,
        "DepartmentName": "Department of Post Harvest and Technology",
        "title": "Ms. Chandraprabha S",
        "url": "https://www.srmist.edu.in/faculty/s-chandraprabha/",
        "Designation": "Assistant Professor",
        "Specialization": "Food Science and Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/S-CHANDRAPRABHA-scaled.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "title": "Dr. Senthil Kumaran J",
        "url": "https://www.srmist.edu.in/faculty/dr-senthil-kumaran-j/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "School Psychology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-Senthil-Kumaran-J.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "title": "Mrs. Divya M",
        "url": "https://www.srmist.edu.in/faculty/mrs-divya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/divya.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "title": "Ms. Murugeshwari P",
        "url": "https://www.srmist.edu.in/faculty/ms-murugeshwari-p/",
        "Designation": "Teaching Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1270-scaled.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "title": "Ms. Shifa Hansa",
        "url": "https://www.srmist.edu.in/faculty/ms-shifa-hansa/",
        "Designation": "Teaching Associate",
        "Specialization": "Teaching Associate in Psychology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/IMG-20230228-WA0018.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "title": "Ms. Sujatha Sathiya",
        "url": "https://www.srmist.edu.in/faculty/ms-sujatha-sathiya/",
        "Designation": "Teaching Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Sujatha-Sathiya-scaled.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "title": "Ms. Keerthana P",
        "url": "https://www.srmist.edu.in/faculty/ms-keerthana-p/",
        "Designation": "Teaching Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/1-3-scaled.jpg"
    },
    {
        "DepartmentCode": 90484,
        "DepartmentName": "Department of Social Sciences",
        "title": "Dr. Periasami Nagappan",
        "url": "https://www.srmist.edu.in/faculty/dr-periasami-nagappan/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Agricultural Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Peri-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 90484,
        "DepartmentName": "Department of Social Sciences",
        "title": "Dr. Naveen Kumar M R",
        "url": "https://www.srmist.edu.in/faculty/dr-naveen-kumar-m-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Extension",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Naveen-Kumar.jpg"
    },
    {
        "DepartmentCode": 90484,
        "DepartmentName": "Department of Social Sciences",
        "title": "Dr. Sasikumar P",
        "url": "https://www.srmist.edu.in/faculty/dr-sasikumar-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Screenshot_2023-01-23-05-54-33-880_com.google.android.gm_.jpg"
    },
    {
        "DepartmentCode": 75276,
        "DepartmentName": "Department of Social Work",
        "title": "Dr. Mathew Arumai M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-mathew-arumai/",
        "Designation": "Head i/c & Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/600578-scaled.jpg"
    },
    {
        "DepartmentCode": 75276,
        "DepartmentName": "Department of Social Work",
        "title": "Dr. Ganesh S",
        "url": "https://www.srmist.edu.in/faculty/dr-ganesh-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Untitled-design.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "title": "Dr.  Angelin Silviya R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-angelin-silviya/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Science and Agricultural Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ange-2-scaled.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "title": "Dr. Dinesh  G.K",
        "url": "https://www.srmist.edu.in/faculty/dr-dinesh-g-k/",
        "Designation": "",
        "Specialization": "Environmental Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dinesh.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "title": "Dr. Melvin Joe. M",
        "url": "https://www.srmist.edu.in/faculty/dr-melvin-m-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Melvin-Joe.png"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "title": "Dr. Raja Rajeshwaran T S",
        "url": "https://www.srmist.edu.in/faculty/raja-rajeshwaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Fertility, GPS Soil mapping",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/AVM-Studio-Copy_Fotor-3-scaled.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "title": "Mr. Ravisankar. K",
        "url": "https://www.srmist.edu.in/faculty/k-ravisankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Science & Agrl. Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ravi-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "title": "Prabhakaran S",
        "url": "https://www.srmist.edu.in/faculty/mr-s-prabhakaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Mr.-S.-Prabhakaran.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "title": "Dr. Saraswathy S",
        "url": "https://www.srmist.edu.in/faculty/s-saraswathy/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/4-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "title": "Dr. Jaiganesh B",
        "url": "https://www.srmist.edu.in/faculty/b-jaiganesh/",
        "Designation": "Associate Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/5-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "title": "Dr. Hebzibah Beulah Suganthi T.R.",
        "url": "https://www.srmist.edu.in/faculty/t-r-hebzibah-beulah-sunganthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/1-1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "title": "Dr. Jayanthi D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-jayanthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/3-2-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "title": "Dr. Ranjan N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-ranjan/",
        "Designation": "Assistant Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "title": "Dr. Ravanachandar A",
        "url": "https://www.srmist.edu.in/faculty/dr-a-ravanachandar/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Horticulture - Spices and Plantation Crops",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ravanachander.jpg"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "title": "Dr. Kannan D",
        "url": "https://www.srmist.edu.in/faculty/dr-kannan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/4583-Kannan.jpg"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "title": "Dr. Rameshkumar D",
        "url": "https://www.srmist.edu.in/faculty/dr-rameshkumar-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Vegetable Breeding and Production",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr__Rameshkumar_D.png"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "title": "Dr. Vinothini. N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-vinothini/",
        "Designation": "Assistant Professor",
        "Specialization": "Seed Science and Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Vino-4-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Dr. Padmanabhan T",
        "url": "https://www.srmist.edu.in/faculty/dr-padmanabhan-t/",
        "Designation": "Assistant Professor & Head",
        "Specialization": "New Media Studies, Information and Communication Technology, Film Studies, and Cultural and Gender Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/padmanabhan.png"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Dr. Rajesh. R",
        "url": "https://www.srmist.edu.in/faculty/dr-rajesh-r/",
        "Designation": "Associate Professor",
        "Specialization": "Visual Media",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/hod-8-scaled-e1677910739452.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Dr. Arokiaraj",
        "url": "https://www.srmist.edu.in/faculty/dr-arokiaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Screenplay Writing and Film Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/9405-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Dr. Harie Karthikeyan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-harie-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Media",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/7-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Dr. Poarkodi",
        "url": "https://www.srmist.edu.in/faculty/dr-poarkodi/",
        "Designation": "Assistant Professor",
        "Specialization": "Film Studies, Gender and Cultural Studies, Journalism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/15-extra-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Dr. Ansu Elsa Joy",
        "url": "https://www.srmist.edu.in/faculty/ansu-elsa-joy/",
        "Designation": "Assistant Professor",
        "Specialization": "Film Studies, Gender Studies and Cultural Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ansu-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Dr. Lakshmipriya M",
        "url": "https://www.srmist.edu.in/faculty/lakshmipriya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Photography, Film Studies, Women Studies and Cultural Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Priya-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Mr. Annamalai.P",
        "url": "https://www.srmist.edu.in/faculty/mr-annamalai-p-2/",
        "Designation": "Cameraman",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_9403-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Mr. Hari Prakash D",
        "url": "https://www.srmist.edu.in/faculty/mr-hari-prakash-d/",
        "Designation": "Editor",
        "Specialization": "Video Editing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/700150-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Mr. Kamal S",
        "url": "https://www.srmist.edu.in/faculty/mr-kamal-s-2/",
        "Designation": "Fine Artist",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/DSC_9507-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Mr. Saravanan K",
        "url": "https://www.srmist.edu.in/faculty/mr-saravanan-k/",
        "Designation": "Cinematographer",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_9396-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Mr. Vasantharaj C",
        "url": "https://www.srmist.edu.in/faculty/vasantharaj-c/",
        "Designation": "Sound engineer",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/9427-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "Ms. Klarine Judith K",
        "url": "https://www.srmist.edu.in/faculty/klarine-judith-k/",
        "Designation": "Multimedia Designer",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_9385-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "title": "",
        "url": "https://www.srmist.edu.in/faculty/182586/",
        "Designation": "Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/work-scaled.jpg"
    },
    {
        "DepartmentCode": 87478,
        "DepartmentName": "Department of Yoga",
        "title": "Dr. Senthil Kumar M",
        "url": "https://www.srmist.edu.in/faculty/dr-senthil-kumar-m/",
        "Designation": "Associate Professor - OG -HoD",
        "Specialization": "Physical Education & Yoga",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0010-2.jpg"
    },
    {
        "DepartmentCode": 87478,
        "DepartmentName": "Department of Yoga",
        "title": "Dr. Jesus Rajkumar N C",
        "url": "https://www.srmist.edu.in/faculty/dr-n-c-jesus-rajkumar/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_20230223_091405.jpg"
    },
    {
        "DepartmentCode": 87478,
        "DepartmentName": "Department of Yoga",
        "title": "Dr. Suresh C",
        "url": "https://www.srmist.edu.in/faculty/dr-suresh-c/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-03-04-at-11.47.24-AM.jpeg"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Dr. Karmenivannan P",
        "url": "https://www.srmist.edu.in/faculty/dr-karmenivannan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Dr. Marieswari M",
        "url": "https://www.srmist.edu.in/faculty/dr-marieswari-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Dr. Minnal Carolin A",
        "url": "https://www.srmist.edu.in/faculty/dr-minnal-carolin-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Dr. Santhi K",
        "url": "https://www.srmist.edu.in/faculty/dr-santhi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Mr. Gopinath G P",
        "url": "https://www.srmist.edu.in/faculty/mr-gopinath-g-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Mr. Hemachalam S",
        "url": "https://www.srmist.edu.in/faculty/mr-hemachalam-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Mr. Prem Nasir",
        "url": "https://www.srmist.edu.in/faculty/mr-prem-nasir/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Mr. Santhosh M",
        "url": "https://www.srmist.edu.in/faculty/mr-santhosh-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Mr.Tamil Selvan B",
        "url": "https://www.srmist.edu.in/faculty/mr-tamil-selvan-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Ms. Annie Anjali Shaji",
        "url": "https://www.srmist.edu.in/faculty/ms-annie-anjali-shaji/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Ms. Jacquline Martina S",
        "url": "https://www.srmist.edu.in/faculty/ms-jacqueline-martina-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "title": "Mr. Dakshina Moorthy V",
        "url": "https://www.srmist.edu.in/faculty/mr-dakshina-moorthy-v/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 86713,
        "DepartmentName": "Nanotechnology Research Center",
        "title": "Dr. Navaneethan M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-navaneethan/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1711524563398.png"
    },
    {
        "DepartmentCode": 86713,
        "DepartmentName": "Nanotechnology Research Center",
        "title": "Dr. Geerthana M",
        "url": "https://www.srmist.edu.in/faculty/dr-geerthana-m/",
        "Designation": "Assistant Professor (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Dr.-M.-Geerthana.jpg"
    },
    {
        "DepartmentCode": 86713,
        "DepartmentName": "Nanotechnology Research Center",
        "title": "Dr. Vinoth E",
        "url": "https://www.srmist.edu.in/faculty/dr-vinoth-e/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/Photo-Vinoth.jpg"
    },
    {
        "DepartmentCode": 86713,
        "DepartmentName": "Nanotechnology Research Center",
        "title": "Mr. Mohamed Jibri K P",
        "url": "https://www.srmist.edu.in/faculty/mr-mohamed-jibri-k-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 86713,
        "DepartmentName": "Nanotechnology Research Center",
        "title": "Mr. Vijay V",
        "url": "https://www.srmist.edu.in/faculty/mr-vijay-v/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "title": "Dr. Pazhani G  P",
        "url": "https://www.srmist.edu.in/faculty/dr-g-p-pazhani/",
        "Designation": "Research Associate Professor",
        "Specialization": "Pharmaceutical Chemistry and Molecular Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Pazhani.jpg"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "title": "Dr. Hemanth Kumar CH",
        "url": "https://www.srmist.edu.in/faculty/dr-c-h-hemanth-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/14.jpg"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "title": "Dr. Jaividhya P",
        "url": "https://www.srmist.edu.in/faculty/dr-jaividhya-p/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Bioinorganic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/29.jpg"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "title": "Ms. Priya Darshani S",
        "url": "https://www.srmist.edu.in/faculty/ms-priya-darshani-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Pharmaceutical Chemistry, Phytochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/pppppppppppppppppppppppppppppppp.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Dr. Pradeepa C",
        "url": "https://www.srmist.edu.in/faculty/dr-c-pradeepa/",
        "Designation": "Head of the Department, Professor",
        "Specialization": "Climate Responsive Architecture, Architectural Acoustics and Lighting, Services in Tall Buildings",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-C.PRADEEPA.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Dr. Geetha K",
        "url": "https://www.srmist.edu.in/faculty/dr-k-geetha-ramesh/",
        "Designation": "Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Geetha-Ramesh.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Dr. Narayana K A",
        "url": "https://www.srmist.edu.in/faculty/dr-k-a-narayana/",
        "Designation": "Professor",
        "Specialization": "Architecture, sustainable planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.K.A Narayana.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Dr. Shanthi Priya R",
        "url": "https://www.srmist.edu.in/faculty/dr-r-shanthi-priya/",
        "Designation": "Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. R. Shanthi Priya.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Lakshmanan CT",
        "url": "https://www.srmist.edu.in/faculty/ct-lakshmanan/",
        "Designation": "Professor",
        "Specialization": "Architecture, Town Planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Lakshman-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Suriya Prakash M",
        "url": "https://www.srmist.edu.in/faculty/prof-m-suriya-prakash/",
        "Designation": "Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/suriya2-1.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Dr. Karuppusamy P",
        "url": "https://www.srmist.edu.in/faculty/dr-p-karuppusamy/",
        "Designation": "Associate Professor",
        "Specialization": "Art studio ,rural study in Department of Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/ks.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Dr. Kousalyadevi G",
        "url": "https://www.srmist.edu.in/faculty/dr-g-kousalyadevi/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Kousalyadevi-G.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Arun S.K",
        "url": "https://www.srmist.edu.in/faculty/mr-s-k-arun/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.S.K.Arun_.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Gajendran.T",
        "url": "https://www.srmist.edu.in/faculty/mr-gajendran-t/",
        "Designation": "Associate Professor",
        "Specialization": "Urban Design, Housing, Computer Application in Design & Environmental Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Gajendran-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Purnachandar P",
        "url": "https://www.srmist.edu.in/faculty/p-purnachandar/",
        "Designation": "Associate Professor",
        "Specialization": "Housing Designs, Institutional building designs, Building Materials and Construction, Professional Practice and Estimation and specification.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/P-Purnachandar.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Raja Muthaiah M C",
        "url": "https://www.srmist.edu.in/faculty/mr-m-c-raja-muthaiah/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Studio, Architectural Design Studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. M.C. Raja Muthaiah.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Kavitha  G",
        "url": "https://www.srmist.edu.in/faculty/ms-kavitha-g/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG_5674-scaled.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Narayani A.R",
        "url": "https://www.srmist.edu.in/faculty/ms-narayani-a-r/",
        "Designation": "Associate Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Narayani A. R..jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Sudha G",
        "url": "https://www.srmist.edu.in/faculty/ar-g-sudha/",
        "Designation": "Associate Professor",
        "Specialization": "Sustainable Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Sudha-G.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Anoop Menon",
        "url": "https://www.srmist.edu.in/faculty/mr-anoop-menon/",
        "Designation": "Assistant Professor",
        "Specialization": "Urban Design, Housing, Building materials & Construction, Professional Practice, Interior Design and Architectural Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. Anoop Menon.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Antony Joe V",
        "url": "https://www.srmist.edu.in/faculty/mr-antony-joe-v/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/antony.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Balamaheshwaran Renganathan",
        "url": "https://www.srmist.edu.in/faculty/prof-balamaheshwaran-renganathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture, Planning and Sustainability: Urban and Regional Planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/1-3.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Denish Kumar B.G",
        "url": "https://www.srmist.edu.in/faculty/mr-denish-kumar-b-g/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-27-at-6.05.44-PM-1.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Dharani Dharan S",
        "url": "https://www.srmist.edu.in/faculty/mr-dharani-s-dharan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Mr.-Dharani-S-Dharan.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Ganesh J",
        "url": "https://www.srmist.edu.in/faculty/ar-ganesh-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Interior design Psychology, Architectural Conservation and Photography and Journalism.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Ganesh-J.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Karthick K.A",
        "url": "https://www.srmist.edu.in/faculty/mr-karthick-k-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Architectural Drawing, Building Services, Green Building Strategies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. Karthick K.A.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Prashant P",
        "url": "https://www.srmist.edu.in/faculty/mr-prashant-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Urban Design, Public Places, Specultive Architecture, Governance, Placemaking and Liveability",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_3813.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Praveen N",
        "url": "https://www.srmist.edu.in/faculty/mr-n-praveen/",
        "Designation": "Assistant Professor",
        "Specialization": "Tectonics , Urban Design and Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-05-31-at-11.16.46-AM-e1685512092287.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Rengarajan.N",
        "url": "https://www.srmist.edu.in/faculty/mr-rengarajan-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture, Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/rengarajan-said-photograph-scaled-e1684859765672.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Saravanan V",
        "url": "https://www.srmist.edu.in/faculty/v-saravanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Housing Designs, Institutional building designs, Building Materials and Construction, Professional Practice and Estimation and specification.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Saravanan-V.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Shyam Jebadev M",
        "url": "https://www.srmist.edu.in/faculty/mr-shyam-jebadev-m/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/WhatsApp-Image-2023-01-02-at-6.57.06-PM.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Suraj Dwivedi",
        "url": "https://www.srmist.edu.in/faculty/mr-suraj-dwivedi/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Suraj-Dwivedi.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Mr. Vignaeshwar C",
        "url": "https://www.srmist.edu.in/faculty/mr-vignaeshwar-c/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/vigneshwaran.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Abinaya T L",
        "url": "https://www.srmist.edu.in/faculty/ms-t-l-abinaya/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Project Management, Structure Basic in Architecture, Advanced construction techniques, Graphics, Interior design, Energy efficient, etc.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. T.L.Abinaya.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Akshada Nitin Khatavkar",
        "url": "https://www.srmist.edu.in/faculty/ms-akshada-nitin-khatavkar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/photo-2.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Aruna. V",
        "url": "https://www.srmist.edu.in/faculty/aruna-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture and Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Aruna.-V.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Deepthi KP",
        "url": "https://www.srmist.edu.in/faculty/ms-deepthi-kp/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Divyaa P R",
        "url": "https://www.srmist.edu.in/faculty/ms-divyaa-p-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/divyaa.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Geeva Chandana.B",
        "url": "https://www.srmist.edu.in/faculty/ms-geeva-chandana-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Geeva Chandana.B.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Grace Ansica A",
        "url": "https://www.srmist.edu.in/faculty/ms-a-grace-ansica/",
        "Designation": "Assistant Professor",
        "Specialization": "Urban farming, Resource Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Grace-Ansica-A.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Janani C",
        "url": "https://www.srmist.edu.in/faculty/janani-c/",
        "Designation": "Assistant Professor",
        "Specialization": "History of contenporary interior design, Design Studio, 3d Graphic Studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Janani-C.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Kalaimathy K",
        "url": "https://www.srmist.edu.in/faculty/ms-k-kalaimathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Energy Efficiency, Tall Buildings, Building Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Kalaimathy.-K.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Krithika R",
        "url": "https://www.srmist.edu.in/faculty/ar-krithika-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Vernacular Architecture, Eco housing, Culturally Sustainable Built Environment.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Krithika R.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Manjari Krishnamoorthy",
        "url": "https://www.srmist.edu.in/faculty/ms-manjari-krishnamoorthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Contemporary Indian & Western Architecture, Biomimetics ,Housing, Landscape Architecture and Environmental Science, Building Materials & Construction – III,Interior Design studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Manjari-Krishnamoorthy.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Nivetha Devi R",
        "url": "https://www.srmist.edu.in/faculty/ms-nivetha-devi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture & Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Nivetha-Devi-R.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Prashanthini Rajagopal",
        "url": "https://www.srmist.edu.in/faculty/ms-prashanthini-rajagopal/",
        "Designation": "Assistant Professor",
        "Specialization": "Performance Evaluation Tools (Simulations) and Climate Responsive Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Prashanthini Rajagopal.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Shanmuga Priya S",
        "url": "https://www.srmist.edu.in/faculty/shanmuga-priya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture, Interior Design , Architectural Conservation, Urban planning and development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/DSC_0066-copy.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Srisaileeswari S",
        "url": "https://www.srmist.edu.in/faculty/ms-srisaileeswari-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/sd.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Sukheshini D",
        "url": "https://www.srmist.edu.in/faculty/ms-d-sukheshini/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. D.Sukheshini.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Tharangini K",
        "url": "https://www.srmist.edu.in/faculty/tharangini-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/tharangini.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Vaishalee H",
        "url": "https://www.srmist.edu.in/faculty/ms-vaishalee-h/",
        "Designation": "Assistant Professor",
        "Specialization": "Heritage and Architectural Conservation, Design Studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/07/vaishalee.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Vishva Dharani V M",
        "url": "https://www.srmist.edu.in/faculty/ms-vishva-dharani-v-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Vishva-Dharani-V-M.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Prasanna S",
        "url": "https://www.srmist.edu.in/faculty/prasanna-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Architectural Design, Computer studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230519-WA0007.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Sunitha M",
        "url": "https://www.srmist.edu.in/faculty/ms-sunitha-m/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "title": "Ms. Sanghavi VV",
        "url": "https://www.srmist.edu.in/faculty/ms-sanghavi-vv/",
        "Designation": "Visiting Professor",
        "Specialization": "Sustainable Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Sanghavi-VV.jpg"
    },
    {
        "DepartmentCode": 24112,
        "DepartmentName": "School of Education",
        "title": "Dr. Prema N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-prema/",
        "Designation": "Head Of The Department",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24112,
        "DepartmentName": "School of Education",
        "title": "Dr.A.Rajkamal",
        "url": "https://www.srmist.edu.in/faculty/dr-a-rajkamal/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24112,
        "DepartmentName": "School of Education",
        "title": "Dr.K.Deepika",
        "url": "https://www.srmist.edu.in/faculty/dr-k-deepika/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114950,
        "DepartmentName": "Section of Agriculture Engineering",
        "title": "Dr. Malathi V",
        "url": "https://www.srmist.edu.in/faculty/dr-malathi-v-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Malathi-photo-New.jpg"
    },
    {
        "DepartmentCode": 114950,
        "DepartmentName": "Section of Agriculture Engineering",
        "title": "Mr. Ganeshamoorthy J",
        "url": "https://www.srmist.edu.in/faculty/ganeshamoorthy-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomass Gasification",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ganeshamoorty.jpg"
    },
    {
        "DepartmentCode": 114947,
        "DepartmentName": "Section of Animal Sciences",
        "title": "Dr. Sreyass K S",
        "url": "https://www.srmist.edu.in/faculty/dr-sreyass-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Veterinary Science and Animal Husbandry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Srey-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114954,
        "DepartmentName": "Section of Biochemistry and Crop Physiology",
        "title": "Dr. Nagajothi R",
        "url": "https://www.srmist.edu.in/faculty/nagajothi-r-2/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Crop Physiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Naga-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114954,
        "DepartmentName": "Section of Biochemistry and Crop Physiology",
        "title": "Dr. Mohanasundaram S",
        "url": "https://www.srmist.edu.in/faculty/dr-mohanasundaram-s/",
        "Designation": "Assistant Professor (Biochemistry)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Passport-size-photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr.Helen Shaji J C",
        "url": "https://www.srmist.edu.in/faculty/dr-helen-shaji-j-c/",
        "Designation": "Dean, SRM College of Nursing",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/helen-shaji.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr. Vijayalakshmi R",
        "url": "https://www.srmist.edu.in/faculty/prof-r-vijayalakshmi/",
        "Designation": "Vice Principal, College of Nursing",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/11/Dr.-Vijayalakshmi-R.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr. Bamini Devi N",
        "url": "https://www.srmist.edu.in/faculty/dr-n-bamini-devi/",
        "Designation": "Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-N.-Baminidevi.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr. Kalavalli M",
        "url": "https://www.srmist.edu.in/faculty/m-kalavalli/",
        "Designation": "Professor",
        "Specialization": "Mental Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-M.-Kalavalli.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr. Rajeshwari D",
        "url": "https://www.srmist.edu.in/faculty/dr-d-rajeshwari/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-Rajeshwari.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr. Suseelal T",
        "url": "https://www.srmist.edu.in/faculty/dr-t-suseelal/",
        "Designation": "Associate Professor",
        "Specialization": "MEDICAL AND SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-Suseelal.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Ambiga K",
        "url": "https://www.srmist.edu.in/faculty/k-ambiga/",
        "Designation": "Associate Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Ambiga.-K.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Angelin Dhanalakshmi M",
        "url": "https://www.srmist.edu.in/faculty/mrs-m-angelin-dhanalakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "COMMUNITY HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Angelin-Dhanalakshmi.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Deenajothy R",
        "url": "https://www.srmist.edu.in/faculty/mrs-r-deenajothy/",
        "Designation": "Associate Professor",
        "Specialization": "OBSTETRICS AND GYNAECOLOGY NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Deena-Jothy.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Sheeba Jebakani A",
        "url": "https://www.srmist.edu.in/faculty/a-sheeba-jebakani/",
        "Designation": "Associate Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Sheebajebakani.-A.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr. Shaini G S",
        "url": "https://www.srmist.edu.in/faculty/dr-shaini-g-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.-G.-S.-Shaini.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Dr. Valarmathi V",
        "url": "https://www.srmist.edu.in/faculty/v-valarmathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mental Health (Psychiatric) Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Dr.V.-Valarmathi.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Deepika T",
        "url": "https://www.srmist.edu.in/faculty/dr-deepika-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Mental Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Deepika.-T.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Geetha K",
        "url": "https://www.srmist.edu.in/faculty/k-geetha/",
        "Designation": "Assistant Professor",
        "Specialization": "COMMUNITY HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Geetha.K.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Kanmani K",
        "url": "https://www.srmist.edu.in/faculty/mrs-kanmani-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Community Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-K.-Kanmani.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Kavitha P",
        "url": "https://www.srmist.edu.in/faculty/mrs-kavitha-p/",
        "Designation": "Assistant Professor",
        "Specialization": "MENTAL HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-P.-Kavitha.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Priya V",
        "url": "https://www.srmist.edu.in/faculty/mrs-v-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-V.Priya_.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Priyadharsini M",
        "url": "https://www.srmist.edu.in/faculty/m-priyadharsini/",
        "Designation": "Assistant Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-M.-Priyadharshini.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Selva Mary Devakani J",
        "url": "https://www.srmist.edu.in/faculty/mrs-j-selva-mary-devakani/",
        "Designation": "Assistant Professor",
        "Specialization": "MENTAL HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/12/PHOTO-2024-12-10-22-34-27.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Suganthi K",
        "url": "https://www.srmist.edu.in/faculty/mrs-k-suganthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-K.-Suganthi.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Tamilselvi S",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-tamilselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "CHILD HEALTH ( PAEDIATRIC) NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-S.-Tamilselvi.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Ushapriya M",
        "url": "https://www.srmist.edu.in/faculty/ms-ushapriya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Pediatric Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-M.-Ushapriya.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mr. Sathish A M",
        "url": "https://www.srmist.edu.in/faculty/mr-sathish-a-m/",
        "Designation": "Tutor",
        "Specialization": "Medical surgical nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mr.-A.M.-Sathish.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Abizha G",
        "url": "https://www.srmist.edu.in/faculty/abizha-g/",
        "Designation": "Nursing tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Abizha-G.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Dhivya N",
        "url": "https://www.srmist.edu.in/faculty/mrs-n-dhivya/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-N.-Dhivya.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Sasikala G",
        "url": "https://www.srmist.edu.in/faculty/mrs-g-sasikala/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-G.-Sasikala.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Selvi S",
        "url": "https://www.srmist.edu.in/faculty/mrs-selvi-s/",
        "Designation": "Tutor",
        "Specialization": "CHILD HEALTH(PAEDIATRIC) NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-Selvi.-S.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Shiyamala P",
        "url": "https://www.srmist.edu.in/faculty/mrs-shiyamala-p/",
        "Designation": "Tutor",
        "Specialization": "Medical surgical nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-P.-Shiyamala.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Suganya N",
        "url": "https://www.srmist.edu.in/faculty/suganya-n/",
        "Designation": "Tutor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-N.-Suganya.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Vinitha D",
        "url": "https://www.srmist.edu.in/faculty/vinitha-d/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Mrs.-D.-Vinitha.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Aswathy Nair",
        "url": "https://www.srmist.edu.in/faculty/ms-aswathy-nair-2/",
        "Designation": "Tutor",
        "Specialization": "PAEDIATRIC NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Ms.-Aswathy-Nair.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Jenitha R",
        "url": "https://www.srmist.edu.in/faculty/ms-jenitha-r/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Ms.-R.-Jenitha.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms.Pusphpa G",
        "url": "https://www.srmist.edu.in/faculty/ms-pusphpa-g/",
        "Designation": "",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/PUSHPA-G-1.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mr. Simeon",
        "url": "https://www.srmist.edu.in/faculty/mr-simeon-2/",
        "Designation": "Clinical Instructor",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/SIMION.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mr. Viswanath. P",
        "url": "https://www.srmist.edu.in/faculty/mr-viswanath/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Mr.-Viswanath.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Beaula Priya Tharisini P",
        "url": "https://www.srmist.edu.in/faculty/mrs-p-beaula-priya-tharisini/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/Photoroom_20240812_165809.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Cynthial Queeni",
        "url": "https://www.srmist.edu.in/faculty/mrs-cynthial-queeni/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/CYNTHIAL-QUEENI.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Jayamalli N",
        "url": "https://www.srmist.edu.in/faculty/mrs-jayamalli-n/",
        "Designation": "Nursing Tutor",
        "Specialization": "Department of Obstetrics and Gynacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/10/Mrs.N.-Jaya-Malli.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Jothi C",
        "url": "https://www.srmist.edu.in/faculty/ms-jothi-c/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/JOTHI-C.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Louismary A",
        "url": "https://www.srmist.edu.in/faculty/a-louismary/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/LOUIS-MARY.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Nithiya R",
        "url": "https://www.srmist.edu.in/faculty/mrs-nithiya-r/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Pushpa G",
        "url": "https://www.srmist.edu.in/faculty/mrs-g-pushpa/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/PUSHPA-G.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Rukmani M",
        "url": "https://www.srmist.edu.in/faculty/m-rukmani/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/RUKUMANI-1.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Mrs. Sumathi S",
        "url": "https://www.srmist.edu.in/faculty/s-sumathi/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/SUMATHI.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Anbarasi. A",
        "url": "https://www.srmist.edu.in/faculty/ms-anbarasi-r/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/ANBARASI.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Annie Jasline B",
        "url": "https://www.srmist.edu.in/faculty/ms-annie-jasline-b/",
        "Designation": "Clinical Instructor",
        "Specialization": "Community Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/ANNIE.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Anu N",
        "url": "https://www.srmist.edu.in/faculty/anu-n/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/ANU.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Anusiya S",
        "url": "https://www.srmist.edu.in/faculty/anusiya-s/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/7e4cebfe-17eb-4be4-a632-4c711af32cad.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Anusuya P",
        "url": "https://www.srmist.edu.in/faculty/ms-p-anusuya/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/ANUSUYA-P.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Aswini M",
        "url": "https://www.srmist.edu.in/faculty/m-aswini/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/4-1.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Chandralekha. R",
        "url": "https://www.srmist.edu.in/faculty/ms-chandralekha/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-20-32-14.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Divya R",
        "url": "https://www.srmist.edu.in/faculty/ms-divya-r/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/DIVYA-R.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Helen Christinal Y",
        "url": "https://www.srmist.edu.in/faculty/ms-helen-christinal-y/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/HELEN-CRISTINAL.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Hema Rajakumari R",
        "url": "https://www.srmist.edu.in/faculty/r-hema-rajakumari/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/HEMA.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Jenifer R",
        "url": "https://www.srmist.edu.in/faculty/ms-jenifer-r/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/JENIFER.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Kavitha G",
        "url": "https://www.srmist.edu.in/faculty/ms-kavitha-g-2/",
        "Designation": "Clinical Instructor",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/KAVITHA.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Latha Kumari C",
        "url": "https://www.srmist.edu.in/faculty/ms-latha-kumari-c/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/LATHA-KUMARI.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Pavithra k",
        "url": "https://www.srmist.edu.in/faculty/k-pavithra/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/Mrs.-Pavithra-K.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Pramila Roseline",
        "url": "https://www.srmist.edu.in/faculty/ms-pramila-roseline/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-03-12-10-05.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Prema S",
        "url": "https://www.srmist.edu.in/faculty/s-prema/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/PREMA.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Sasikala K",
        "url": "https://www.srmist.edu.in/faculty/ms-sasikala-k/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/2.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Sumi R P",
        "url": "https://www.srmist.edu.in/faculty/ms-r-p-sumi/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/R-P-SUMI.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "title": "Ms. Vanaja S",
        "url": "https://www.srmist.edu.in/faculty/s-vanaja/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/VANAJA-B.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "title": "Dr. Ganapathy Sankar U",
        "url": "https://www.srmist.edu.in/faculty/dr-ganapathy-sankar-u/",
        "Designation": "Dean,  College of Occupational Therapy",
        "Specialization": "Pediatrics, Neurosciences and Mental health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.U.Ganapathy-Sankar-1.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "title": "Mr. Anbarasu D",
        "url": "https://www.srmist.edu.in/faculty/anbarasu-d/",
        "Designation": "Assistant Professor",
        "Specialization": "MOT Paediatrics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/ANBU-PHOTO-1.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "title": "Ms. Dhanalakshmi R",
        "url": "https://www.srmist.edu.in/faculty/dhanalakshmi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Neurosciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1579841315717-31a6bd78-0e12-481c-a717-da6aac674228_.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "title": "Ms. Poorani P",
        "url": "https://www.srmist.edu.in/faculty/ms-poorani-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "title": "Ms. SREELEKHA S",
        "url": "https://www.srmist.edu.in/faculty/sreelekha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Paediatrics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1269795303.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "title": "Ms. Sulbha Gauns Dessai",
        "url": "https://www.srmist.edu.in/faculty/ms-sulbha-gauns-dessai/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "title": "Ms. Zatale Shubhangi Laxmanrao",
        "url": "https://www.srmist.edu.in/faculty/ms-zatale-shubhangi-laxmanrao/",
        "Designation": "Assistant Professor",
        "Specialization": "Musculoskeletal sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/PHOTO_1-2-2.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Prof. Veeragoudhaman T S",
        "url": "https://www.srmist.edu.in/faculty/prof-t-s-veeragoudhaman/",
        "Designation": "Dean i/c, College of Physiotherapy",
        "Specialization": "Hand Conditions",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.29-AM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. Suresh T.N",
        "url": "https://www.srmist.edu.in/faculty/mr-t-n-suresh/",
        "Designation": "Vice - Principal, College of Physiotherapy",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-9.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. Malarvizhi D",
        "url": "https://www.srmist.edu.in/faculty/prof-d-malarvizhi/",
        "Designation": "Professor",
        "Specialization": "Paediatrics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.17-AM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. Mani Kumar M",
        "url": "https://www.srmist.edu.in/faculty/mani-kumar-m/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-2.30.45-PM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. Vadivelan K",
        "url": "https://www.srmist.edu.in/faculty/prof-k-vadivelan/",
        "Designation": "Professor",
        "Specialization": "Pediatric Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-02-at-2.29.35-PM-1.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Ayyappan J",
        "url": "https://www.srmist.edu.in/faculty/mr-j-ayyappan/",
        "Designation": "Professor",
        "Specialization": "Orthopedic Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-45.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Kamalanathan P",
        "url": "https://www.srmist.edu.in/faculty/prof-p-kamalanathan/",
        "Designation": "Professor",
        "Specialization": "Community Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-59.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Saravana Hari Ganesh M",
        "url": "https://www.srmist.edu.in/faculty/prof-m-saravana-hari-ganesh/",
        "Designation": "Professor",
        "Specialization": "Neurological Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-14.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Anandhi D",
        "url": "https://www.srmist.edu.in/faculty/prof-d-anandhi/",
        "Designation": "Professor",
        "Specialization": "Physiotherapy in Cardiopulmonary Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.19-AM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. Harikrishnan R",
        "url": "https://www.srmist.edu.in/faculty/harikrishnan-r/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-54.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. M. Anbu Priya MPT.,PhD.,",
        "url": "https://www.srmist.edu.in/faculty/mrs-m-anbu-priya/",
        "Designation": "Associate Professor",
        "Specialization": "Obstetrics and gynecological physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG-20240824-WA0002-new.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. Suresh J",
        "url": "https://www.srmist.edu.in/faculty/suresh-j/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.16-AM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Balamurugan Janakiraman",
        "url": "https://www.srmist.edu.in/faculty/mr-balamurugan-j/",
        "Designation": "Research Associate",
        "Specialization": "Research in Physiotherapy, Epidemiology, Clinical Outcome measure in rehabilitation, and Musculo-skeletal rehabilitation rehabilitation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-5.30.36-PM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Dr. Ashish Mathew",
        "url": "https://www.srmist.edu.in/faculty/dr-ashish-mathew/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Arvind M",
        "url": "https://www.srmist.edu.in/faculty/arvind-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-8.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Chandrakumar K",
        "url": "https://www.srmist.edu.in/faculty/chandrakumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "ORTHOPEADICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-56.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Jayakanthan E",
        "url": "https://www.srmist.edu.in/faculty/mr-e-jayakanthan/",
        "Designation": "Assistant Professor",
        "Specialization": "Physiotherapy  and Yoga Therapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-48.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Manova Prasanna Kumar D",
        "url": "https://www.srmist.edu.in/faculty/manova-prasanna-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "MUSCULOSKELETAL AND SPORTS DISORDERS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-57.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Rajkumar M",
        "url": "https://www.srmist.edu.in/faculty/rajkumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "orthopedics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-55.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Mariyam Farzana S.F",
        "url": "https://www.srmist.edu.in/faculty/mrs-s-f-mariyam-farzana/",
        "Designation": "Assistant Professor",
        "Specialization": "OBSTETRICS AND GYNAECOLOGY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-17.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Prithiha V",
        "url": "https://www.srmist.edu.in/faculty/ms-v-prithiha/",
        "Designation": "Assistant Professor",
        "Specialization": "CardioPulmonary Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/311-prithiha.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Priyanka B",
        "url": "https://www.srmist.edu.in/faculty/ms-priyanka-b-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Orthopaedics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-10.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. R.Karthiga",
        "url": "https://www.srmist.edu.in/faculty/mrs-karthiga-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Neurology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/MY-PROFILE-PICTURE.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Shrisruthi S",
        "url": "https://www.srmist.edu.in/faculty/ms-s-shrisruthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Paediatric Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.47-AM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Sowmiya M",
        "url": "https://www.srmist.edu.in/faculty/mrs-m-sowmiya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-09.59.44.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Subicha T S",
        "url": "https://www.srmist.edu.in/faculty/mrs-subicha-t-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-16.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mrs. Yasmeen Imtiaz G",
        "url": "https://www.srmist.edu.in/faculty/mrs-yasmeen-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Orthopaedic Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-28-at-9.59.46-AM-1.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Divya Varshini R",
        "url": "https://www.srmist.edu.in/faculty/dr-divya-varshini-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/2024-09-03-21-07-28-430-1.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Gayathri K",
        "url": "https://www.srmist.edu.in/faculty/ms-gayathri-k-2/",
        "Designation": "Assistant Professor",
        "Specialization": "CARDIOPULMONARY SCIENCES",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/IMG-20240828-WA0020.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Kaviya M",
        "url": "https://www.srmist.edu.in/faculty/ms-kaviya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cardiopulmonary sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-08-28-at-09.59.49-min.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Valarmathy N",
        "url": "https://www.srmist.edu.in/faculty/valaramathy-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Orthopedics and traumatology condition, Musculoskeletal conditions ,Post surgical and Geriatric rehabilitation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/photoclip.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Ashok N",
        "url": "https://www.srmist.edu.in/faculty/mr-n-ashok/",
        "Designation": "Senior Physio Therapist",
        "Specialization": "Senior Physiotherapist",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-49.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Nandhini S",
        "url": "https://www.srmist.edu.in/faculty/ms-nandhini-s/",
        "Designation": "Clinical Therapist",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG-20240828-WA0020.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Diwagar B",
        "url": "https://www.srmist.edu.in/faculty/mr-diwagar-b/",
        "Designation": "Clinical Therapist",
        "Specialization": "PHYSIOTHERAPY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-61.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Harilingam M",
        "url": "https://www.srmist.edu.in/faculty/mr-harilingam-m/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "PHYSIOTHERAPY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/hari-ph.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Mr. Ragupathi S",
        "url": "https://www.srmist.edu.in/faculty/mr-ragupathi-s/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "PHYSIOTHERAPIST",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG-20240828-WA0019.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Jothilakshmi A",
        "url": "https://www.srmist.edu.in/faculty/ms-jothi-lakshmi-a/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "physical medicine and rehabilitation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/IMG-20240828-WA0032-1.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Revathi G",
        "url": "https://www.srmist.edu.in/faculty/ms-revathi-g/",
        "Designation": "Clinical Therapist",
        "Specialization": "General medicine and  General surgery, OPD",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/IMG-20240828-WA0007.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. Santhiya G",
        "url": "https://www.srmist.edu.in/faculty/ms-santhiya-g/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "PHYSIOTHERAPY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/09/College-of-Physiotherapy-1.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "title": "Ms. VijiPriya S",
        "url": "https://www.srmist.edu.in/faculty/ms-viji-priya-s/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "CARDIORESPIRATORY CONDITIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/08/IMG-20240828-WA0031.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Prof. (Dr.) Rajiv Janardhanan",
        "url": "https://www.srmist.edu.in/faculty/prof-dr-rajiv-janardhanan/",
        "Designation": "Dean (Medical Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/11.-Dr.Rajiv-Janardhaman-MEdica-lResearch-1.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. P. Venkataraman",
        "url": "https://www.srmist.edu.in/faculty/dr-p-venkataraman/",
        "Designation": "Associate Professor (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/30-Dr.P.Venkataraman-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Sundaresan. S",
        "url": "https://www.srmist.edu.in/faculty/dr-sivapatham-sundaresan/",
        "Designation": "Associate Professor (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9.DrS_.Sundaresan-Medical-research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Gisha Sivan",
        "url": "https://www.srmist.edu.in/faculty/dr-gisha-sivan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-04-04-at-1.56.00-PM.jpeg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Indrajit Sahu",
        "url": "https://www.srmist.edu.in/faculty/dr-indrajit-sahu/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/12.Dr_.Indrajit-Saha-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Madhumitha Haridoss",
        "url": "https://www.srmist.edu.in/faculty/dr-madhumitha-haridoss/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/033-1.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Muralidhara Rao Maradana",
        "url": "https://www.srmist.edu.in/faculty/dr-muralidhara-rao-maradana/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/18.-Dr.Muralidhara-Rao-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Piyush Agrawal",
        "url": "https://www.srmist.edu.in/faculty/dr-piyush-agrawal/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioinformatics, Systems Biology, Cancer Genomics, Big Data Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/PHOTO-2024-05-17-16-31-09.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Raji Lenin",
        "url": "https://www.srmist.edu.in/faculty/dr-raji-lenin/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/15.Dr_.Raji-medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Shiny PJ",
        "url": "https://www.srmist.edu.in/faculty/dr-shiny-pj/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Sivaraj Mohana Sundaram",
        "url": "https://www.srmist.edu.in/faculty/dr-sivaraj-mohana-sundaram/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/19.Dr_.M.S.-Sivaraj-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Subhashis Pal",
        "url": "https://www.srmist.edu.in/faculty/dr-subhashis-pal/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Richa Gulati",
        "url": "https://www.srmist.edu.in/faculty/richa-gulati/",
        "Designation": "Research Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/20.-s.Richa-Gulati-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Ms. Sai Varsaa",
        "url": "https://www.srmist.edu.in/faculty/ms-sai-varsaa/",
        "Designation": "Research Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/1697164580236-1-scaled.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Prabhu D",
        "url": "https://www.srmist.edu.in/faculty/prabhu-d/",
        "Designation": "Research Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/17.Mr_.D.Prabhu-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "title": "Dr. Dhruva Nandi",
        "url": "https://www.srmist.edu.in/faculty/dr-dhruva-nandi/",
        "Designation": "Research Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/10.Dr_.Dhruva-Nandhi-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Hari Singh",
        "url": "https://www.srmist.edu.in/faculty/dr-hari-singh/",
        "Designation": "Dean, School of Public Health",
        "Specialization": "Public Health, Quality Improvement",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Hari-Singh-1.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Alex Joseph",
        "url": "https://www.srmist.edu.in/faculty/dr-alex-joseph/",
        "Designation": "Professor",
        "Specialization": "Epidemiology, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Alex-Joseph.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Kalpana Kosalram",
        "url": "https://www.srmist.edu.in/faculty/dr-b-kalpana/",
        "Designation": "Professor",
        "Specialization": "Project Management, Strategic Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-B.-Kalpana.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Benson Thomas M",
        "url": "https://www.srmist.edu.in/faculty/dr-benson-thomas-m/",
        "Designation": "Associate Professor",
        "Specialization": "Health Economics, Demography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Benson-Thomas-M-scaled.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Bharathi. P",
        "url": "https://www.srmist.edu.in/faculty/bharathi-p/",
        "Designation": "Associate Professor",
        "Specialization": "Qualitative Research, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.Bharathi.P.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Gladius Jennifer H",
        "url": "https://www.srmist.edu.in/faculty/dr-h-gladius-jennifer/",
        "Designation": "Associate Professor",
        "Specialization": "Biostatistics, Health Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Gladius-Jennifer-H.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Janmejaya Samal",
        "url": "https://www.srmist.edu.in/faculty/dr-janmejaya-samal/",
        "Designation": "Associate Professor",
        "Specialization": "Research, Health Systems and Policy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/160236092_3309846649115029_4725233306698480247_n-1-e1712569674114.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Suman Kanougiya",
        "url": "https://www.srmist.edu.in/faculty/dr-suman-kanougiya/",
        "Designation": "Associate Professor",
        "Specialization": "Research, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/suman.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Dhivya K",
        "url": "https://www.srmist.edu.in/faculty/dr-dhivya-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Health Data Science, Environmental Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Dhivya.K.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Prakash M",
        "url": "https://www.srmist.edu.in/faculty/dr-m-prakash-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Health Data Science, Biostatistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-M.-Prakash.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Selvamani.Y",
        "url": "https://www.srmist.edu.in/faculty/dr-y-selvamani/",
        "Designation": "Assistant Professor",
        "Specialization": "Research, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Y.-Selvamani.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Ms. Geetha Veliah",
        "url": "https://www.srmist.edu.in/faculty/geetha-veliah/",
        "Designation": "Assistant Professor",
        "Specialization": "Health Promotion, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ms.Geetha-Veliah.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Dr. Keerthi P",
        "url": "https://www.srmist.edu.in/faculty/dr-keerthi-p/",
        "Designation": "Research Associate",
        "Specialization": "Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG_20230704_145653.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "title": "Mr. Praveen Kumar R",
        "url": "https://www.srmist.edu.in/faculty/mr-r-praveen-kumar/",
        "Designation": "Program Associate",
        "Specialization": "Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Mr.-Praveen-Kumar-R.jpg"
    }
]

export type UrlSearchResult = {
	url: {
		title: string;
		url: string;
	};
	similarity: number;
};

const fuse = new Fuse(urls, {
	keys: ["title",  "url"],
	threshold: 0.3,
});

export function searchUrl(searchName: string): UrlSearchResult[] {
	const normalizedSearchName = searchName
		.toLowerCase()
		.replace(/^(mr|ms|dr)\.?\s+/, "")
		.replace(/\./g, " ")
		.replace(/\s+/g, " ")
		.trim();

	const results = fuse.search(normalizedSearchName).map((result) => ({
		url: result.item,
		similarity: result.score ? 1 - result.score : 1,
	}));

	return results.splice(0, 30);
}

export function getName(url: string) {
	const name = url.split("/").pop() ?? "";
	return name
		.split("-")
		.map((word) => {
			if (
				word.toLowerCase() === "dr" ||
				word.toLowerCase() === "mr" ||
				word.toLowerCase() === "mrs" ||
				word.toLowerCase() === "ms"
			) {
				return `${word}.`;
			}
			return word.replace(/\d+/g, "");
		})
		.join(" ");
}
