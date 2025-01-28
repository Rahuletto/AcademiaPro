import Fuse from "fuse.js";


export const urls = [
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Madhusoodhanan  P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-madhusoodhanan/",
        "Designation": "Associate Professor & HoD",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7331.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Jayapragash J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-jayapragash/",
        "Designation": "Associate Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7329-scaled.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Kumaravel R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-kumaravel/",
        "Designation": "Associate Professor",
        "Specialization": "Fuzzy Inference system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7303.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Nancy Prasanna Joseph",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nancy-prasanna-joseph/",
        "Designation": "Associate Professor",
        "Specialization": "English Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7320.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Padma Priya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-padma-priya/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7325.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Snehalatha M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-snehalatha/",
        "Designation": "Associate Professor",
        "Specialization": "Quantitative Aptitude and Logical Reasoning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7358.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Arul Dayanand S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-arul-dayanand/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied & Computational Linguistics, Educational Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7352.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Balamurugan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-balamurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7348.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Devendran M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-devendran-m/",
        "Designation": "Assistant professor",
        "Specialization": "English Language Teaching",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Devendran.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Kavitha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kavitha-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Indian Fiction",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/KAVI_-removebg-preview-1.png"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Krishna Kumari R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-krishna-kumari-r/",
        "Designation": "Assistant professor",
        "Specialization": "Formal Languages and Automata Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/2023-08-02-13-20-16-527.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Manikandan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manikandan-g/",
        "Designation": "Assistant professor",
        "Specialization": "MATHEMATICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/DSC_7339.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Mythreyi Koppur S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-mythreyikoppur/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude & Logical Reasoning, Statistical Inference, Data mining, Categorical Data Analysis, Bayesian Methods.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/myth-new-pic.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Nizamudeen",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nizamudeen-anvar/",
        "Designation": "Assistant Professor",
        "Specialization": "Human resource management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Nizam-pic-for-profile-compressed-edit-20230627211237.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Palanisamy L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-palanisamy-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Neural Networks, Dynamical System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PP2-1.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Preetha. M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-preetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7311.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Sethupathy K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sethupathy-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/02.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Shobhana Sree R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shobhana-sree-r/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/DSC_7318.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Sumathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-sumathi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7356.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Suresh P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-suresh-p/",
        "Designation": "Assistant professor",
        "Specialization": "Language Teaching, Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Suresh-Photo-scaled.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Dr. Vijayashree T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vijayashree-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/viji-removebg-preview.png"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Ari Ganapathy M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-ari-ganapathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7340.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Hari Narayana Rao B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-b-hari-narayana-rao/",
        "Designation": "Assistant Professor",
        "Specialization": "QUANTITATIVE APTITUDE & REASONING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7355.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Harinath I",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-i-harinath/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7342.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Jeremia M P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-p-jeremia/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude and Soft Skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7361.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Mahendran K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-mahendran/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7323.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Murali K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-murali/",
        "Designation": "Assistant Professor",
        "Specialization": "Training on Quantitative Aptitude & Reasoning for UG & PG students",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7310.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Muthumanivannan J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-j-muthumanivannan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7304.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Prathap Chandran R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-prathap-chandran/",
        "Designation": "Assistant Professor",
        "Specialization": "English",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7341.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Priyanand",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-priyanand/",
        "Designation": "Assistant Professor",
        "Specialization": "Soft skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/2023-08-02-12-17-41-162.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Rajesh Thulasidas",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-rajesh-thulasidas/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7307.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Rajkumar N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-n-rajkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude and Logical Reasoning , Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7345.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Roland Rencewigg P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-roland-rencewigg/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude, Rhetorical Devices, Rhetorical Analysis, Soft Skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7305.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Sakthivel R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-sakthivel/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7306.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Ami Femila P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-p-ami-femila/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude, Communication Training, Soft Skills Training",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7324.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. JananiPriyadharshini B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-b-janani-priyadarshini/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7312.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Jerlina I",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-i-jerlina/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7317.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Kavitha Srisarann",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-kavitha-srisaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Emotional Intelligence, Personality traits, Counseling Psychology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7333.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Mehernissa D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-d-mehernissa/",
        "Designation": "Assistant Professor",
        "Specialization": "Child Psychology, Women , sociology, soft skills trainer, employability skills, social engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7353.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Poorani G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-g-poorani/",
        "Designation": "Assistant Professor",
        "Specialization": "Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7314.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Rebecca Charles",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-rebecca-charles/",
        "Designation": "Assistant Professor",
        "Specialization": "Verbal Aptitude",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7338.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Sangeetha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-sangeetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7335.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mrs. Sudhandiradevi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-sudhandira-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantitative Aptitude and Logical Reasoning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/DSC_7362.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Ms. Lora S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-lora/",
        "Designation": "Assisstant Professor",
        "Specialization": "Communication English, Verbal Aptitude, Children's Literature, Postmodernism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7316.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Anbukkani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-anbukkani/",
        "Designation": "Verbal Aptitude Trainer",
        "Specialization": "Verbal & Aptitude & Soft Skills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7344.jpg"
    },
    {
        "DepartmentCode": 24109,
        "DepartmentName": "Career Development Centre (CDC-CET)",
        "FacultyName": "Mr. Hari Haran V K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-hari-haran-v-k/",
        "Designation": "Soft Skills Trainer",
        "Specialization": "Softskills",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_7301.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "FacultyName": "Dr. Sathish K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sathish-k/",
        "Designation": "Assistant Professor and HOD",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/3-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "FacultyName": "Deepalakshmi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-deepalakshmi/",
        "Designation": "Assistant Professor - OG",
        "Specialization": "English",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600479-new.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "FacultyName": "Dr. Aarthi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/119240/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-21-at-3.23.08-PM.jpeg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "FacultyName": "Dr. Elamathiyan E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-elamathiyan-e/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/6-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "FacultyName": "Dr. Muthu Deepa M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-muthu-deepa-m/",
        "Designation": "Assistant Professor",
        "Specialization": "English Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28900,
        "DepartmentName": "Career Development Centre (CDC-CSH)",
        "FacultyName": "Dr. Sam Israel S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sam-israel-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Postcolonial Literature and Marxism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/5133-scaled.jpg"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "FacultyName": "Dr. Paromita Chakraborty",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-paromita-chakraborty/",
        "Designation": "Professor and Head",
        "Specialization": "Centre for Research in Environment, Sustainability Advocacy and Climate Change",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/paromita.png"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "FacultyName": "Dr. Saravanakumar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-saravanakumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioenergy; Biofuels; Bio and thermochemical conversion",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Saravanakumar-A.jpeg"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "FacultyName": "Dr. Vanthana Sree G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vanthana-sree-g/",
        "Designation": "Scientist",
        "Specialization": "Nanotechnology for Environmental and Polymeric Application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/pic_page-0001.jpg"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "FacultyName": "Dr. Debasmita Bandyopadhyay",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-debasmita-bandyopadhyay/",
        "Designation": "Scientist",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 88175,
        "DepartmentName": "Centre for Research in Environment, Sustainability Advocacy and Climate CHange (REACH)",
        "FacultyName": "Dr. R. Suriyaprakash",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-suriyaprakash/",
        "Designation": "Scientist",
        "Specialization": "Environment and Sustainability",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/06/IMG_20230707_155449-scaled.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Dr. Parthiban V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-parthiban-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Yoga for students",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/parthiban-2023.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Dr. Dhanalakshmi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-k-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Dr. Laxmikanta Rana",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-laxmikanta-rana/",
        "Designation": "Assistant Professor in Yoga",
        "Specialization": "YOGA (Philosophy/ Therapy/ Education/ Psychology )",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Laxmikanta-Rana.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Dr. Manoraj P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manoraj-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Dr. Selvam A S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-selvam-a-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Yoga, Yoga Therapy, Varma Therapy, Game Yoga, Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Selvam-A-S.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Dr. Shanmugapriya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shanmugapriya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Shanmugapriya-M.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Dr. Vidhya Shankari S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vidhya-shankari-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr.-Vidhya-Shankari-S.jpg"
    },
    {
        "DepartmentCode": 40127,
        "DepartmentName": "Centre for Yoga",
        "FacultyName": "Mohanapriya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mohanapriya-p/",
        "Designation": "Teaching Associate",
        "Specialization": "Advanced yoga asanas , Hatha yoga,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/MOHANAPRIYA-CFY.jpeg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Ganapathy Subramanian L R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-r-ganapathy-subramanian/",
        "Designation": "Professor & HOD",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/HoD.png"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Senthilkumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-senthilkumar/",
        "Designation": "Professor",
        "Specialization": "Computational Fluid Dynamics, Aerodynamics, Heat Transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-SSK.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Selvakumaran T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-selvakumaran-t/",
        "Designation": "Associate Professor",
        "Specialization": "Solid propellant combustion",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-TS.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Sivakumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sivakumar/",
        "Designation": "Associate Professor",
        "Specialization": "Vibrations , Aero elasticity, Aircraft Structures, Finite Element Method, Aircraft maintenance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/s-sivakumar.png"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Allwyn K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-allwyn/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-KA.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Aravindh Kumar S M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-m-aravindh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Gas Dynamics, Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-SMA.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Gurusideswar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gurusideswar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering - Composite Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-Guru.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Kannan B T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kannan-b-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering - Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-BTK.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Kuchimanchi K Bharadwaj",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kuchimanchi-k-bhardwaj/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-KKB-1.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Malaikannan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-malaikannan-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Reentry Aerodynamics, Hypersonic Aerothermodynamics, Rarefied Gas Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/DSC_1311a.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Mohamed Arif R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-mohamed-arif/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/ARIF3.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Muthuram A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/muthuram-a/",
        "Designation": "Assistant Professor",
        "Specialization": "PROPULSION, AERODYNAMICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/MUTHURAM-PHOTO-with-blazer.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Saravanakumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-saravanakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering – Materials & Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/68.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Saravanan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-saravanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-12.19.54-PM.jpeg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Dr. Vignesh Kumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-vignesh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-MVK.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Mr. Bharat N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/bharat-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-Bharat.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Mr. Iynthezhuthon K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/iynthezhuthon-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-Iynthezhuthon.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Mr. Mahendra Perumal G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-mahendra-perumal/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-GMP-scaled.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Mr. Rajkumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-rajkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_3849.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Mr. Ravichandrakumar K B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ravichandrakumar-k-b/",
        "Designation": "Assistant Professor",
        "Specialization": "CFD application on Aerodynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr-KBR.jpg"
    },
    {
        "DepartmentCode": 13461,
        "DepartmentName": "Department of Aerospace Engineering",
        "FacultyName": "Mr. Vinayak Malhotra",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vinayak-malhotra/",
        "Designation": "Assistant Professor",
        "Specialization": "Aerospace Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Vinayak-Malhotra.jpeg"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "FacultyName": "Dr. Anbarassan A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-anbarassan/",
        "Designation": "Assistant Professor and HOD",
        "Specialization": "Agricultural Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr__Anbarassan.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "FacultyName": "Dr. Indhushree A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-indhushree-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "FacultyName": "Dr. Sathaiah M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sathaiah-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural and Natural Resource Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Sathaiah.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "FacultyName": "Dr. Selva rani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-selva-rani-m-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Dr.-Selva-rani-M.png"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "FacultyName": "Dr. Thulasiram R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thulasiram-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/SCANNED-PHOTO-scaled.jpg"
    },
    {
        "DepartmentCode": 114905,
        "DepartmentName": "Department of Agricultural Economics",
        "FacultyName": "Mr. Shyamsundar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-shyamsundar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "FacultyName": "Dr. Rajasekaran R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-rajasekaran/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Agricultural Extension",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rajsaekaran1.png"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "FacultyName": "Dr. Kungumaselvan T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kungumaselvan-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "FacultyName": "Dr. Mohanraj P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-mohanraj/",
        "Designation": "Assistant Professor",
        "Specialization": "ENGLISH",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/0U1A2992.jpg"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "FacultyName": "Dr. Muhammed Iqshanullah A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-muhammed-iqshanullah-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Extension",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Muhammed-Iqshanullah.jpg"
    },
    {
        "DepartmentCode": 114911,
        "DepartmentName": "Department of Agricultural Extension Education",
        "FacultyName": "Dr. Sasmitha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sasmitha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 28999,
        "DepartmentName": "Department of Agricultural Sciences",
        "FacultyName": "Dr. Murugan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-murugan/",
        "Designation": "Assistant Professor & Farm Manager",
        "Specialization": "Sericulture and Farm Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/dr-n-murugan.jpg"
    },
    {
        "DepartmentCode": 28999,
        "DepartmentName": "Department of Agricultural Sciences",
        "FacultyName": "Dr. Nisha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-nisha/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Nisha-R.jpg"
    },
    {
        "DepartmentCode": 28999,
        "DepartmentName": "Department of Agricultural Sciences",
        "FacultyName": "Shyamsundar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/shyamsundar-g/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Asoka Raja N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-asoka-raja-n/",
        "Designation": "Associate Dean and Professor",
        "Specialization": "Micro Irrigation water Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Asho-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Marimuthu S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-marimuthu-ph-d/",
        "Designation": "Assistant Professor HOD",
        "Specialization": "Agronomy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-S.-Marimuthu.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Archana H A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-archana-h-a-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Water Management, Geo informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/SRM-image1-scaled.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Balasubramaniyan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-balasubramaniyan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Jeyajothi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jeyajothi-r-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Agronomy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-R.-Jeyajothi.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Mohammed Ashraf A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mohammed-ashraf-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Dryland Agriculture, weed management, irrigation management ,organic farming, nutrient management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/90307-Dr.-A.-Mohammed-Ashraf-1.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Rajeshkumar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajeshkumar-a-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Integrated Farming System, Farming and Cropping systems, Weed Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajesh-kumar.jpeg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Ramadass S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ramadass-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Irrigation Management, Dryland Agriculture, Weed Management, Rice Agronomy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Ramadass.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Saravana Kumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-saravana-kumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Paddy, Nutrient management, Climate smart agriculture, Irrigation management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/saravana-photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114897,
        "DepartmentName": "Department of Agronomy",
        "FacultyName": "Dr. Sivakumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivakumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Conservation Agriculture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Sivakumar.jpg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Rajendran R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-rajendran/",
        "Designation": "Professor and Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Rajendran-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Chandradass J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-chandradass/",
        "Designation": "Professor",
        "Specialization": "Materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Chandradass-1.jpg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Leenus Jesu Martin M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-leenus-jesu-martin/",
        "Designation": "Professor",
        "Specialization": "Alternate Fuels, E Mobility",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Leenus-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Kamalakkannan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-kamalakkannan/",
        "Designation": "Associate Professor",
        "Specialization": "Noise Vibration Harshness, Suspension System, Vehicle Design and Development, Electric and Hybrid Vehicles",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/IMG-20230315-WA00061.jpg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Baskara Sethupathi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-baskara-sethupathi/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Engineering Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-03-16-at-15.57.04.jpeg"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Boopathi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-boopathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Energy, Bio-fuels",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Boopathi-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Carunaiselvane C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-carunaiselvane-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical Vehicle Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Carunaichelvan-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Nanthakumar A.J.D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-j-d-nanthakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Fluid Dynamics, Vehicle Dynamics, Simulation and Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Nanthakumar-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Prabhu C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-prabhu/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio-fuels , Emission control systems, Advanced Engine technology, Combustion kinetics, Low temperature combustion strategies for IC engines, Hydrogen based energy systems, Thermal Management of Automotive Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prabhu-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Prakash T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Automobile Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prakash-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Dr. Praveen Kumar T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-praveen-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Automotive Transmission Systems, Machine Learning, Fault Diagnosis of Automotive Components and Electric Vehicle Drive Systems, Fault Prognosis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Praveen-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Mr. Jerome Stanley M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-jerome-stanley/",
        "Designation": "Assistant Professor",
        "Specialization": "Internal Combustion Engine",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Jerome_Stanley_New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Mr. Kiran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-kiran/",
        "Designation": "Assistant Professor",
        "Specialization": "Waste to energy conversion, Bio fuel production, Alternate Fuels, Emission control systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Kiran-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Mr. Logeshwaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-logeshwaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Automobile Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Logeshwaran-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Mr. Madhan Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-madhan-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Automobile Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Madhan-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Mr. Naresh G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-g-naresh/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Naresh-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Mr. Palanivendhan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-palanivendhan/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Technology, Welding Technology, Principles of Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Palanivendhan-New.png"
    },
    {
        "DepartmentCode": 13458,
        "DepartmentName": "Department of Automobile Engineering",
        "FacultyName": "Mr. Yokeshwaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-yokeshwaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Vehicular Technologies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Yokeswaran-New.png"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "FacultyName": "Dr. Geetha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-geetha/",
        "Designation": "Associate Professor & Head",
        "Specialization": "Biochemical and Ecological Studies and Plant Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Geet-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "FacultyName": "Dr. Chandrasekaran P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-chandrasekaran-p-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Nutrient Physiology and Abiotic Stress Management in Plants",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Chan-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "FacultyName": "Dr. Ragunathan  T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ragunathan-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/07/0U1A29944.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "FacultyName": "Dr. Sathees Kumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sathees-kumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/0U1A299444.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "FacultyName": "Dr. Vanitha J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-vanitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Vani-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134568,
        "DepartmentName": "Department of Basic Sciences",
        "FacultyName": "Mr. Arunkumar J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-arunkumar-j/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Arun-itkm.jpg"
    },
    {
        "DepartmentCode": 23817,
        "DepartmentName": "Department Of Biochemistry",
        "FacultyName": "Dr. Nithya T G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nithya-t-g-2/",
        "Designation": "Professor and Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/600045.jpg"
    },
    {
        "DepartmentCode": 23817,
        "DepartmentName": "Department Of Biochemistry",
        "FacultyName": "Dr. Suganya I",
        "ProfileLink": "https://www.srmist.edu.in/faculty/suganya-i/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Untitled-scaled-e1719480795488.jpg"
    },
    {
        "DepartmentCode": 23817,
        "DepartmentName": "Department Of Biochemistry",
        "FacultyName": "Dr. Vijayalakshmi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Final-profile-pic-scaled-e1677910460489.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Varshini Karthik",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-varshini-karthik/",
        "Designation": "Professor and Head",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/VK-1.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Snekhalatha U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-u-snekhalatha/",
        "Designation": "Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0051_DSC_9254.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Angeline Kirubha S. P.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-p-angeline-kirubha/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.S.-P.-Angeline.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Ashok Kumar D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-ashok-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0066_DSC_9237.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Gnanavel S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-gnanavel/",
        "Designation": "Associate Professor",
        "Specialization": "Biomaterial and Artificial Organs, Nano composite, Biomedical Nano technology, Bio memes, Tissue engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0057_DSC_9248.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Jayanthi T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-jayanthi/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile-photo-website.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Anitha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-anitha/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Profile_Bio-Tech_0063_DSC_9241-2.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Ashwin Kumar N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-ashwin-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0061_DSC_9244.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Bhargavi Haripriya  A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-bhargavi-haripriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Bhargavi-Haripriya-A.png"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Kathirvelu D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-kathirvelu/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0064_DSC_9240.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Lakshmi Prabha.P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/lakshmi-prabha-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering ,Medical image processing, Machine Learning, Deeplearning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0052_DSC_9253-1.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Muthu P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-muthu-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.P.Muthu-Profile-Photo-10.04.2023-4.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Nijisha Shajil",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nijisha-shajil/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomedical Signal Processing, Biomedical Image Processing and Biomedical Instrumentation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Nijisha-Shajil-photo-1.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Remya Raj",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-remya-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/ramya.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Rohit Gupta",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rohit-gupta/",
        "Designation": "Assistant Professor",
        "Specialization": "Assistive and Rehabilitative System, Artificial Intelligence, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Profile_Bio-Tech_0059_DSC_9246-2.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Dr. Sruthi Ann Alex",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sruthi-ann-alex/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Sruthi-Ann-Alex-photo-2.jpg"
    },
    {
        "DepartmentCode": 13509,
        "DepartmentName": "Department of Biomedical Engineering",
        "FacultyName": "Ms. Oinam Robita Chanu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-oinam-robita-chanu/",
        "Designation": "Assistant Professor",
        "Specialization": "Point of care devices, Virtual Instrumentation, Biomechanics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-11.40.36.jpeg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Vairamani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-vairamani/",
        "Designation": "Dean, School of Bio Engineering",
        "Specialization": "Mass Spectrometry/Organic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Dr__Vairamani-Dean-Bio-a.png"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Lilly M Saleena",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-lilly-m-saleena/",
        "Designation": "Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0042_DSC_9264.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Ramkumar K. M.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-m-ramkumar/",
        "Designation": "Research Professor",
        "Specialization": "Cancer Biology, Metabolic Disorders",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0024_DSC_9287.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Selvamurugan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nagarajan-selvamurugan/",
        "Designation": "Research Professor",
        "Specialization": "Bone Biology, Breast Cancer, Stem Cell Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0048_DSC_9257.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Velmurugan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-velmurugan-d/",
        "Designation": "Research Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Profile_Bio-Tech_0047_DSC_9259.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Barathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-barathi/",
        "Designation": "Associate Professor",
        "Specialization": "Toxicology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0033_DSC_9276.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Devi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-devi/",
        "Designation": "Associate Professor",
        "Specialization": "Cancer Research and Stem Cell Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0040_DSC_9267.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Habeeb S. K. M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-k-m-habeeb/",
        "Designation": "Associate Professor",
        "Specialization": "Bioinformatics & Computational Biology, Genomics - Next Generation Sequencing, Computer Aided Drug Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Habeeb-S-K-M.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Iyappan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-iyappan/",
        "Designation": "Associate Professor",
        "Specialization": "Genetic Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0023_DSC_9288.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Jai Ganesh R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-jai-ganesh/",
        "Designation": "Associate Professor",
        "Specialization": "Animal Biotechnology, Microbial Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0068_DSC_9235.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Jayabrata Das",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jayabrata-das/",
        "Designation": "Associate Professor",
        "Specialization": "Nano-biosensor Technology for Point-of-care Diagnosis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0021_DSC_9290.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Megala J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-megala/",
        "Designation": "Associate Professor",
        "Specialization": "Cancer Biology, Human Genetics, Immunogenetics, Clinical Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0036_DSC_9272.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Mohan Kumar D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mohan-kumar-d/",
        "Designation": "Associate Professor",
        "Specialization": "Proteomics, Cancer biology and  Small molecule discovery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/06/IMG_7486_a-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Muthukumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-muthukumar/",
        "Designation": "Associate Professor",
        "Specialization": "Microbiology and Bioprocess Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0003_DSC_9310.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Nageswaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-nageswaran/",
        "Designation": "Associate Professor",
        "Specialization": "Medical Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0070_DSC_9233.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Pachaiappan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-pachaiappan/",
        "Designation": "Associate Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0094_DSC_9207.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Raja N. S.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-s-raja/",
        "Designation": "Associate Professor",
        "Specialization": "Molecular biology, Structural Biology, Membrane Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0025_DSC_9285.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Rajnish K.N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-n-rajnish/",
        "Designation": "Associate Professor",
        "Specialization": "Functional genomics, recombinant DNA technology, molecular microbiology Phone Number 91-44-27417817",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0022_DSC_9289.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Ramani K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-ramani/",
        "Designation": "Associate Professor",
        "Specialization": "Environmental Biotechnology, Industrial Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0019_DSC_9294.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Richard Thilagaraj W",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-w-richard-thilagaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Environmental Biotechnology, Environmental Sciences & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0093_DSC_9208.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Rupachandra S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-rupachandra/",
        "Designation": "Associate Professor",
        "Specialization": "Biochemistry, Immunology, Plant Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0004_DSC_9309-1.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Sahabudeen S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sahabudeen/",
        "Designation": "Associate Professor",
        "Specialization": "Cellular & Molecular Neuroscience, Pharmaceutical Biotechnology, Molecular Immunology, Tissue Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/SAHA-2022-1.jpeg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Sarada D. V. L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-v-l-sarada/",
        "Designation": "Associate Professor",
        "Specialization": "Plant Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DVL.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Senthilkumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-senthilkumar/",
        "Designation": "Associate Professor",
        "Specialization": "Plant Pathogen Interactions, Bioremediation, Defense-related proteins",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_0629-copy-1-e1711969701384.png"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Subhashini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-subhashini/",
        "Designation": "Associate Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0031_DSC_9278.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Sujatha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sujatha/",
        "Designation": "Associate Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0016_DSC_9297.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Swapna Geetanjali A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-swapna-geetanjali/",
        "Designation": "Associate Professor",
        "Specialization": "Molecular Biology, Plant virology, Plant Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0041_DSC_9265.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Venkatesan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-venkatesan/",
        "Designation": "Associate Professor",
        "Specialization": "Cell biology, Stem cell biology, Animal biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0015_DSC_9298.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Vinoth Kumar V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-vinoth-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Industrial Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0013_DSC_9300.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Amala Reddy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-amala-reddy/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0018_DSC_9295.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Anand Thiyagaraj",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anand-thiyagaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational biology, systems biology  and drug delivery systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0044_DSC_9262.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Anil Annamneedi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anil-annamneedi/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Neuroscience",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Profile_Bio-Tech_0002_DSC_9311-1.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Anju T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-anju/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioinspiration, Urolithiasis and  Nanotoxicology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Anju.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Balamurugan Srinivasan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/balamurugan-srinivasan/",
        "Designation": "Assistant Professor",
        "Specialization": "Microalgal Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/044A8934_Balamurugan-New-WebPage-scaled.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Bibin G Anand",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-bibin-g-anand/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Neurodegeneration and Protein Biophysics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Bibin-.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Dhanavathy G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-dhanavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Diabetes and Cancer, cancer stem cells, drug discovery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dhana.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Jaganathan M. K.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-k-jaganathan/",
        "Designation": "Assistant Professor ( Sr. G )",
        "Specialization": "Pharmaceutical Biotechnology, Toxicology, Environmental Toxicology, Bioinformatics, Molecular biology, Gene manipulation and vector biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Jaganathan_mk_photo.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Kanagaraj Palaniyandi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kanagaraj-palaniyandi/",
        "Designation": "Assistant Professor",
        "Specialization": "or Subject Cancer Biology, Stem cells, Endocrine related cancer, drug delivery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0028_DSC_9281.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Koustav Sarkar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-koustav-sarkar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0097_DSC_9204.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Lavanya J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0032_DSC_9277.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Meenakumari S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-meenakumari/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry and Medicinal Plants",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0084_DSC_9219.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Priya Swaminathan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/priya-swaminathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioinformatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0091_DSC_9211.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Radha P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-p-radha/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Industrial Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0010_DSC_9303.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Ramya Devi K T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-t-ramya-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Molecular Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/KTR-photo.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Rathinasabapathi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-rathinasabapathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Molecular diagnostics, Biosensor",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0045_DSC_9261.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Ravichandran Y",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-y-ravichandran/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Biotechnology, Drug design, Protein engineering, Bioprocess Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0012_DSC_9301.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Samuel Jacob B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-samuel-jacob/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioenergy, Environmental Biotechnology, Bioprocess Engineering, Waste to Wealth Strategies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0006_DSC_9307.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Satish Kumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/satish-kumar-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Biofilms and microbiomes (Probiotic & pathogen models), Nematology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Picture2-1.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Sivaramakrishnan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-sivaramakrishnan/",
        "Designation": "Assistant Professor",
        "Specialization": "Cancer Biology and Molecular cancer therapeutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0034_DSC_9275.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Sivashankari T. R.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-r-sivashankari/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0082_DSC_9221.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Subhashini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-subhashini/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Biotechnology and Genetics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0007_DSC_9306.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Vasantharekha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-vasantharekha/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0005_DSC_9308.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Venkatesh Prabhu M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-venkatesh-prabhu/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioprocess Engineering and Biochemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0069_DSC_9234.jpg"
    },
    {
        "DepartmentCode": 13505,
        "DepartmentName": "Department of Biotechnology",
        "FacultyName": "Dr. Gobi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-gobi/",
        "Designation": "Research Associate",
        "Specialization": "Microbiology & Environmental biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0058_DSC_9247.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Jesu Arockia Raj A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jesu-arockiaraj/",
        "Designation": "Professor and Head",
        "Specialization": "Toxicology & Pharmacology, Environmental Sciences, Molecular Immunology, Molecular Biology, Free Radical Biology, Fisheries Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Jesu_PS-Size-Photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Sankari D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-sankari/",
        "Designation": "Professor",
        "Specialization": "Biochemistry & Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/16-3-1-scaled-e1677910122361.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Infant Santhose B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-infant-santhose/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600306-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Parthipan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-parthipan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/6-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Pavan Kumar Dara",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pavan-kumar-dara/",
        "Designation": "Assistant Professor",
        "Specialization": "Protein Chemistry; Nanotechnology; Nutritional Biochemistry; Marine Biomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/6141-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Prasanth Bhatt N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-prasanth-bhatt/",
        "Designation": "Assistant Professor",
        "Specialization": "Aquaculture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/1-5.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Raja Ganesan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ganesan-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Raja-Ganesan.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Samuel Joshua Pragasam S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-samuel-joshua-prakasam/",
        "Designation": "Assistant Professor",
        "Specialization": "Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/5-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Senbagam D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/senbagam-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Microbial Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/IMG_54271-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Swamynathan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-swamynathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Animal Models, Toxicology and Nanobiotechnology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/17951-9940614794ab.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Thanigaivel S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thanigaivel-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Aquaculture and Nanobiotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG_20230223_193422-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Thirumurugan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-thirumurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/photo-e1711285828803.png"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Vidhya V.G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-g-vidhya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Proteomics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600087-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24092,
        "DepartmentName": "Department of Biotechnology – Science and Humanities",
        "FacultyName": "Dr. Vijaya Bharathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-vijaya-bharathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Biochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/3-4-scaled.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Suresh.K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-suresh/",
        "Designation": "Associate Professor and Head Incharge",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Suresh-K.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Rajesh M.P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-p-rajesh/",
        "Designation": "Professor",
        "Specialization": "Biochemical Engineering, Environmental Science and Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Rajesh-M-P.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Anandhakumar Sundaramurthy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-anandha-kumar/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Anand.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Tamilarasan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-tamilarasan/",
        "Designation": "Associate Professor",
        "Specialization": "Bioenergy Specialist | Waste to Energy | Shaping the Future of Sustainability",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0076_DSC_9227.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Vishali S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-vishali/",
        "Designation": "Associate Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/VISHALI-WHITE-BG.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Anbalagan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-anbalagan/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering, Energy Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Anbalagan-K.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Deepa K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-deepa/",
        "Designation": "Assistant Professor",
        "Specialization": "•Environmental Nanotechnology •Reaction Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/deepa-photo.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Kavitha E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/e-kavitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/profile-photo.jpeg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Keerthiga G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-keerthiga/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrochemical CO2 reduction, Photocatalytic redemption of waste water, Sensing of adulterants",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Keerthiga-G.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Kiruthika S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-kiruthika/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Kiruthika-S.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Magesh Kumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-magesh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Magesh-Kumar-M.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Muthamilselvi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-muthamilselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Muthamilselvi-P.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Nanditha D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-nanditha/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nanditha.jpeg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Poonguzhali E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-poonguzhali-e/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Poonguzhali-E-1.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Sam David S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sam-david/",
        "Designation": "Assistant Professor",
        "Specialization": "Application of multiphase system, Emulsion Liquid Membrane, Electrochemical System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Sam-David-600-x-600.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Selvam K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-selvam/",
        "Designation": "Assistant Professor",
        "Specialization": "Unit Operations in Chemical Engineering, Membrane Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Selvam-K.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr. Sofiya K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-sofiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Sofiya-K-1.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Mr. Ganesh V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-ganesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr.-Ganesh-V.jpg"
    },
    {
        "DepartmentCode": 13502,
        "DepartmentName": "Department of Chemical Engineering",
        "FacultyName": "Dr.Prabhakar.S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-prabhakar/",
        "Designation": "Adjunct Faculty",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Capture.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Arthanareeswari M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-arthanareeswari/",
        "Designation": "Professor & Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4006.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Ayyappanpillai Ajayaghosh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ayyappanpillai-ajayaghosh/",
        "Designation": "Shanti Swarup Bhatnagar Chair Professor",
        "Specialization": "Fluorescent materials, Photoresponsive materials, Organogels, Molecular probes, Covalent Organic Frameworks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4012.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Helen Annal Therese",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-helen-annal-therese/",
        "Designation": "Professor",
        "Specialization": "Chemistry, Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3977.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Immanuel Selvaraj Iykkiam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-immanuel-selvaraj-iykkiam/",
        "Designation": "Professor of Practice",
        "Specialization": "Polymers, Plastics, Intellectual Property, Innovation Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Immanuael-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Jagadeesh Malineni",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jagadeesh-malineni/",
        "Designation": "Professor of Practice",
        "Specialization": "Organic Synthesis , Medicinal Chemistry & Drug discovery",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jagdeesh.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Jeyalakshmi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-jeyalakshmi/",
        "Designation": "Professor",
        "Specialization": "Material Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3946.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Abirami N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-abirami/",
        "Designation": "Associate Professor",
        "Specialization": "Phytochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3982.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Ananthanarayanan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-ananthanarayanan/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3971.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Arockia Selvi J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-arockia-selvi/",
        "Designation": "Associate Professor",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3985.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Baburaj Baskar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-baburaj-baskar/",
        "Designation": "Associate Professor",
        "Specialization": "Synthetic Organic Chemistry, Bio-organic Chemistry, Chemical Biology and Medicinal Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3929.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Datta K. K. R.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-k-r-datta/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3972-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Devikala S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-devikala/",
        "Designation": "Associate Professor",
        "Specialization": "Chemistry  Phone Number 044 - 27427452270 EXTN 2604",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3979.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Ganesan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-ganesan/",
        "Designation": "Associate Professor",
        "Specialization": "Dye-sensitized solar cells",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/ganesan-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Ganesh Pandian M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-ganesh-pandian/",
        "Designation": "Associate Professor",
        "Specialization": "Medicinal Inorganic Chemistry,      Nanodrug delivery,       Bio-organometallic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4007.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Kalaivizhi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-kalaivizhi/",
        "Designation": "Associate Professor",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3978.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Kumaran V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-kumaran/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3926.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Maduraiveeran G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-maduraiveeran/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3931-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Maiyalagan T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-maiyalagan/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3997.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Prakash Muthuramalingam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prakash-muthuramalingam/",
        "Designation": "Research Associate Professor",
        "Specialization": "Theoretical/Computational Chemistry and Biology; Molecular Modeling Studies on Gas Adsorption, Catalysis, and Conversion using Ionic Liquids Based Composite Materials; Computer Aided Drug Design, Smart Drug Delivery, Molecular Mechanics, Molecular Dynamics and Simulations.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3925.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Priyadip Das",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-priyadip-das/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3927.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Samarendra Maji",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-samarendra-maji/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-passport-size-2024.jpeg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Senthil Andavan G. T.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-t-senthil-andavan/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/senthil-andavan-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Shanmugan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-shanmugan/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3976.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Soumyajit Ghosh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-soumyajit-ghosh/",
        "Designation": "Research Associate Professor",
        "Specialization": "Organic Crystal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Soumyajit-photo.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Sudha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-sudha/",
        "Designation": "Associate Professor",
        "Specialization": "Theoretical & Computational Electrochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4003.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Swami Anita",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-swami-anitha/",
        "Designation": "Associate Professor",
        "Specialization": "Inorganic and Materials Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3999.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Venkatramaiah Nutalapati",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-venkatramaiah-nutalapati/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Profile-Photo-2.jpeg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Abhijit saha",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-abhijit-saha/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic Chemistry/Chemical Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3951.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Abhilash Pullanchiyodan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-abhilash-pullanchiyodan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3959.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Anandhakumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anandhakumar-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Chemistry (Electrochemistry)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3958.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Anjan Bedi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anjan-bedi/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Physical Organic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. Anjan Bedi.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Anjan Das",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anjan-das/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3957.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Arulmozhi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-arulmozhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic Synthesis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3991.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Arun Prakash P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arun-prakash-p/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3952.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Clament Sagaya Selvam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-clament-sagaya-selvam/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Electrochemical Energy Conversion Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3961.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Dipankar Das",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dipankar-das/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3940.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Gopal Chandru Senadi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gopal-chandru-senadi/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organic Synthesis and Medicinal Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3963.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Gopinath P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-gopinath/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organic and Medicinal chemistry, Chemical biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3964.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Goutam Kumar Kole",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-goutam-kumar-kole/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3934.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Jayanta Samanta",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jayantasamanta/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Supramolecular Chemistry, Organic Cages and Frameworks, Molecular Recognition, Crystal Engineering, Single-crystal X_ray Crystallography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3923-e1713710940757.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. John Bosco A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-john-bosco/",
        "Designation": "Assistant Professor",
        "Specialization": "MATERIALS CHEMISTRY, SEMICONDUCTOR PHOTOCATALYSIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-A.-John-Bosco.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Karthik D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karthik-d/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organic semiconductors, organic electronics.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3995.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Karthikeyan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-karthikeyan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Chemistry/ Environmental Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3932.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Mariappan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mariappan-m/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "Biomimetic models of Heme Oxygenase and Vitamin B12 model systems. Water oxidation catalysts, Nucleic acid-Drug interaction, Anion and Cation Sensors-Bio-inorganic chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4011.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Mihir Ghosh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mihir-ghosh/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Chemistry, Organic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3937.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Natarajan Balasubramaniyan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-natarajan/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3950.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Naveen Malik",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-naveen-malik/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3935.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Palash Sanphui",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-palash-sanphui/",
        "Designation": "Assistant Professor",
        "Specialization": "Crystal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Palash-new-photo-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Panneerselvam Perumal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-panneerselvam-p/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "General Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3966.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Paradesi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-paradesi/",
        "Designation": "Assistant Professor",
        "Specialization": "Polymer Science, Fuel Cell, Analytical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-DP-.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Prasant Kumar Nayak",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prasant-kumar-nayak/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Electrochemistry, Physical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/prasant-kumar.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Pushpa Malini T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-pushpa-malini/",
        "Designation": "Assistant Professor",
        "Specialization": "Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3993.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Rahul Dev Mukhopadhyay",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rahul-dev-mukhopadhyay/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Supramolecular Chemistry, Stimuli-responsive materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3984.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Rahul Narayanan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rahul-narayanan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "My research area mainly focuses on Mass spectrometry, instrumentation and applications.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3965.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Rajorshi Das",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajorshi-das/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Organometallic chemistry, Supramolecular chemistry, Crystal engineering, Chemistry of intertwined and interlocked molecules",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3956.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Ravindran E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ravindran-e/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Chemistry - Material Chemistry for optoelectronics and biomedical application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3930.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Sivachandiran L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-sivachandiran/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Siva_photo-2024.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Sivakami M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-sivakami/",
        "Designation": "Assistant Professor",
        "Specialization": "Coordination Chemistry & Organic Synthesis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3990.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Sivaramapanicker Sreejith",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sreejith-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Bio Nano Systems, Organic Chemistry, Biological Imaging, Ultrasensitive Biosensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sreejith-Image-SRM-1-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Srinivasarao Kancharla",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-srinivasarao-kancharla/",
        "Designation": "Assistant Professor",
        "Specialization": "Physical and Inorganic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3973.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Sundaravadivel E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-sundaravadivel/",
        "Designation": "Assistant Professor",
        "Specialization": "Nano and Energy Advances",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3933.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Susnata Pramanik",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-susnata-pramanik/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3954.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Tanay Kundu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tanay-kundu/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3943.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Tapan Kumar Mistri",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tapan-kumar-mistri/",
        "Designation": "Assistant Professor",
        "Specialization": "Biophysical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3936.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Tarak Nath Mandal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tarak-nath-mandal/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3955.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Tumpa Sadhukhan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tumpa-sadhukhan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3989.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Vadivel S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vadivel-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3928.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Varathan E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-varathan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Computational Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/varathan.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Vedhanarayanan B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vedhanarayanan-b/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3944-e1713439979706.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Vengadesh Kumara Mangalam R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-vengadesh-kumara-mangalam/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3975.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. Pratim Kumar Chattaraj",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pratim-kumar-chattaraj/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/PKC-1-1.jpg"
    },
    {
        "DepartmentCode": 13543,
        "DepartmentName": "Department of Chemistry",
        "FacultyName": "Dr. V. Subramanian",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-subramanian-v/",
        "Designation": "Visiting Professor",
        "Specialization": "Theoretical and Computational Quantum Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/IMG_0201.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Prof. Augustine Maniraj Pandian G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-augustine-maniraj-pandian/",
        "Designation": "Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Augustine_Photo-Cream.jpeg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Ravichandran P.T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-t-ravichandran/",
        "Designation": "Professor & Head",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0714-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Annadurai R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-annadurai-2/",
        "Designation": "Professor",
        "Specialization": "Civil Engineering, Remote Sensing and GIS.  Phone Number 1470",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0806-scaled-e1667652590547.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Gunasekaran K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-gunasekaran/",
        "Designation": "Professor",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_K_Gunasekaran-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Satyanarayanan K. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-s-satyanarayanan-2/",
        "Designation": "Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0744-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Senthil Selvan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-senthil-selvan-2/",
        "Designation": "Professor",
        "Specialization": "Light Gauge Steel Structures, Seismic Design of Structures, High Performance Concrete, Steel Concrete Composite Structures, Pervious Concrete Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.SSS-Photo.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Sivakumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-sivakumar-2/",
        "Designation": "Professor",
        "Specialization": "Remote Sensing & GIS and Its Application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Siva.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Umamaheswari N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-umamaheswari/",
        "Designation": "Professor",
        "Specialization": "Structural Engineering/ Steel-Concrete Composite Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.-N.-Umamaheswari-1.jpeg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Aparna S. Bhaskar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-aparna-s-bhaskar-2/",
        "Designation": "Associate Professor",
        "Specialization": "Remote Sensing and GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. Aparna S. Bhaskar.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Balasubramanian M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-balasubramanian-2/",
        "Designation": "Associate Professor",
        "Specialization": "Construction Engineering & Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/1-1-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Divya Krishnan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-divya-krishnan-k-2/",
        "Designation": "Associate Professor",
        "Specialization": "Geotechnical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DKK-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Kannan Rajkumar P.R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-r-kannan-rajkumar-2/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG-0003-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Karuppasamy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-karuppasamy-2/",
        "Designation": "Associate Professor",
        "Specialization": "Digital Photogrammetry, Airborne Laser Terrain Mapping, Geomatics Surveying",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Karuppasamy_Sudalaimuthu_Website_SRM-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Krishnaraj L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-krishnaraj-2/",
        "Designation": "Associate Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/LKR-photo-1-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Nagalakshmi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-nagalakshmi-2/",
        "Designation": "Associate Professor",
        "Specialization": "Remote Sensing & GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0793-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Padma Rekha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-padma-rekha-2/",
        "Designation": "Associate Professor",
        "Specialization": "Transportation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0811-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Pannirselvam N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-pannirselvam-2/",
        "Designation": "Associate Professor",
        "Specialization": "Structural Engineering/ Steel-Concrete Composite Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pannirselvam-1024x683-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Prasanna K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-prasanna-2/",
        "Designation": "Associate Professor",
        "Specialization": "Civil Engineering with Specilization in Environmental Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.-K.-Prasanna-Photo-Website-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Purushothaman P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-purushothaman-2/",
        "Designation": "Associate Professor",
        "Specialization": "Geology, Environmental Geochemitry, Low temperature aqueous geochemistry, Stable Isotope Hydrology, Environmental Engineering, Environmental impact assessment",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0708-scaled-e1667652899113.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Ravi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-ravi/",
        "Designation": "Associate Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0769-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Sachikanta Nanda",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sachikanta-nanda-2/",
        "Designation": "Associate Professor",
        "Specialization": "Geology, Remote sensing & GIS, EIA, Disaster Management Studies, Surveying",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Sachikanta-Nanda-SRM-1.jpeg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Sathyanathan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-sathyanathan-2/",
        "Designation": "Associate Professor",
        "Specialization": "Water Resources Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Sathyanathan_SRM-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Satish Kumar J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-satish-kumar-2/",
        "Designation": "Associate Professor",
        "Specialization": "Remote sensing, Geology & GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0788-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Anandh K. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-s-anandh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/KSA-Photo-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Anandh S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-anandh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering & Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0756-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Arokiaprakash A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arokiaprakash-a-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0795-3-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Arunkumar C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-c-arunkumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0559-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Bhuvaneshwari M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/bhuvaneshwari-m-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering, Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0739-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Dhanasekar Sevugamoorthy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-dhanasekar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering-Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0864-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Durgadevagi Shanmugavel",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-durgadevagi-shanmugavel-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DD-Image.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Ganapathy Ramasamy N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-ganapathy-ramasamy/",
        "Designation": "Assitant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG_0742-3-scaled-e1667652695237.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Gopinath S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-gopinath-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering & Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0802-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Jaishree D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/jaishree-d-2/",
        "Designation": "ASSISTANT PROFESSOR",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0707-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Janani V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-janani-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Mechanics and Foundation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0717-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Justus Reymond D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-d-justus-reymond-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0711-justus-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Kamalanandhini M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kamalanandhini-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Remote Sensing and GIS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20231006-WA0005-e1710954522404.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Krishnaveni C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/c-krishnaveni/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineeirng",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0865-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Krithika P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-p-krithika-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0740-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Manikandaprabhu Alias Saravanan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manikandaprabhu-alias-saravanan-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Concrete technology, Structural engineering and Construction management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG_0689-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Manimaran A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-manimaran-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering, Remote Sensing and Geographical Information System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-4-scaled-e1680250195800.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Manivel S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-manivel-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Image-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Muthu Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-muthu-kumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil – Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/srm-faculty-profile-photo-smk-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Parthasarathi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-n-parthasarathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering (Structural Engineering)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0747-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Pavithra C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/pavithra-c-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0743-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Pradeep S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-pradeep-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0805-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Prakash Chandar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-prakash-chandar/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering And Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0688-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Prakash M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-prakash-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_0047-copy-e1680256989635.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Prasath Kumar V.R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-r-prasath-kumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. V. R. Prasath Kumar.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Rajkumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-raj-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/RAJKUMAR-DEPT-PHOTO-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Rajprasad J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-j-rajprasad/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Engineering and Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0679-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Ramasubramani R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-ramasubramani/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering with Specialization in Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0558-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Shaik Niyazuddin Guntakal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-shaik-niyazuddin-guntakal/",
        "Designation": "Assistant Professor",
        "Specialization": "Water Resources Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0702-2-Niyaz-Photo-for-faculty-profile-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Sindhu Nachiar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sindhu-nachiar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/PHOTO-2023-03-31-06-40-08.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Sridhar M.B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-b-sridhar/",
        "Designation": "ASSISTANT PROFESSOR",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/SRI-2021_Emanager.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Sudha C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-c-sudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Ms. C. Sudha.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Vimalanandan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-g-vimalanandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0686-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Dr. Vinu Prakash K. C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-c-vinu-prakash-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Vinu-sir-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Chezhiyan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/chezhiyan-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Geotechnical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Chezhiyan-S.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Premkumar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-g-premkumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0699-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Ramesh S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-ramesh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/ramesh.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Sabarigirivasan L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/l-sabari-giri/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Passport-Pic-2.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Senthil Kumar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-g-senthil-kumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/G.Senthil-kumar-2-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Sivaprakash G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sivaprakash-g-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Transportation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Website-1.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Syed Abdul Rahman S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-syed-abdul-rahman-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0750-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Thiagu H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-h-thiagu-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0760-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Vengadesh Subramanian S. A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-a-vengadesh-subramanian-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0800-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Ms. Jeyashree T.M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/t-m-jeyashree-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0738-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Ms. Karthiga S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/karthiga-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Structural Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG-0026-Original-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Ms. Mary Rebekah Sharmila",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-mary-rebekah-sharmila-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Civil/Geotechnical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0713-scaled.jpg"
    },
    {
        "DepartmentCode": 13216,
        "DepartmentName": "Department of Civil Engineering",
        "FacultyName": "Mr. Srinivasasenthil S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-srinivasasenthil/",
        "Designation": "Teaching. Asst",
        "Specialization": "Energy Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/IMG_0748-4-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Angayarkanni R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-angayarkanni/",
        "Designation": "Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/20-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Kavitha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-k-kavitha/",
        "Designation": "Associate Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/5-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Sankar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-sankar/",
        "Designation": "Associate Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Sankar-P.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Sridharan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-sridharan/",
        "Designation": "Associate Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Thilagaraj A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-thilagaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2-1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Akila B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-akila/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource Management, Company Law, Corporate Ethics, Banking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-3-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Antony Raj S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-antony-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/13-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Bhuvaneswari D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-d-bhuvaneshwari/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing & Entrepreneurship",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/19-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Deepan A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-deepan/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Deepan-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Elavarasan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-elavarasan/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Resource, Organizational Behaviour, Emotional Intelligence, CSR & Tax Reforms.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-Elavarasan-R.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Hemanathan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-hemanathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/7-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Jeevarathinam M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-jeevarathinam/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/extra-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Jenesiszodykha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jenesis-v/",
        "Designation": "Assistant Professor",
        "Specialization": "COMMERCE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/7321-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Lavanya Veeran",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-lavanya-veeran/",
        "Designation": "Assistant Professor",
        "Specialization": "Entrepreneurship, Human Resource Management and Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/14-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Monica K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-monica-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Financial accounting, Performance management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/1693810321925-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Praveen K B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-b-praveen/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-K-B-Praveen-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Prem Anand B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prem-anand-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Accounting & Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/IMG-20231007-WA0008-1.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Priya U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-u-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/8-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Sangeetha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-sangeetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/15-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Sivaperumal K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-sivaperumal/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/13-2-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Dr. Solomon Thangadurai J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-soloman-thangadurai/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/10-scaled.jpg"
    },
    {
        "DepartmentCode": 28850,
        "DepartmentName": "Department of Commerce",
        "FacultyName": "Mrs. Meerabai M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-meerabai/",
        "Designation": "Assistant Professor",
        "Specialization": "Commerce",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/4-2-scaled.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Annie Uthra R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-annie-uthra/",
        "Designation": "Professor and Head",
        "Specialization": "Cloud Computing , Machine Learning, Internet of Things, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Dr.R.-Annie-Uthra.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Lakshmi C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/c-lakshmi/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.C.Lakshmi-Profile_photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Maragatham G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-maragatham/",
        "Designation": "Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Emanager-_Maragatham_photo_final-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr.  Abirami M. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-s-abirami/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Pattern Recognition, Parallel and Distributed Computing, Internet of Things.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4393_M.S.Abirami.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Alice Nithya A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-a-alice-nithya/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Computer Vision, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Alice-Nithya.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Amudha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-amudha/",
        "Designation": "Associate Professor",
        "Specialization": "Deep Learning,Web Programming, Computer Networks , Wireless Sensor Networks, Mobile and Wireless Communication, Machine Learning,IOT,Any Programming language(C,C++,Java,Python)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4395.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Amuthadevi C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-amuthadevi/",
        "Designation": "Associate Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4328-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Arivazhagan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-arivazhagan/",
        "Designation": "Associate Professor",
        "Specialization": "Software engineering, DBMS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-15-at-3.23.44-PM.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Ferni Ukrit M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-m-ferni-ukrit/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ferni.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Hariharan B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-hariharn/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing , Machine Learning, Internet of Things, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4331.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Karthick S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-karthik/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining, Object Oriented Programming, Human Computer Interaction, Knowledge Based Systems, Computer Networks, TCP/IP Principles, Mobile Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4415-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Krishnaveni S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-krishnaveni-s/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security, Cloud Computing, IoT, Machine Learning and Deep Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4493.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Revathi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-revathi/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/10-1.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Saad Yunus Sait",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-saad-yunus-sait/",
        "Designation": "Associate Professor",
        "Specialization": "or Subject Computer Science Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4456.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sadagopan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sadagopan/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning in Computer Vision, Medical Image Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sadagopan-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Saravanan T R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-r-saravanan/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Computer networks, Mobile Computing, Information Retrieval",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4421.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. SelvaKumara Samy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-selva-kumara-samy/",
        "Designation": "Associate Professor",
        "Specialization": "AI and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4423-1-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Senthil Kumar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-senthil-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/senthil-kumar.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Shiny Angel T S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-s-shiny-angel/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, Data Mining, Computer Networks, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-15-at-9.01.27-AM.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Siva R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-siva/",
        "Designation": "Associate Professor",
        "Specialization": "Text Mining, Cloud Computing, Machine Learning, Internet of Things, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/7.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Snehalatha N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-snehalatha/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, Computer networks, Wireless networks, Artificial Intelligence, Machine Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_44041.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Uma M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-uma/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4339.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr.  Anupama C.G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-c-g-anupama/",
        "Designation": "Assistant Director International Relations, Assistant Professor",
        "Specialization": "Software Engineering, Software Verification and Validation, Big Data Analytics, Software Project Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4473.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Abijah Roseline. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-abijah-roseline/",
        "Designation": "Assistant Professor",
        "Specialization": "Cybersecurity, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4449.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Akshya Jothi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-akshya-jothi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Geometry, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Akshya-Photo.webp"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Amutha A.L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/amutha-a-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Analysis, Artificial Intelligence , Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/A-L-Amutha-recent-photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Angelin Claret .S.P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-p-angelin-claret/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning based Health care sectors, Component Based Technology, Digital Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Angelin_Profile_Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Anitha D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/anitha-d/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/College-profile-photo-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Anousouya Devi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anousouya-devi-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4444.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Antony Sophia N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-antony-sophia-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, AI & ML, Data Science, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4452.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Arun C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-c-arun/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Software Testing, Artificial Intelligence, Web Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4461.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Aruna S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/aruna-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4495-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Arunarani A R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ar-aruna-rani/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Image Processing, Machine Learning, Artificial Intelligence, Data Mining and Bio Informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4382.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Athilakshmi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-athilakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Bioinformatics, Big Data Analysis, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/athilakshmi_photo_new.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Athira. M. Nambiar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-athira-m-nambiar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Artificial Intelligence (18CSC305J), Digital Image Processing (18CSE353T), Deep Learning Techniques(18AIC301J)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4480.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Babu K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-babu/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4425.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Babu R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-babu-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4422.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Beaulah Jeyavathana R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-beaulah-jeyavathana/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Software Engineering.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4338-3.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Dhilsath Fathima M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-dhilsath-fathima/",
        "Designation": "Assistant Professor",
        "Specialization": "Healthcare Informatics, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/103125.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Dinesh G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dinesh-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Cognitive Radio Networks, Mobile Computing, Data Science, Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_-Dinesh-G.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Geetha P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-geetha-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Green Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr-P-Geetha.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Gopinath N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gopinath-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantum Cryptography, Data Structures, Information Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4420.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Gopirajan PV",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gopirajan-pv/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning, Artificial Intelligence, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Gopirajan-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Grace Shalini T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-grace-shalini-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/9.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Illakiya T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-illakiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Medical image processing, Computer Vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/photo.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Jackulin Mahariba A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-jackulin-mahariba/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, GIS, and Algorithm Design and Analysis.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4464.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Jayakanth J J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-j-jayakanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Robotics, Embedded Software development, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/J-J-Jayakanth.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Jeyasudha J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-jeyasudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Social Media Analytics, Text Processing,Machine Learning and Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4499.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Joseph James S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-joseph-james/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Theory of Computation, Compiler Design, Big Data Analytics, Design and Analysis of Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Joseh-Profile_photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Jothi B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/b-jothi/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4492-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Kaavya Kanagaraj",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kaavya-kanagaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Image and Video Processing, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4363.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Kamal Kishor Choure",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kamal-kishor-choure/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/kk.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Kanimozhi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-kanimozhi/",
        "Designation": "Assistant Professor",
        "Specialization": "ARTIFICIAL INTELLIGENCE, MACHINE LEARNING AND DEEP LEARNING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Kanimozhi-new.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Kanipriya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kanipriya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4379.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Karpagam M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karpagam-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4354.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Kiruthika M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kiruthika-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4497.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Maheshwari A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-maheshwari/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4399.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Maheswari M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-maheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Analytic/Networking/Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Maheswari-Profile-photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Maivizhi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-maivizhi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Area Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4426.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Manikandan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manikandan-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing Load Balancing, Machine Learning Predictions, AI using Health Informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4332.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Meenakshi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-meenakshi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mobile communication, Sensor networks, cloud computing,  Operating systems.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Meena-pic-Final-pic.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Mohandas R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-mohandas/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/mohan.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Nagendra Prabhu S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-nagendra-prabhu/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Cloud Computing, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4457.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Naveen P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-naveen-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/2-6.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Om Prakash P G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-g-om-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Web Mining, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/8.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Pitchai Manickam B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-pitchai-manickam/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Bio Inspired Algorithms, Optimization Techniques, Topology Control.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4344.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Poongothai E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-poongothai/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Machine Learning, Image processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4364-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Prince Chelladurai S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prince-chelladurai-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography, Network Security, Web Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Dr.-Prince-Chelladurai-S.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Pritam Khan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pritam-khan/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Analytics, Internet of Things, Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4416.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Prithi Samuel",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prithi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/Prithi-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Priyadharshini G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-priyadharshini-g/",
        "Designation": "Assistant Professor (Jr)",
        "Specialization": "Machine Learning,Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4439-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Raguvaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/raguvaran-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/3-1-1.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Reshmy A K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-k-reshmy/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/Untitled-1.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Robert Singh A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-robert-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4357-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sakthi U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-u-sakthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/SAKTHISRMPROFILE-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sakthitharan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sakthitharan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization Algorithms, Robotics Maneuvering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sakthi.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Salomi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-salomi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Analytics, Wireless Sensor Networks and Mobile & Web Application Development.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/DSC_4378.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sanjit Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sanjit-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Structures, C Programming, Python Programming, and Digital Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sanjit.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Saranya A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-saranya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-05-at-12.40.16-PM-1.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Saranya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-saranya-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning and IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4358.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sherin Shibi C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-sherin-shibi/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Image Processing, Deep Learning, Remote Sensing, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/SHERIN-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sheryl Oliver A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sheryl-oliver-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4372.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sivaji Satrasupalli",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivaji-satrasupalli/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sivashankar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivashankar-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Federated Learning, Applied Artificial intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4460.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sridevi Ponmalar. P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sridevi-ponmalar-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Soft Computing, Nature Inspired Algorithms, Data Science.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4352.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sudha Rajesh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sudha-rajesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Data Mining and Software Engineering.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Dr.-Sudha-Rajesh-Profile-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Sumathy G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sumathy-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.Sumathy-website-photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Suresh K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-suresh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Deep Learning, Soft Computing, Artificial Intelligence, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr_K_Suresh_Photo.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Tamilmani G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tamilmani-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4451.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Udendhran",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-udendhran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/photo-1-2.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Usharani R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-usharani-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Deep Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4346.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Velliangiri S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-velliangiri/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/9K3A0432-a.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Vidhya B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vidhya-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Vijayalakshmi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4361-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Vimal S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-vimal/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, IoT, P2P Blockchain, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_20240418_214225-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Vimaladevi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-vimaladevi/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Engineering and Project Management, Software Architecture, Software Quality Management, Software Design, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4362.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Dr. Vinston Raja R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vinston-raja-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/PhotoRoom-20230928-222337.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mr. Kaviyaraj R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-kaviyaraj-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Augmented Reality, Virtual Reality, Mixed Reality,  and Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4430.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mr. Manoj Kushwaha",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-manoj-kushwaha/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning and Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4432.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mr. Mitul Sudhirkumar Nagar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-mitul-sudhirkumar-nagar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/mitul.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mr. Prabhakaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-prabhakaran-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4455.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mr. Senthilkumar M K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/senthilkumar-m-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/5.png"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mrs. Aarthy K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-aarthy-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Oracle Certification",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4419.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mrs. Ezhilarasi J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-j-ezhilarasi/",
        "Designation": "Assistant Professor (Jr)",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4414.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mrs. Kavitha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-kavitha-v/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/KAVI-PROFILE-PHOTO.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mrs. Nithya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-nithya-p-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Cyber Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/New-Photo.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mrs. Shaik Rasheeda Begum",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-shaik-rasheeda-begum/",
        "Designation": "Assistant Professor (Jr)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4443.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mrs. Sukanya  Varshini K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-sukanya-varshini-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sukanya-Photo-1.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mrs. Vidhya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-vidhya-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Text Mining,Data Mining, Cloud Computing, Machine Learning , Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-31-at-9.04.35-AM.jpeg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Ms. Sasi Rekha Sankar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sasi-rekha-sankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Engineering, Artificial Intelligence, machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4348.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Ms. Vidhya J V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-v-vidhya-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet Of Things, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/J.V. Vidhya.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Mr. Suresh Kumar C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/suresh-kumar-c/",
        "Designation": "Teaching Associate",
        "Specialization": "Natural Language Processing , Deep Learning and Machine Learning and Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_20220212_110430.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Ms. Indumathi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-indumathi/",
        "Designation": "Teaching Associate",
        "Specialization": "Skilled in Analytical Skills, Data Analysis, Deep Learning and Machine learning, Amazon Web Services (AWS), R, and Tableau, Python, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4356.jpg"
    },
    {
        "DepartmentCode": 13534,
        "DepartmentName": "Department of Computational Intelligence",
        "FacultyName": "Obaidat Mohammad S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/obaidat-mohammad-s/",
        "Designation": "Visiting Distinguished Professor, Life Fellow of IEEE, Fellow of AAIA and Fellow of SCS",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/obai.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Albert Antony Raj S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-albert-antony-raj/",
        "Designation": "Professor and Deputy Dean",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr-Albert-S-scaled-e1683695480367.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Jayashree R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-jayashree/",
        "Designation": "Associate Professor and Head",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/8-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Ananthi Claral Mary T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ananthi-claral-mary-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Ananthi-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Anita Smiles J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/anita-smiles-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9407-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Anwar R Shaheen",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anwar-r-shaheen/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/1-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Arunarani S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-arunarani-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Belina V J Sara S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-belina-v-j-sara/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/7337-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Brindha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/brindha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/IMG-20231010-WA00101.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. CHANTHINI P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-chanthini/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Neural Network, Bio-inspired Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/3-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Devagnanam J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-devagnanam-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Devagnanam-J.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Elangovan V R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-elangovan-v-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9425-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Helen D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-helen/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/5-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. John Britto M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/john-britto-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5122-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Kamalakumari J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-kamalakumari-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/3-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Kiruthiga R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kiruthiga-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Dr.R.Kiruthiga-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Lakshmi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-lakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Mothilal Nehru G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mothilal-nehru-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5126-copy-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Nisha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-nisha/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240328-WA0003.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Nithya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nithya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-30-at-3.54.33-PM.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Pandiyan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-pandiyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Assistant Professor",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/13-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Sathya K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sathya-k/",
        "Designation": "ASSISTANT PROFESSOR",
        "Specialization": "COMPUTER APPLICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/5119-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Shanthi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shanthi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "COMPUTER APPLICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/4-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Sivakumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sivakumar-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/7-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Srividhya B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/srividhya-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-28-at-12.47.52-1.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Sudha M R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sudha-m-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Thilagavathy R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-thilagavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/6-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Thilaka A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thilaka-a/",
        "Designation": "Assistant Professor",
        "Specialization": "COMPUTER APPLICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/thilaka.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr. Usha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-usha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/usha-2.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Dr.Nagarajan B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/nagarajan-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/WhatsApp-Image-2023-08-28-at-10.05.16-AM.jpeg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Mr. Venkata Subramanian J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-venkata-subramanian/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/11-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Ms. Kanmani K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-k-kanmani/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kan-website-photo-4.jpg"
    },
    {
        "DepartmentCode": 24094,
        "DepartmentName": "Department of Computer Applications",
        "FacultyName": "Ms. Ramla M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-m-ramla/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/9-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Kalpana G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-kalpana/",
        "Designation": "Professor & Head",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Kalpana-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Arul Leena Rose.P.J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-j-arul-leena-rose/",
        "Designation": "Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/photoleena-1.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Muthulakshmi.P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-muthulakshmi/",
        "Designation": "Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/SMTPM-2-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Aarthi. E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-aarthi-e/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science - DBMS, PHP/Mysql",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/A-29823.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Elangovan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-elangovan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.D.Elangovan-profile-pic-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Juhi Reashma S.R.K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-juhi-reashma-s-r-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-01-11-at-1.19.01-PM.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Kanchana S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-kanchana/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Mining, Block Chain, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Kachana-Maam.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Kavitha P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kavitha-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/9422-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Mahalakshmi. B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mahalakshmi-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-11-at-1.19.28-PM.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Nathiya T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nathiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning, IOT, Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-16-at-8.00.32-PM-1.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Ramesh. M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/6-scaled.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Revathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-revathi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/IMG-20240111-WA0002.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Sabeen S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sabeen-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/sabeen-srm-profile-photo-1.jpg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Sweety Bakyarani E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sweety-bakyarani/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-02-24-at-10.37.20.jpeg"
    },
    {
        "DepartmentCode": 23797,
        "DepartmentName": "Department of Computer Science",
        "FacultyName": "Dr. Yoga Lakshmi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-yogalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/11-2-scaled.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Pushpalatha M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-pushpalatha/",
        "Designation": "Professor & Head",
        "Specialization": "Wireless Networks, Internet of Things and Data Analytics, Edge Computing, Quantum Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pushpalatha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Amutha B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/amutha-b/",
        "Designation": "Professor",
        "Specialization": "5G, Cognitive Radio, SDN, IoT, Wireless Computing, Smart Cities",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/amutha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Indhumathi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-indhumathi-r/",
        "Designation": "Professor",
        "Specialization": "Theoretical Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Indumathi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Malathi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-malathi/",
        "Designation": "Professor",
        "Specialization": "Artificial Neural Networks and Digital Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Malathi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Minu R I",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-i-minu/",
        "Designation": "Professor",
        "Specialization": "Computer vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Minu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Murali M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-murali/",
        "Designation": "Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Murali-M.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Niranjana G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-niranjana/",
        "Designation": "Professor",
        "Specialization": "Image Processing, Pattern Recognition, Networks and Data Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/niranjana-e1716472946340.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Pongiannan R K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-k-pongiannan/",
        "Designation": "Professor",
        "Specialization": "Power Electronics and Drives, Energy and Embedded Systems, Soft Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pongiannan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Poovammal E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/e-poovammal/",
        "Designation": "Professor",
        "Specialization": "Data Mining/ Big Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poovammal.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ramamoorthy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-ramamoorthy/",
        "Designation": "Professor",
        "Specialization": "Cloud Computing, Big Data Analytics, Data Mining, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramamoorthy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sridhar S S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-s-sridhar/",
        "Designation": "Professor",
        "Specialization": "Computer Science Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/SSS.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Akilandeswari P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-akilandeswari/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Akila.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Arthi B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-arthi/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, Artificial Intelligence, Machine Learning, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arthi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Aruna M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-aruna/",
        "Designation": "Associate Professor",
        "Specialization": "AI / ML  |  Computer Vision  |  IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Aruna.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Babu S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-babu/",
        "Designation": "Associate Professor",
        "Specialization": "Software Engineering, IOT, WSN",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Babu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Baranidharan B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-baranidharan/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Wireless Sensor Networks, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Baranidharan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Baskar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-baskar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks and Security(CSE)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Baskar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Deeban Chakravarthy V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-deeban-chakravarthy/",
        "Designation": "Associate Professor",
        "Specialization": "Software Defined Networking, Cloud Computing & IOT.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deeban.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Dorathi Jayaseeli J D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-d-dorathi-jayaseeli/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dorathi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Gnanavel S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-gnanavel-2/",
        "Designation": "Associate Professor",
        "Specialization": "Multimedia transmission on Wireless Networks Internet of Things  cloud security. Machine Learning cyber security  cloud computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gnanavel.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Godfrey Winster S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-godfrey-winster/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Godfrey.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jebakumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jebakumar-r/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jebakumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jeya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-jeya/",
        "Designation": "Associate Professor",
        "Specialization": "Data structures, System Programming, Compiler Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jeya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jeyasekar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-jeyasekar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jeyasekar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jothi Kumar C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-jothi-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jothikumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kalaivani J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-kalaivani/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kalaivani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kanchana M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-kanchana/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Image Processing, Pattern Recognition, Data Mining,Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanchana.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kanisha B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-kanisha/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Block chain Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanisha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kavitha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-kavitha/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining and Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kavitha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kowsigan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-kowsigan/",
        "Designation": "Associate Professor",
        "Specialization": "Computing Systems, Internet of Things, Theoretical Computer Science and Computational Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kowsigan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Madhavan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-madhavan/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks, Data Structures and algorithm, Object Oriented Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Madhavan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Manoranjitham T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/t-manoranjitham/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoranjtham.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Murali P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-murali-2/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Murali-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Muruganantham B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-muruganantham/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/BM.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Padmini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-padmini/",
        "Designation": "Associate Professor",
        "Specialization": "Application of Machine Learning and Deep Learning Techniques to real world problems,Solar Thermal Desalination,Demand Side Management in Microgrid",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Padmini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Pandian A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-pandian/",
        "Designation": "Associate Professor",
        "Specialization": "Text processing, Information Retrieval and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pandian.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ponmagal R S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-s-ponmagal/",
        "Designation": "Associate Professor",
        "Specialization": "Web services, Cloud Computing , IoT, Data Science and Big Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ponmgal.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Poornima S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-poornima/",
        "Designation": "Associate Professor",
        "Specialization": "Data Analytics and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poornima.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Pradeep Mohankumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-pradeep-mohan-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks, Network Security, Cryptography, Operating System, Data Structures.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pradeep-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Pradeep S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-pradeep/",
        "Designation": "Associate Professor",
        "Specialization": "Internet of Things, Machine Learning and Deep Learning, Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/pradeep.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Rajkamal R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-rajkamal/",
        "Designation": "Associate Professor",
        "Specialization": "Data Science, Machine Learning, Deep Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajkamal.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ramalingam V V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-v-ramalingam/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0039-e1685240833363.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sandhia G K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-k-sandhia/",
        "Designation": "Associate Professor",
        "Specialization": "Cryptography and Network Security, Cloud Computing, Machine Learning, Quantum Cryptography.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sandhya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Saranya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-p-saranya/",
        "Designation": "Associate Professor",
        "Specialization": "Medical Image processing, Deep learning, Machine Learning, Artificial Intelligence, Wireless Sensor Networks, Big Data.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/P-Saranya-e1716520944506.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Selvaraj P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-selvaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvaraj.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Selvin Paul Peter J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-selvin-paul-peter/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvin.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Senthil Kumar T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/t-senthil-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "CSE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthil-Kumar-T.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sindhu Chandra Sekharan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sindhu-c/",
        "Designation": "Associate Professor",
        "Specialization": "Regional Language Computing, Indian Temple Sculpture Iconography, Epigraphy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sindhu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sivakumar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-sivakumar/",
        "Designation": "Associate Professor",
        "Specialization": "IoT,Machine learning, cloud computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSCN2036-scaled.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sreekumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-sreekumar/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Sensor Networks, Machine Learning, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sreekumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Subalalitha C N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/subalalitha-c-n/",
        "Designation": "Associate Professor",
        "Specialization": "Natural Language Processing, Machine Learning, Discourse Analysis and Computational Linguistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Subalalitha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Suchithra M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-suchithra/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Cloud Computing, System Security, Computer Vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. M. Suchithra.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Thenmozhi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-thenmozhi/",
        "Designation": "Associate Professor",
        "Specialization": "Networks, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/thenmoni.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Uma Maheswari K M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-m-uma-maheswari/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/uma.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Umadevi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-umadevi/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining, Information Retrieval",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Umadevi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Usha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-usha/",
        "Designation": "Associate Professor",
        "Specialization": "or Subject Network Security, Wireless Networks, Cryptography, Big data Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Usha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vijaya K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-vijaya/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijaya-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vijayakumaran C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-vijayakumaran/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Vision,  Computer Networks and Quantum Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijayakumaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Abhijit Saha",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-abhijit-saha-2/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Fuzzy set theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/abhijit.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Abirami G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-abirami-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks, Green computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Abirami.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ajanthaa Lakkshmanan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ajanthaa-lakkshmanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Aajaatha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Alice K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-alice/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing and Deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Alice.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Amirthasaravanan A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-amirthasaravanan-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Fog Computing,Cloud Computing,Networks,Operating Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Amithrasaravan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Anbarasi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-anbarasi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks,  Web Service,  Software Engineering,  Internet of Things (IOT),  Machine Learning,  Deep Learning,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anbarasi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Anbazhagu U V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-u-v-anbazhagu/",
        "Designation": "Assistant Professor",
        "Specialization": "Big Data Analytics, Artificial Intelligence and Machine Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anbazhagu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Angayarkanni V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-angayarkanni-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Image and video processing, Compressed Sensing, video encoders, Wireless Multimedia Sensor Networks, Free space optics, Wireless communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Angayarkanni.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Anita R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-anita/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering, Natural Language Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/anita.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Anitha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anitha-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Machine Learning, Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anitha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Anto Arockia Rosaline R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-anto-arockia-rosaline/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Science, Data Analytics, Text Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anto.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Arul Prakash M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-arul-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain, Mobile Crowd Sensing, Mobile Crowd Sourcing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arulprakash.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Arulalan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-arulalan-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Video Processing, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arulalan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Arulmurugan A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arulmurugan-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Information security, Data Mining Techniques, AI & ML, Web Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/arulmurugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Arun V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arun-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Security in Adhoc Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arun-V.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Arunachalam N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-arunachalam/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning and Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Arunachalam.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ashokkumar C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-ashok-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ashok-Kumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ashwini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ashwini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ashwini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Aswathy K Cherian",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-aswathy-k-cherian/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/aswathy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Bakkialakshmi V S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-bakkialakshmi-v-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Affective Computing, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bakkialakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Balamurugan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-g-balamurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Balamurugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Bhargavi G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-bhargavi-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bhargavi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Bibin Christopher V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-bibin-christopher/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Bibin.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Brindha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Brinda-R-E.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Briskilal J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-briskilal-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Natural Language Processing, Machine Learning ,Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Briskilal.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Deeba K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-deeba/",
        "Designation": "Assistant Professor",
        "Specialization": "Theory of computation, Neural networks, Pattern Recognition",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deeba.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Deepa R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-deepa-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision,Artificial Intelligence and Machine Learning,Semantic Web",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/deepa.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Deepajothi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-deepajothi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deepajoothi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Devipriya A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-devipriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Devipriya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Eliazer M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-eliazer/",
        "Designation": "Assistant Professor (Senior Grade)",
        "Specialization": "Big data Analytics, Optical Routing, Database system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Eliazer.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Gayathri M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-gayathri/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gayathri.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Geetha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-geetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Spatial Data Mining, Intelligent Databases, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Geetha-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Geetha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-geetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Geetha-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Girirajan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-girirajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Girirajan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Gokulakrishnan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gokulakrishnan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Web Services,Information Security, Network Security, Computer Vision and Machine Learning and Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gokulakrishnan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Gokulnath C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gokulnath-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Health Data Analytics, Machine Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Gokulnath.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ida Seraphim B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/b-ida-seraphim/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Machine Learning, Image Processing, Cryptography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ida.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Iniyan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-iniyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Iniyan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jagadeesan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-jagadeesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jagathesan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jagadeesh M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jagadeesh-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/04.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jane Olive Sharon P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-p-jane-olive-sharon/",
        "Designation": "Assistant Professor",
        "Specialization": "Graph Theory, Machine Learning, AI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jane.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jansi K R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-r-jansi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jansi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jayapradha J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-jayapradha/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining and Analysis, Object Oriented Analysis and Design, Operating System, Software Engineering principles, Database Management System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jayapradha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Jesline",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jesline-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jesline.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kandan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-kandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/kandan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Karthikeyan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Deep Learning  and Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Karthikeyan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Karthikeyan U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-u-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantum Computing, Networks, Cloud Computing, IoT and Precision Agriculture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Karthikeyan-U.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kavisankar L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-kavisankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security, Blockchain, Computer Network, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSCN3134-scaled-e1682523753169.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kirubanantham P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kirubanantham-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Web Services and Service Oriented Architecture, Machine Learning, Computer Vision and Geo Infomatic Systems.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kirubanantham.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Kishore Anthuvan Sahayaraj K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-kishore-anthuvan-sahayaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kishore.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Lavanya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-r-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Big data analytics, Web service, Service oriented Architecture, Wireless networks.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Lavanya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Lubin Balasubramanian",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-lubin-balasubramanian/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization Algorithms, Wireless Sensor Networks, Web Services, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Lubin-Balasubramanian.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Madhumitha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-madhumitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Underwater Acoustic Communication, Deep Learning, Incremental Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Madhumita.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Madhura R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-madhura-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Distributed Computing Systems, Fog Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/madhura.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Malarselvi G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-g-malarselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Malarselvi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Manju A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-manju/",
        "Designation": "Assistant Professor",
        "Specialization": "Quantum inspired optimization, Control systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manju.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Manjula R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-manjula/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining , Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manjula.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Manoj Kumar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/gunupalli-manoj-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoj-G.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Manoj Kumar Rana",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manoj-kumar-rana/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Simulation and Modeling in ns-3 system, New Protocol/Scheme Design and Performance Analysis of them in the 5G and 6G Mobile Communication Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Manoj.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Mathan Kumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mathan-kumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mathan-Kumar-M.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Muralidharan C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-muralidharan/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muralidharan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Muthu Kumaran A M J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-m-j-muthu-kumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Muthukumaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Nagadevi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-nagadevi/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Distributed Computing, Databases, Web Programming, HPC, Web Services , Semantic Web",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nagadevi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Nalini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nalini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nalini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Nancy P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-nancy/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Structures, Operating Systems, Machine Learning, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/nancy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Nikkath Bushra S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nikkath-bushra-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Big Data, machine learning, deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/nikkath.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Nithiya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-nithiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0031.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Nithiyanandam N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-nithiyanandam/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Network",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithiyanandam.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Nithyashri J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-nithyashri/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing Techniques, Pattern Recognition Techniques, Machine Learning, Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithyasri.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Padmapriya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-padmapriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Artificial Intelligence, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Padmapriya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Pandiaraj A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pandiaraj-a/",
        "Designation": "Assistant Professor",
        "Specialization": "NLP, Machine Learning, Data Mining.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Pandiraj.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Prakash B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prakash-B.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Pretty Diana Cyril C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-pretty-diana-cyril/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Internet of Things, Block Chaining, Machine Learning, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/pretty.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Priya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/priya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Priyadharshini K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-priyadharshini-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Priyadharshini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Raghavendra V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-raghavendra-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Raghavendra-V.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ragunthar T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-ragunthar/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Analytics and  Human Computer Interaction + Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/raguthar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Rajalakshmi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-rajalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Biometrics, Network Security, Computer Networks, Image processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajalakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Rajasekaran P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-rajasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security,Pervasive Computing,Dynamic Power Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajasekaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Rajmohan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajmohan-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Network",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rajmohan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Rama P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rama-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, DeepLearning, Data Science, Artificial Intelligence, Wireless Sensor Networks, Computer Networks, Cloud Computing, Internet of Things, Block Chaining.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rama-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ramaprabha J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-j-ramaprabha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Machine Learning, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0063-e1685240775726.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ramesh S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramesh.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ramkumar Jayaraman",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ramkumar-jayaraman/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Broadband Networks (3G / 4G), Cloud Computing, Cloud based Radio Access Network (C-RAN)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramkumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Ramya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud computing, Machine Learning, Optimization Techniques, Renewable Energy sources",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramya-G.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Revathi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-m-revathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography and Network Security, Cyber Security, Software Defined Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/revathi-m.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Robert P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-robert-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/robert.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sankara Narayanan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sankara-narayanan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sankara-Narayanan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Santhanakrishnan C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/c-santhanakrishnan/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "IoT, Computer Networks, Virtual Reality, Bio Inspired Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Santhu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Saranya V S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-saranya-v-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saranya-V-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Saravanan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-saravanan-3/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saravanan-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Saravanan Santhanam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-saravanan/",
        "Designation": "Assistant Professor",
        "Specialization": "AI and Machine learning, Big data Analytics and Data mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saravanan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sathyapriya L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-sathyapriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sathyapriya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Senthil Kumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-senthil-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Theory of Computation, Compiler Design, Artificial Intelligence, Design and Analysis of Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthilkumar-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Senthil Raja M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-senthil-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Senthil-Raja.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Shanmugam S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-shanmugam/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shanmugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Shibu N V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-v-shibu/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shibu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Shiju Kumar P S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/shiju-kumar-p-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Wireless Sensor Network and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shiju-Kumar-P-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Shiny Irene D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-shiny-irene/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Decision Support Systems, Health Care Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shiny.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Shoba LK",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-k-shoba/",
        "Designation": "Assistant Professor",
        "Specialization": "IMAGE PROCESSING, ARTIFICIAL INTELLIGENCE, MACHINE LEARNING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Shoba.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sibi Amaran",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sibi-amaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sibi-Amaran.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sindhuja M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sindhuja-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sindhuja.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sivakumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sivakumar-3/",
        "Designation": "Assistant Professor",
        "Specialization": "Sentiment Analysis, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sivakumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sivakumar T K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/t-k-sivakumar/",
        "Designation": "Assistant Professor(Sr.Gr)",
        "Specialization": "Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sivakumar-T-K.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Snehasish Ghosh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-snehasish-ghosh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Geocomputing and Geoinformatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Snehasish-Ghosh.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sowmiya B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/b-sowmiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Operating system, Data mining, Software Engineering, OOPS, Blockchain, etc./ CSE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Sowmiya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Srinivasan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-srinivasan/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing, Computer Vision, Database Management Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/srinivasan2-2.jpeg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Subash R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-subash/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet Of Things, Social Internet Of Things, Data Mining, Networking and Blockchain",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Subash.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Suganiya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-suganiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Signal Processing, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/suganiya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Suresh Anand M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-suresh-anand/",
        "Designation": "Assistant Professor",
        "Specialization": "Computing Technologies ,School Of Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Suresh-Anand.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Suresh M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-sures/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/suresh.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Sworna Kokila M. L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-l-sworna-kokila/",
        "Designation": "Assistant Professor",
        "Specialization": "CSE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/sworna.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Thamizhamuthu R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-thamizhamuthu/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Computer Vision, Big Data analytics, Artificial Intelligence, Text mining, Social network Analysis.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thamizhamuthu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Thilagavathy R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-thilagavathy-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Natural Language Processing,  Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thilagavathy.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vaidhehi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-vaidhehi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data mining and Big data",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Vaidhehi_Profile.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vanusha D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-vanusha/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/vanusha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Velmurugan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-velmurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Testing, IoT, Image Processing, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Velmurugan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vidhya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-vidhya/",
        "Designation": "Assistant Professor",
        "Specialization": "Learning Analytics, Big Data, Machine Learning and Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhya-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vidhya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-vidhya/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhya-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vidhyalakshmi M K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vidhyalakshmi-m-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vidhyalakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vijayalakshmi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vijayalakshmi-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijayalakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Viji D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-d-viji/",
        "Designation": "Assistant Professor",
        "Specialization": "Big data analytics, Data mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/VIJI.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vijiyakumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vijiyakumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vijiyakumar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vinod D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-vinod/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vinod.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vinoth N A S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-vinoth-n-a-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/vinoth.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Vivek Justus",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vivek-justus/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Dr. Yamini R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-yamini/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Yamini.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Anand M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-anand-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Anand.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Gowtham R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/gowtham-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Gowtham-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Jishnu K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/jishnu-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Engineering, Artificial Intelligence, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Jishnu-K-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Mani Deepak Choudhry",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-mani-deepak-choudhry/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Cyber-Physical Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/mani-scaled-e1715237963689.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Prabu S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-prabu-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prabu.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Prabu Shankar K C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-c-prabu-shankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Security and Privacy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prabushankar.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Prakash U M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-u-m-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio Statistics and Machine learning Algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/prakash.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Rohit Ravi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/rohit-ravi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5217.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Saminathan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-saminathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saminathan.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Thamizhikkavi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-thamizhikkavi-p-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography, Python, Networking.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thamizhikkavi-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mr. Thanigaivelu P S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-thanigaivelu-p-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Thanigaivelu-P-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Babeetha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/babeetha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5175.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Brindha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-r-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Big Data and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Brinda-R.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Deluxni N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/deluxni-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Deluxni-N.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Divya Mohan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-divya-mohan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/divya.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Kanmani S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-kanmani-sivagar/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Computer Networks, Operating Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kanmani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Maria Nancy A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-maria-nancy/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG-20230406-WA0046-e1685240602766.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Nithyakani P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-nithyakani/",
        "Designation": "Assistant Professor",
        "Specialization": "Visual Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Nithyakani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Poonkodi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-poonkodi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Poonkodi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Ramya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-ramya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT Security, DeepbLearning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ramya-M-1.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Ranjani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-m-ranjani/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning , Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/ranjana.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Rekha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-rekha-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing, Deep Learning, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Rekha.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Renuka devi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-renuka-devi-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Renuka-devi-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Saranya S S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-s-saranya/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Saranya-S-S.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Selvameena P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-selvameena-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Selvameena-P.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Sorna Lakshmi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-sorna-lakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Sornalakshmi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Soshya Joshi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-soshya-joshi/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Soshya-Joshi.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Swathi Mirthika G L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/swathi-mirthika-g-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Knowledge Graph, Graph Theory, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Swathi-Mirthika-G-L.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Vathana D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-vathana/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep learning,Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vathana.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Mrs. Vetriselvi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vetriselvi-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vetriselvi-D.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Ms. Hema M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-m-hema/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Hema.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Ms. Janani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-janani-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Janani.jpg"
    },
    {
        "DepartmentCode": 13519,
        "DepartmentName": "Department of Computing Technologies",
        "FacultyName": "Ms. Sudestna Nahak",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sudestna-nahak/",
        "Designation": "Assistant Professor",
        "Specialization": "Signal Processing, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5182.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Lakshmi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-lakshmi/",
        "Designation": "Professor & Head",
        "Specialization": "Machine Learning,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4325.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Ganesh Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-ganesh-kumar/",
        "Designation": "Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4236.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Kavitha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-kavitha/",
        "Designation": "Professor",
        "Specialization": "Data Mining and Digital Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4251.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Murugan A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-murugan/",
        "Designation": "Professor",
        "Specialization": "Computer Science & Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dr-murugan-a.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Sasikala E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/e-sasikala/",
        "Designation": "Professor",
        "Specialization": "Network Security, Wireless Sensor Networks, Intelligent Techniques",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4250.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Vadivu G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-vadivu/",
        "Designation": "Professor",
        "Specialization": "Deep Learning, Machine Learning, Big Data Analytics, Social Network Analytics, Semantic Web",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4242.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Arthi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-arthi/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence, Web Application Development, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4316.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Hemavathi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-hemavathi/",
        "Designation": "Associate Professor",
        "Specialization": "Distributed Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4262.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Karthick T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-karthick/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud, Webservices, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4306.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Karthik P C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-c-karthik-2/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4245.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Prakash M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-prakash/",
        "Designation": "Associate Professor",
        "Specialization": "Data Analytics, Machine Learning, Cloud Computing, Information Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4302.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Priyadarsini K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-priyadarsini/",
        "Designation": "Associate Professor",
        "Specialization": "Data Analytics, Information Security, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_-K_Priyadarsini.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Rajasekar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-rajasekar/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Data Compression, Computer Programming, Computer Graphics, HCI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/raja-website.png"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Rajeswari D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-rajeswari/",
        "Designation": "Associate Professor",
        "Specialization": "Big data Analytics, Cloud Computing, Evolutionary algorithms, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4310.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Rajkumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-rajkumar/",
        "Designation": "Associate Professor",
        "Specialization": "Artificial Intelligence and Expert Systems, Brain Computer Interface, Microprocessor and Microcontrollers Object oriented analysis and design Compiler design Soft computing Machine learning Genetic Algorithm.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4317.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Shantha Kumari K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-shantha-kumari/",
        "Designation": "Associate Professor",
        "Specialization": "Data Science for Good, Healthcare Informatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4240.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Shanthini A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-shanthini/",
        "Designation": "Associate Professor",
        "Specialization": "Data Science, Machine Learning, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4266.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Sharanya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-sharanya/",
        "Designation": "Associate Professor",
        "Specialization": "Data Science and Business Systems, School of Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4264.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Shobana Devi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-shobana-devi/",
        "Designation": "Associate Professor",
        "Specialization": "Bigdata Analytics, Machine Learning and Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4280.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Sornalakshmi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-sornalakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "Big Data Analytics, Stream Computing, Optimization, Reinforcement Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4312.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Suchitra S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-suchitra/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Vision, AI, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4274.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Veeramakali T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-veeramakali/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Learning, Image Processing and Cognitive Radio Network.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4270.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Anand M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-anand-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4257.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Anita Jasmine R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-anita-jasmine/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4294.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Archana K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-s-archana/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4285.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Arikumar K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-s-arikumar/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4254.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Arthy M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arthy-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4292.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Arunsundar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-arunsundar/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Communication, Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4295.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Chinnasamy A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/74244/",
        "Designation": "Assistant Professor",
        "Specialization": "VANET,IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4303.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Dhanasekaran K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-dhanasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4247.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Divya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-divya/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/photo-11.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Elangovan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-elangovan/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Analytics and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4300.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Elumalaivasan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-elumalaivasan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning, Security in Computing and Networks, Machine Learning, and Block Chain Technology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4258.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Geetha Jenifel M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-geetha-jenifel-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/photo.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Jayaraj R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-jayaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Networks, Machine Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4313.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Jeba Sonia J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-jeba-sonia/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr-Jeba-Sonia-photo.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. John Deva Prasanna D S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-john-deva-prasanna-d-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4318.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Kalpana A V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-v-kalpana/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Science, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4273.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Kanmani P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-kanmani/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4241.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Kavitha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kavitha-v-2/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT , WSN",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4282.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Manikandan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-manikandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, AI &ML",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4244.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Mercy Theresa",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mercy-theresa/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Image Processing, Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4291.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Monica Bhavani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-monica-bhavani/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/WhatsApp-Image-2023-05-24-at-10.23.13-AM.jpeg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Nadana Ravishankar T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nadana-ravishankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Data Mining and Computer communication & Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4255.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Nandhini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nandhini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4284.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Panimalar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-panimalar/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization in Wireless sensor networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/hhh.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Paul T Sheeba",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-paul-t-sheeba/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Vision, Machine Learning, Block Chain",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/3.Photo-1.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Prabakar D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prabakar-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4297.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Prabhu kavin B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-prabhu-kavin/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography, Data Security, Cloud Computing, Cyber Security, Machine Learning, Deep Learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4301.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Prasanna V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prasanna-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4288.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Premalatha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-premalatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Biometrics, Pattern Recognition, Health Care",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4504.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Radha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-radha/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4269.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Ragupathi T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ragupathi-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Deep learning,Machine Learning,Cloud Computing,IoT & Web Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4249.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Rajakani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajakani-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Image Processing, Programming",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4296.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Rajalakshmi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajalakshmi-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Networking, Wireless Networks, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4287.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Rajkumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajkumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4260.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Ramprasath M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-ramprasath/",
        "Designation": "Assistant Professor",
        "Specialization": "Question answering system, Information Retrieval, Semantic similarity, Machine learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4256.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Rehash Rushmi Pavitra A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rehash-rushmi-pavitra-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4286.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Sasikumar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sasikumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4243.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Shobana J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-shobana/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4290.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Shri Bharathi SV",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sv-shri-bharathi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4502.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Siva Kumar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-siva-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain, Cloud Security, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4259.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Srividhya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/srividhya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, DBMS, Data Structures",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4272.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Subashini B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-subashini-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4278-1.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Suthanthira Devi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-suthanthira-devi-p-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Artificial Intelligence, Data Analytics, Rumor analysis in online social network",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-02-at-12.34.06-PM.jpeg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Syed Ismail A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-syed-ismail-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Security, Blockchain. Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4252.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Tamizhselvan C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-tamizhselvan/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4298.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Varun P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-varun-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Security, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4299.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Venkatesh S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-venkatesh-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Database Management System, Software Engineering, Object Oriented Programming, Computer Networks, Operating System, Cryptography and Network SecurityImage Processing, Network Security, Data Science ,Big data ,Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4323.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Vijayalakshmi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-v-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4268.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Wilson Prakash S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-wilson-prakash-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Software Defined Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4246.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Mrs. Sindhu S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-sindhu/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Data Analytics, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4263.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Mrs. Yasotha B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-yasotha-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4289.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Praveen Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-praveen-kumar-s/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "Deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4261-1.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Dr. Vasudevan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-vasudevan-n/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4321.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Mrs. Anna Anbumozhi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-anna-anbumozhi/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "Deep Learning, Machine Learning, Internet of Things.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4279.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Mrs. Mythili R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-mythili-r/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "Data Analytics,  Machine Learning,  Information Visualization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4253.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Mrs. Praveena Anjelin D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-praveena-anjelin-d/",
        "Designation": "Assistant Professor - Jr.G",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4277.jpg"
    },
    {
        "DepartmentCode": 13537,
        "DepartmentName": "Department of Data Science And Business Systems",
        "FacultyName": "Mr. Neelakandan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-neelakandan-r/",
        "Designation": "Teaching Associate",
        "Specialization": "Deep Learning, Big Data and Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4238.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "FacultyName": "Dr. Surendran D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-surendran/",
        "Designation": "Assistant Professor and HOD",
        "Specialization": "Defence and Strategic Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/600566-DS-F1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "FacultyName": "Prof. Nedunchezhiyan VP",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-nedunchezhiyan-vp/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PP-Photo-1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "FacultyName": "Dr. Mohammad Yusuf",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mohammad-yusuf/",
        "Designation": "Assistant Professor",
        "Specialization": "Defence and Strategic Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/2-4-scaled.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "FacultyName": "Dr. Prabhu Dass Batvari B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prabhu-dass-batvari-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Prabhu-1.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "FacultyName": "Dr. Ramakrishnan Ramani",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ramakrishnan-ramani/",
        "Designation": "Adjunct Faculty",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/RAM_F.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "FacultyName": "Mr. Anoop Ajith M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-anoop-ajith-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Defence and Strategic Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/aj-.jpg"
    },
    {
        "DepartmentCode": 24100,
        "DepartmentName": "Department of Defence and Strategic Studies",
        "FacultyName": "Mr. Beno Jones J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-beno-jones/",
        "Designation": "Assistant Professor",
        "Specialization": "Defence and Strategic Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/DSC_9979.-scaled.jpg"
    },
    {
        "DepartmentCode": 23887,
        "DepartmentName": "Department of Economics",
        "FacultyName": "Dr. Prakash V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prakash-v/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.-Prakash-NSS-Programme-CoordinatorV-1.jpg"
    },
    {
        "DepartmentCode": 23887,
        "DepartmentName": "Department of Economics",
        "FacultyName": "Dr. Gopi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gopi-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Gopi-Photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23887,
        "DepartmentName": "Department of Economics",
        "FacultyName": "Dr. Stephy Christina  S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-stephy-christina-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Vijayakumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-vijayakumar/",
        "Designation": "Dean I/C SEEE and Head",
        "Specialization": "Power Electronics Applications in Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.-Vijayakumar-K.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Bharatiraja C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-bharatiraja/",
        "Designation": "Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/C-Bharatiraja-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Preetha Roselyn J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-preetha-roselyn/",
        "Designation": "Professor",
        "Specialization": "Power systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/preetha1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Rathinam A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-rathinam/",
        "Designation": "Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr-A-Rathinam-1.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Sridhar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-sridhar/",
        "Designation": "Professor",
        "Specialization": "Power Electronics in Renewable Energy Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Sridhar-new-photo-e1666003497770.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Arun Noyal Doss M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-arun-noyal-doss/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0568-1-scaled-e1690787247991.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Boopathi C S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-s-boopathi/",
        "Designation": "Associate Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0658-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Chellammal N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-chellammal/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Chellammal_Photo_2021-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Divya Navamani J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-divya-navamani/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and Industrial Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Personal-photo1.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Jagabar Sathik M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-jagabar-sathik/",
        "Designation": "Associate Professor",
        "Specialization": "Analysis, modeling, and control of power converters for renewable energy based applications.(DC/AC converters, DC/DC convertersetc.)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/My-lastest-Photo-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Jeyashree Y",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-y-jeyashree/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0609-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Kalaiarasi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-kalaiarasi/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0673-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Mohanraj K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-mohanraj/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_0570-scaled-e1691581506118-909x1024-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Narayanamoorthi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-narayanamoorthi/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Power Transfer, Electric Vehicle, Machine Learning, FBG Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0678-3-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Saravanan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-saravanan/",
        "Designation": "Associate Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. K. Saravanan.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Sattianadan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-sattianadan/",
        "Designation": "Associate Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Sattianadan-3.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Sowmmiya U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-u-sowmmiya/",
        "Designation": "Associate Professor",
        "Specialization": "Grid integration issues with renewable sources,Power converter design, control and power transfer techniques in drive systems.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0641-scaled-e1665757898454.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Subramani C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-subramani/",
        "Designation": "Associate Professor",
        "Specialization": "Power Systems  Mail subramac@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. C.Subramani.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Suchitra D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-suchitra/",
        "Designation": "Associate Professor",
        "Specialization": "Power System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile-Pic-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Anitha D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-anitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-07-30-at-9.29.22-PM.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Anuradha C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/c-anuradha/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.C.Anuradha-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Balaji C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-balaji/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics, Renewable energy systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2222.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Dominic Savio A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-dominic-savio/",
        "Designation": "Assistant Professor",
        "Specialization": "Electric Vehicle Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DSC_1494-copy-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Femi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-femi/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Femi-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Geetha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-geetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/gee-photo-new-e1665573654782.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Geethanjali S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-geethanjali/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/20230406_200425-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Ilambirai R C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-c-ilambirai/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_R_C_Ilambirai.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Kalyanasundaram V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-kalyanasundaram/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Sytems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0646-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Kanakaraj P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-kanakaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/5Y0A0384.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Karthikeyan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20211216-WA0009-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Kubendran V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-kubendran/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0589-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Lavanya A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Power electronics and industrial drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/ALA-new-photo-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Lourdu Jame S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-lourdu-jame/",
        "Designation": "Assistant Professor",
        "Specialization": "Energy conservation and management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/SLJ.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Naveen C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-naveen/",
        "Designation": "Assistant Professor",
        "Specialization": "Renewable Energy, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0574-1-768x569-1-e1690786074435.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Nithya C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/c-nithya/",
        "Designation": "Assistant Professor",
        "Specialization": "Power systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0608-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Palanisamy R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-palanisamy/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/palanisamy-r-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Phani Teja Bankupalli",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-phani-teja-bankupalli/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/phani-pic.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Poornima P U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-u-poornima/",
        "Designation": "Assistant Professor",
        "Specialization": "power electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/P. U. Poornima.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Pradeep V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-pradeep/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives  Mail pradeepv@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/pradeep-v.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Rajarajeswari R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-rajarajeswari/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/IMG_0612-300x200-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Ramya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0583-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Ravi Eswar K M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ravi-eswar-k-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0580-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Sadees M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-sadees/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Untitled.png"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Selvabharathi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-selvabharathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Selva_Photo-1.jpeg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Selvakumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-selvakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/DSC_1419-1-scaled-e1678075283775.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Senthil Kumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-senthil-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power electronics & drives, Digital signal processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_0572-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Shanmugapriya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-shanmugapriya/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0624-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Subha Sharmini K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-subha-sharmini/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "Electronics and Control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/20211216_100853-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Suresh P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-suresh-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.P.Suresh-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Sureshkumar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-a-sureshkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Electrical and Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/IMG_0656-1536x1024-1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Thamizh Thentral T M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-m-thamizh-thentral/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/TMT_DP_PH_1.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Usha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-usha/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0662-1-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Uthra R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-uthra-r/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Power Electronics & Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/RU2-2.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Vidyasagar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-vidyasagar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Systems Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/SVS-photo-new-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Vijayalakshmi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics and Drives",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr_S_Vijayalakshmi.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Dr. Vinothkumar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-b-vinothkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/IMG_0650-scaled.jpg"
    },
    {
        "DepartmentCode": 9087,
        "DepartmentName": "Department of Electrical and Electronics Engineering",
        "FacultyName": "Mr. Ravichandran D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-d-ravichandran/",
        "Designation": "Assistant Professor",
        "Specialization": "Power System Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/MY_PHOTO_REDUCED.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Shanthi Prince",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shanthi-prince/",
        "Designation": "Professor & Head",
        "Specialization": "Optical Communication and Bio-Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/100215-Dr.-Shanthi-Prince.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Akbar S.A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-a-akbar/",
        "Designation": "Chief Scientist and Professor AcSIR (retd.)",
        "Specialization": "Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_S_A_Akbar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Aruna Priya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-aruna-priya/",
        "Designation": "Professor",
        "Specialization": "Nano Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100213-Dr.-P.-Aruna-Priya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Dhanalakshmi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-dhanalakshmi/",
        "Designation": "Professor",
        "Specialization": "Computer Vision, Biomedical Image / Speech, Signal Processing / Machine Learning / Deep Learning / Sensors / FBG",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101911-Dr.-S.-Dhanalakshmi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Eswaran P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-eswaran/",
        "Designation": "Professor",
        "Specialization": "MEMS, Embedded System design, IoT, Avionics, Computer vision and Image Processing, Robotics, Industrial automation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100251-Dr.-P.-Eswaran.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Kumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-kumar/",
        "Designation": "Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Kumar-Photo-Passport.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Malarvizhi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-malarvizhi/",
        "Designation": "Professor",
        "Specialization": "Wireless 5G, B5G communication, massive MIMO, VLSI architecture for (massive) MIMO algorithms, RF circuit design, Machine and deep learning for images and medical images.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. S. Malarvizhi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Manimegalai C T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-c-t-manimegalai/",
        "Designation": "Professor",
        "Specialization": "Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100224-Dr.-C.T.-Manimegalai.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Rama Rao T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-rama-rao/",
        "Designation": "Professor",
        "Specialization": "Mobile & Wireless Communications/ Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100210-Dr.T.-Ramarao.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Ramachandran B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-ramachandran/",
        "Designation": "Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100206-Dr.-B.-Ramachandran.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sangeetha M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-sangeetha/",
        "Designation": "Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100258-Dr.-M.-Sangeetha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Selvakumar J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-selvakumar/",
        "Designation": "Professor",
        "Specialization": "VLSI and Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100232-Dr.J.-Selvakumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vidhyacharan Bhaskar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vidhyacharan-bhaskar/",
        "Designation": "Adjunct Professor",
        "Specialization": "Electrical Communication Engineering and Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dr_vidhyacharan_bhaskar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vijayakumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-vijayakumar/",
        "Designation": "Professor",
        "Specialization": "Signal processing, Machine learning, Deep learning, cognitive radio and intelligent system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100271-Dr.-P.-Vijayakumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Ceronmani Sharmila. V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ceronmani-sharmila-v/",
        "Designation": "ASSOCIATE PROFESSOR",
        "Specialization": "Cyber Security and Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Sharmi-SRM.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Dayana R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-dayana/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100261-Dr.-R.-Dayana.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Deepa T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-deepa/",
        "Designation": "Associate Professor",
        "Specialization": "Digital Signal Processing, Digital Communication & Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100259-Dr.-T.-Deepa.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Diwakar R. Marur",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-diwakar-r-marur/",
        "Designation": "Associate Professor",
        "Specialization": "Digital Image Processing, Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. Diwakar R. Marur.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Kalimuthu K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-kalimuthu/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. K. Kalimuthu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Karthik T S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karthik-t-s/",
        "Designation": "Associate Professor",
        "Specialization": "Computational VLSI, EDA & Device Modelling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7046-3.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Krithiga  S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-krithiga/",
        "Designation": "Associate Professor",
        "Specialization": "Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100867-Dr.-S.-Krithiga.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Latha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-latha/",
        "Designation": "Associate Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101503-Dr.S.-Latha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Manjula J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-manjula/",
        "Designation": "Associate Professor",
        "Specialization": "VLSI Design, RF Circuit Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100227-Dr.-J.-Manjula.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Manohari  R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-manohari/",
        "Designation": "Associate Professor",
        "Specialization": "Embedded systems, Optical signal processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100211-Dr.-R.-Manohari.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Maria Jossy A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-maria-jossy/",
        "Designation": "Associate Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100238-Dr.A.-Maria-Jossy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Nithya V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-nithya/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Communication, Wireless sensor networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Dr.-V.-Nithya-Profile-Photo.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Rajalakshmi T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-rajalakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "Biomedical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100748-Dr.T.-Rajalakshmi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Rajesh Agarwal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajesh-agarwal/",
        "Designation": "Associate Professor",
        "Specialization": "Solid State Devices, Thin Film Transistor, Analog Circuit Design, Digital Electronics, Integrated Circuit Technology, Microelectronic Fabrication Techniques and Characterization, Organic Electronics, Flexible and Wearable Electronics, and Organic Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102436-Dr.-Rajesh-Agarwal.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Roji Marjorie S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-roji-marjoie-s/",
        "Designation": "Associate Professor",
        "Specialization": "Microelectronics, High power MOSFETs, Semiconductor devices, TCAD modelling of semiconductor devices, VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/ROJI-3.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Ruhan Bevi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-ruhan-bevi/",
        "Designation": "Associate Professor",
        "Specialization": "Embedded Systems Technologies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100226-Dr.-A.-Ruhan-Bevi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Subhashini J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-subhashini/",
        "Designation": "Associate Professor",
        "Specialization": "Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100229-Dr.-J.-Subhashini.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Susila M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-susila/",
        "Designation": "Associate Professor",
        "Specialization": "Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100221-Dr.-M.-Susila.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vasanthi M.S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-s-vasanthi/",
        "Designation": "Associate Professor",
        "Specialization": "Electronics and Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100216-Dr.-M.S.-Vasanthi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Yuvaraj S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-yuvaraj/",
        "Designation": "Associate Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101281-Dr.-S.-Yuvaraj.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Aditya Nath Bhatt",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-aditya-nath-bhatt/",
        "Designation": "Assistant Professor",
        "Specialization": "Microelectronics and VLSI, Nanotechnology, and Organic Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102964-Dr.-Aditya-Nath-Bhatt.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Ananya Parameswaran",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ananya-parameswaran/",
        "Designation": "Assistant Professor",
        "Specialization": "MICROWAVE ENGINEERING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/ANU_NEW_1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Anilet Bala A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-a-anilet-bala/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101334-Mrs.-A.-Anilet-Bala.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Arijit Bardhan Roy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arijit-bardhan-roy/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102980-Dr.-Arijit-Bardhan-Roy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Arumbu V N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arumbu-v-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication systems, Wireless Communications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Arumbu_photo_SRMIST.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Bashyam S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-bashyam/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/101223-Dr.-S.-Bashyam.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Chitra E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-chitra/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100264-Dr.-E.-Chitra.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Damodar Panigrahy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-damodar-panigrahy/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102435-Dr.-Damodar-Panigrahy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Debanjan Sarkar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/debanjan-sarkar/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7047.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Debarati Nath",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-debarati-nath/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Elamaran E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-e-elamaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101292-Dr.-E.-Elamaran.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Elavel Visuvanathan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-g-elavel-visuvanathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Mr_G_Elavel_Visuvanathan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Ferents Koni Jiavana K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-ferents-koni-jiavana/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100249-Dr.-K.-Ferents-Koni-Jiavana-4.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Gayathri S. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-s-gayathri/",
        "Designation": "Assistant Professor",
        "Specialization": "Reversible logic design, Reconfigurable VLSI design, Quantum Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101994-Mrs.S.S.-Gayathri.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Giriprasad S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-giriprasad-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7031.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Gulothungan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/gulothungan-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded Systems, Computational Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7021_GULOPHOTO-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Hannah Pauline S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-hannah-pauline/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101577-Mrs.S.-Hannah-Pauline.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Harisudha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-harisudha/",
        "Designation": "Assistant Professor (SrG)",
        "Specialization": "Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100267-Dr.-K.-Harisudha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Haroonhaider H. Sidhwa",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-haroonhaider-homi-sidhwa/",
        "Designation": "Assistant Professor",
        "Specialization": "Electromagnetics, Antenna Theory, Abstract Algebra, Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7033.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Jaba Deva Krupa A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-a-jaba-deva-krupa/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engieering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mrs. A. Jaba Deva Krupa.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Jansi. R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-jansi/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102956-Dr.R.-Jansi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Jenath M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jenath-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/JEN-SRM-PHOTO-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Kanaparthi V. Phani Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kanaparthi-v-phani-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "RF/Microwave Engineering.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102400-Dr.-Kanaparthi-V-Phani-Kumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Kasthuri Bha J.K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-k-kasthuri-bha/",
        "Designation": "Assistant Professor",
        "Specialization": "Example - VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100247-Dr.-J.K.-Kasthuri-Bha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Kayalvizhi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-kayalvizhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded System, Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100243-Dr.-S.-Kayalvizhi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Lakshmi Thara R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-lakshmi-thara/",
        "Designation": "Assistant Professor",
        "Specialization": "Nano Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/1.jpeg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Lavanya A.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-lavanya-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102950-Mrs.-Lavanya-A.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Manikandan A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manikandan-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio Medical Image Processing, Wireless Sensor Network, VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7034.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Manikandan A.V.M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-v-m-manikandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Microelectronics, Nanoelectronics, Photovoltaics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100244-Mr.-A.V.M.-Manikandan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Masood M H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-masood-m-h/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7023-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Md Jawaid Alam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-md-jawaid-alam/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanoelectronics, Metal-oxides based energy harvesting devices, MEMS for Biomedical sensors application.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102962-Dr.-MD-Jawaid-Alam.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Monika  R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-r-monika/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/101986-Mrs.-R.-Monika.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Murugaveni S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-murugaveni/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering, Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100273-Dr.-S.-Murugaveni.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Neelaveni Ammal M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-neelaveni-ammal/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100223-Dr.-M.-Neelaveni-Ammal.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Padmajothi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-v-padmajothi/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics, Embedded Cyber Physical Systems, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100255-Mrs.-V.-Padmajothi-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Prabhu P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-prabhu/",
        "Designation": "Assistant Professor",
        "Specialization": "RF antenna design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101993-Dr.-P.-Prabhu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Prasanna R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prasanna-r/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Pratik Mondal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/pratik-mondal/",
        "Designation": "Assistant Professor",
        "Specialization": "RF and Microwaves",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7060.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Praveen Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-praveen-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Emdedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101279-Dr.S.-Praveen-Kumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Prithiviraj Rajalingam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-prithivi-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "Low Power VLSI Design, Radiation Hardened Based Design.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101504-Dr.-R.-Prithiviraj.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Priyalakshmi B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-b-priyalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering, Telecommunication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100248-Dr.-B.-Priyalakshmi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Radhika P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-radhika/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100236-Dr.-P.-Radhika.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Ramya T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-t-ramya/",
        "Designation": "Assistant Professor(Sr.G)",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100254-Ms.T.-Ramya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sandeep Kumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sandeep-kumar-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Planar antennas, Monopole antennas, Wideband antennas, Conformal antennas, Antenna measurements, Microwaves,MIMO antennas,3D antennas.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102192-Dr.-Sandeep-Kumar-P.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sanjay Kumar Sahu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sanjay-kumar-sahu/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Communication, Applied Optics and Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102992-Dr.-Sanjay-Kumar-Sahu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sarada V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-sarada/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100263-Dr.-V.-Sarada.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sathiyan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sathiyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Fiber Lasers, Waveguide Polarizers, Graphene and its related two-dimensional layered materials, nanomaterial based saturable absorbers.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102251-Dr.-S.-Sathiyan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Senthil Kumaran R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-senthil-kumaran-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Mobile Adhoc Networks, Internet of Things (IoT), Communication and Signal Processing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/rsk.jpeg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sivakumar E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sivakumar-e/",
        "Designation": "Assistant Professor",
        "Specialization": "Antennas, Microelectronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100266-Dr.-E.-Sivakumar.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Soumyaranjan Routray",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-soumyaranjan-routray/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Nanotechnology, Photovoltaic, and Photonic Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102437-Dr.-Soumyaranjan-Routray.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sounik Kiran Kumar Dash",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sounik-kiran-kumar-dash/",
        "Designation": "Research Assistant Professor",
        "Specialization": "RF and Microwave Engineering, Antennas, Filters",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/102812-Dr.-Sounik-Kiran-Dash.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Srilekha M K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-m-k-srilekha/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless nano sensor networks, Biosensor.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101124-Mrs.-M.K.-Srilekha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sriram A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-a-sriram/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101594-Mr.-A.-Sriram.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sudhanya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sudhanya-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102954-Dr.P.-Sudhanya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Suganthi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-suganthi/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100241-Dr.-K.-Suganthi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Suhasini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-suhasini/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101559-Mrs.-S.-Suhasini.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sukanya Ghosh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sukanya-ghosh/",
        "Designation": "Assistant Professor",
        "Specialization": "Microelectronics and VLSI, Semiconductor Device Based Gas Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/profile_picture.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sumitra V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sumitra-v/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7035.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Sunithamani S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sunithamani-s/",
        "Designation": "Assistant Professor",
        "Specialization": "MEMS SENSORS, ENERGY HARVESTING,VLSI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/dr-S-Sunithamani.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Tharani D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tharani-d/",
        "Designation": "Assistant Professor",
        "Specialization": "RF and Microwave",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7039.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Tulika Srivastava",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tulika-srivastava/",
        "Designation": "Assistant Professor",
        "Specialization": "Optoelectronics, Electronic Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/DSC_7040-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Uday Kumar Singh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-uday-kumar-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7024-2.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Umamaheswari S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-umamaheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Image Processing, Signal Processing, Machine learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/102136-Dr.S.-Uma-maheswari.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vadivukkarasi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-vadivukkarasi/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, Embedded system",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100272-Dr.-K.-Vadivukkarasi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Valarmathi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-valarmathi/",
        "Designation": "Assistant Professor (S.G)",
        "Specialization": "Low power VLSI design, Signal processing in VLSI and ASIC design for Hardware security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100265-Mrs.-M.-Valarmathi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vasanthadev Suryakala S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-vasanthadev-suryakala/",
        "Designation": "Assistant Professor (Sr. G)",
        "Specialization": "Spectroscopy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100252-Dr.-S.-Vasanthadev-Suryakala.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vasudevan B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vasudevan-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Devices, Medical Imaging, Photonics,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/Screenshot-2024-02-11-162849-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Veer Chandra",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-veerchandra/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/pic2.jpeg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vijayalakshmi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-d-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical sensors and VLSI design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Vijayalakshmi.D-Photo.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vimala C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-vimala/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101107-Dr.C.-Vimala.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vishvas Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vishvas-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7029.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr. Vivek Devendra Kachhatiya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vivek-devendra-kachhatiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical Access Network and Optical Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/102985-Dr.-Vivek-Devendra-Kachhatiya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Dr.Parthiban I",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-parthiban-i/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Ananda Venkatesan B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-b-ananda-venkatesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101333-Mr.-B.-Ananda-Venkatesan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Aravindan  M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-aravindan/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/100712-Mr.-M.-Aravindan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Dillybabu K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-dilly-babu/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Dillybabu.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Jiji Retna Kumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-jiji-rethnakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7055.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Joshua Jafferson. A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-joshua-jafferson/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101118-Mr.A.-Joshua-Jafferson.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Maria Dominic Savio M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-maria-dominic-savio/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101555-Mr.-M.-Maria-Dominic-Savio.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. MuthuKumaran B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/b-muthukumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/101321-Mr.-B.-Muthukumaran.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Neelakandan J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-neelakandan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7051.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Saminathan T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-t-saminathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101495-Mr.-T.-Saminathan.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Sethuraman. A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sethuraman/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/sethu-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mr. Sujan W",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sujan/",
        "Designation": "Assistant Professor",
        "Specialization": "RF and Microwave",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7057.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Aarthy S.T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-t-aarthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100246-Mrs.-S.T.-Aarthy.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Abanah Shirley J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-abanah-shirley-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Wearable Sensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7044.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Bhavani A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-bhavani/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101722-Mrs.-A.-Bhavani.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Diana Emerald Aasha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-diana-emerald-aasha/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101561-Mrs.-S.-Diana-Emerald-Aasha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Hemavathi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-hemavathi/",
        "Designation": "Assistant Professor",
        "Specialization": "VLSI and Embedded System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Hema.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Kalaimagal G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-kalaimagal/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101291-Mrs.-G.-Kalaimagal.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Kolangiammal S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-kolangiammal/",
        "Designation": "Assistant Professor",
        "Specialization": "Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7027.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Ponnammal P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-ponnammal/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded System Technologies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/P.Ponnammal.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Ramya A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101585-Mrs.-A.-Ramya.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Saraswathi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-n-saraswathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/100219-Mrs.-N.-Saraswathi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Sayantani Bhattacharya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-sayantani-bhattacharya/",
        "Designation": "Assistant Professor",
        "Specialization": "Optical fiber sensors, Fiber Bragg Grating (FBG), Regenerated Fiber Bragg Grating sensors  design, fabrication and characterizations, High-temperature stable grating",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/DSC_7042-1.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Suganthi Brindha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-g-suganthi-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101583-Mrs.G.-Suganthi-Brindha.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Veni  N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-n-veni/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101988-Mrs.-N.Veni_.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Mrs. Vinnarasi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-vinnarasi/",
        "Designation": "Assistant Professor",
        "Specialization": "Embedded Systems, IoT,ML,DL",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/101161-Mrs.-A.-Vinnarasi.jpg"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Ms. Heartlin Maria H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-heartlin-maria-h/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13473,
        "DepartmentName": "Department of Electronics & Communication",
        "FacultyName": "Ms. Sowmya N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sowmya-n/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Joselin Retna Kumar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-joselin-retna-kumar/",
        "Designation": "Associate Professor And Head",
        "Specialization": "Process control and Instrumentation, Automation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_5748-scaled.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Vimala Juliet A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-vimala-juliet/",
        "Designation": "Professor, MEMS & Microsystems",
        "Specialization": "Instrumentation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/vj-passport-size-maroon-color-1.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Asuntha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-asuntha/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "Process control, Adaptive control, Non Linear control, Medical Image processing, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/asu-passport-size-photo-1.jpeg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Bakiyalakshmi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-bakiyalakshmi-2/",
        "Designation": "Assistant Professor",
        "Specialization": "MEMS, Control systems, Modern control systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/self-pic-scaled.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Brindha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-brindha/",
        "Designation": "Assistant Professor",
        "Specialization": "Video and medical Image Processing, Data analysis and Classification, Design and development of medical instrument",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-29-at-2.00.49-PM.jpeg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Jekan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-jekan/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Instrumentation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Jekan.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Likith Kumar C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-likith-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "MEMS, Control Systems, Automation and PLC",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Likith.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Rajaa Vikhram G Y",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-y-rajaa-vikhram/",
        "Designation": "Assistant Professor",
        "Specialization": "Power System Control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr. G. Y. Rajaa Vikhram.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Sam Jeba Kumar J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-sam-jeba-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Automation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Sam.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Sharanya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-sharanya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio Medical Signal Processing, Instrumentation System Design, Industrial Instrumentation, Communication Engineering, Neural Network &Fuzzy Logic, Artificial Intelligence, Process Control and Control System.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Sharanya-S.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Sridhar P A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-a-sridhar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Physiological Signal analysis and modelling, Neuromuscular signal processing and analysis, muscle fatigue, Biomedical instrumentation, Gait Analysis, Multi-spectral analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Sri_single-2-e1695627939583.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Vibha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vibha-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Power Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/K.Vibha_PA1713005012002.jpg"
    },
    {
        "DepartmentCode": 13499,
        "DepartmentName": "Department of Electronics & Instrumentation Engineering",
        "FacultyName": "Dr. Indirani S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-indirani/",
        "Designation": "Teaching Assistant",
        "Specialization": "Electronics  &  Instrumentation, Industrial Instrumentation, Instrumentation & Control in Iron and Steel industry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/photo.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Karthiga S.V.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-v-karthiga/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "English Language Teaching (ELT)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Dr.-Karthiga.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Shanthichitra K.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-shanthichitra/",
        "Designation": "Professor",
        "Specialization": "Culture Studies and Phenomenology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Abirami T.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-abirami-t/",
        "Designation": "Assistant professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Dr.-Abirami-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Annie Vimala D.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-annie-vimala-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Dr.-Annie-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Arunprabu C.S.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-s-arunprabu/",
        "Designation": "Assistant Professor",
        "Specialization": "New Historicism, Existential Philosophy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/2-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Daryl Cressida G.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-daryl-cresseda/",
        "Designation": "Assistant Professor",
        "Specialization": "Literature and Literary Criticism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Fredrick Jorgenson C.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-fredrick-jorgenson-c/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature subjects",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/2-6-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Pushpanjali S.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pushpanjali/",
        "Designation": "Assistant Professor",
        "Specialization": "Literature and Literary Criticism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/3-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Shalini Infanta L.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shalini-infanta-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Postcolonial Literature, Gender studies, American Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/3-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23793,
        "DepartmentName": "Department of English",
        "FacultyName": "Dr. Vennila V.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-vennila/",
        "Designation": "Assistant Professor",
        "Specialization": "Linguistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Kavitha Nair L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-kavitha-nair/",
        "Designation": "Professor and Head",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_1377-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Latha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-latha-r/",
        "Designation": "Associate Professor",
        "Specialization": "English Language Teaching and Testing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Latha-R.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Tamilarasan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-tamilarasan/",
        "Designation": "Associate Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/tamilphoto.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Busareddy Vijaya Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/busareddy-vijaya-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Alagesan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-alagesan/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1412-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Anderleen Diana Lazarus",
        "ProfileLink": "https://www.srmist.edu.in/faculty/anderleen-diana-lazarus/",
        "Designation": "Asst Prof.,  Executive Asst. to VC & Manager Faculty Personnel",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_8645-copys-5.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Bhargavi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-bhargavi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Bhargavi.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Bishnu Paramguru Mahapatra",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-bishnu-paramguru-mahapatra/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Bishnu-PM.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Caleb Theodar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-caleb-theodar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. David T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-david-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Debashrita Dey",
        "ProfileLink": "https://www.srmist.edu.in/faculty/debashrita-dey/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/dey.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Ezhil K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-k-ezhil/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1415-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Horizan Prasanna Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-horizan-prasanna-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1380-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. John Joseph",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-john-joseph/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Karunanithi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-karunanithi-2/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Karunanithi-V.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Mahadevan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-mahadevan/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Mahadevan-S.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Maragathavel K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-maragathavel/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Maragathavel-K.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Micheal Raj J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/micheal-raj-j/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Dr.-Micheal-Raj-J-3.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Monika Nair B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-b-monika-nair/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Website-Photo-Dr.-Monika-Nair-B-1.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Poonam U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-poonam/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Poonam-U.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Poongodi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-poongodi/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1396-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Prasanth P S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prasanth-p-s/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Prasanth-P-S-Photo-4.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Pressila Daissy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pressila-daissy-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Prisci-Photo-SRM-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Ramya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-ramya/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/ramya-pic-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Sharmi Rachel C M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sharmi-rachel-c-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr.-Sharmi-Rachel.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Sulagna Mohanty",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sulagna-mohanty/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/sulgana.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Sumathy M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sumathy-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Thomas Alwa Edison. K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thomas-alwa-edison-k/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language and Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/Dr-Thomas.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Dr. Uma Maheswari M M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-m-uma-maheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language & Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1413-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mr. Argha Basu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/argha-basu/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/basu.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mr. Sabastian Satish J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-sabastian-satish/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "French, Spanish",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr.-Sabastian-Satish-J-1.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mrs. Chandralega R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-r-chandralega/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Mrs.-Chandralega-R-2-3.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mrs. Latha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-latha/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/IMG-20230420-WA0001.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mrs. Magdalene Sowmya K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-k-magdalene-sowmya/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1381-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mrs. Manju Rekha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/manju-rekha-a/",
        "Designation": "Assistant Professor",
        "Specialization": "French",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_1390-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mrs. Ratna kumari M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-ratna-kumari/",
        "Designation": "Assistant Professor",
        "Specialization": "Korean",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mrs. Rekhaa P R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-r-rekhaa/",
        "Designation": "Assistant Professor",
        "Specialization": "Japanese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Rekhaas-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Gayle Renee Franswah",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-gayle-renee-franswah/",
        "Designation": "Assistant Professor",
        "Specialization": "French",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1402-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Jayati C Banerjee",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-jayati-c-banerjee/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1388-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Kala Sharma",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kala-sharma/",
        "Designation": "Assistant Professor",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kala-Passport-2.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Sangeetha H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sangeetha-h/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Shwetaa S H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-shwetaa-s-h/",
        "Designation": "Visiting Faculty",
        "Specialization": "Korean language",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Artboard-2@3x-100-1.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Sundaravalli V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/__trashed-61/",
        "Designation": "Assistant Professor",
        "Specialization": "Japanese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Ms.-Sundaravalli-V.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Velupula Krishnaiah",
        "ProfileLink": "https://www.srmist.edu.in/faculty/velupula-krishnaiah/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Yantsubeni Ngullie",
        "ProfileLink": "https://www.srmist.edu.in/faculty/yantsubeni-ngullie/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ganga Devi G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ganga-devi-g-2/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Ganga-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mary Florence D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mary-florence-d/",
        "Designation": "Teaching Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Mary-scaled.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mr. V Krishnamourthy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-krishnamourthy/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Krishnamourthy-V.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Mrs. Bhuvana Udhayakumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-bhuvana-udhayakumar/",
        "Designation": "Visiting Faculty",
        "Specialization": "German",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_1416-transformed.png"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Ling Yun Tsai",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-ling-yun-tsai/",
        "Designation": "Director of TEC-SRMIST & Mandarin Instructor of EFL department",
        "Specialization": "Chinese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/蔡翎芸04-1.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms. Yu Cheng Chiu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-yu-cheng-chiu/",
        "Designation": "Mandarin  Instructor",
        "Specialization": "Mandarin Chinese",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo1.jpg"
    },
    {
        "DepartmentCode": 13546,
        "DepartmentName": "Department of English and Foreign Languages",
        "FacultyName": "Ms.Yoko Naito",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-yoko-naito/",
        "Designation": "Adjunct Faculty",
        "Specialization": "Japanese Language",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/DSC_1389-1sCpFwQa0-transformed.png"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "FacultyName": "Dr. Muthukumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-muthukumar/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Agricultural Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-M__Muthukumar.png"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "FacultyName": "Dr. Murugan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-murugan-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Sericulture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Muru-2-scaled.jpg"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "FacultyName": "Dr. Nisha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nisha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.R.Nisha_-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114923,
        "DepartmentName": "Department of Entomology",
        "FacultyName": "Mr. Kamaraj Dharmalingam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kamaraj-dharmalingam/",
        "Designation": "Assistant Professor",
        "Specialization": "Agrl. Entomology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Kama-2-scaled-e1693997889438.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "FacultyName": "Dr. Priyanka R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-priyanka/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Textiles",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20230304-WA0053-removebg-preview-2.png"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "FacultyName": "Dr. Umamageshwari S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-umamageshwari/",
        "Designation": "Assistant Professor",
        "Specialization": "Fashion Designing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_27781.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "FacultyName": "Mrs. Balaguru H. (Margaret Magizhini)",
        "ProfileLink": "https://www.srmist.edu.in/faculty/h-balaguru/",
        "Designation": "Assistant Professor",
        "Specialization": "Textile Designing, Fashion Illustration, Fashion Merchandising ,Visual Merchandising,Theatre Costumes,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/2-scaled.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "FacultyName": "Mrs. Lavanya J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/lavanya-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Fashion and Textile Designing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/4-scaled.jpg"
    },
    {
        "DepartmentCode": 24107,
        "DepartmentName": "Department of Fashion Designing",
        "FacultyName": "Mr. Sasikumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sasikumar-s/",
        "Designation": "Technical Instructor",
        "Specialization": "Pattern Making and Dress Designing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/SASI-JPG-1_page-0001.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "FacultyName": "Dr. Anandhi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-anandhi/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Floriculture and Medicinal Crops",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Anan-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "FacultyName": "Dr. Rajiv G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajiv-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Floriculture and Landscape Gardening",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Rajiv.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "FacultyName": "Dr. Shakila S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shakila-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Floriculture and Landscape Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Shak-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90460,
        "DepartmentName": "Department of Floriculture and Landscaping Architecture",
        "FacultyName": "Ms. Kanimozhi C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/c-kanimozhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Floriculture & Landscaping",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ms.-Kanimozhi.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "FacultyName": "Dr. Gurumoorthi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-gurumoorthi/",
        "Designation": "Associate Professor and HoD Incharge",
        "Specialization": "Food Safety and Quality Management, Food Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/03/Dr.-Gurumoorthy.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "FacultyName": "Dr. Nagamaniammai G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-nagamaniammai/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Profile-photo-Dr.-Nagamaniammai.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "FacultyName": "Dr. Periyar Selvam S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-periyar-selvam/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/Dr.-S.-Periyar-Selvam.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "FacultyName": "Dr. Preetha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-preetha/",
        "Designation": "Associate Professor",
        "Specialization": "Food Biotechnology and Environmental Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Preetha.jpg"
    },
    {
        "DepartmentCode": 13515,
        "DepartmentName": "Department of Food Process Engineering",
        "FacultyName": "Dr. G. Sarathchandra",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-sarathchandra/",
        "Designation": "Adjunct Faculty",
        "Specialization": "Food Toxicology, Veterinary Toxicology, Veterinary Pharmacology & Fish Pharmacology.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/sarath-1.jpg"
    },
    {
        "DepartmentCode": 24105,
        "DepartmentName": "Department of French",
        "FacultyName": "Mr. Kumaravel K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-kumaravel-k/",
        "Designation": "HEAD",
        "Specialization": "FRENCH - TRANSLATION,  INTERPRETATION, GRAMMAR, CIVILISATION AND LITERATURE",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/2-3-scaled.jpg"
    },
    {
        "DepartmentCode": 24105,
        "DepartmentName": "Department of French",
        "FacultyName": "Divya Dharshini M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/divya-dharshini-m/",
        "Designation": "Teaching Associate",
        "Specialization": "French Literature and  Linguistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "FacultyName": "Dr. Gopu B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-gopu/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Horticulture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Gopu-B.png"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "FacultyName": "Dr. Akino A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-akino-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Horticulture (Fruit Science)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Akino-A-scaled-e1680764448966.jpg"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "FacultyName": "Dr. Deepika V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-deepika-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Crop management in fruit crops",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Deep-3-scaled-e1680760260209.jpg"
    },
    {
        "DepartmentCode": 90456,
        "DepartmentName": "Department of Fruit Science",
        "FacultyName": "Dr. Gopi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gopi-v/",
        "Designation": "Assistant Professor (Horticulture - Fruit Science)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/W.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Ramya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-ramya/",
        "Designation": "Professor &Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/ramya-prof.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Parani Madasamy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-parani/",
        "Designation": "Professor",
        "Specialization": "Genetic Engineering & Genomics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Parani-Madasamy.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Devi. A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-devi-a/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Kirankumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-kirankumar/",
        "Designation": "Associate Professor",
        "Specialization": "Developmental Biology & Zebrafish Disease Models",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. S. Kirankumar.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Rex Arunraj D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-rex-arunraj/",
        "Designation": "Associate Professor",
        "Specialization": "Integrative Plant Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Rex-Arunraj-D.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Satish Ramalingam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-satish-ramalingam/",
        "Designation": "Associate Professor",
        "Specialization": "Cancer Biology, Molecular Cell Biology, Physiology, Immunology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0014_DSC_9299.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Shobana.S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-shobana/",
        "Designation": "Associate Professor",
        "Specialization": "Phage Biology and Computational Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/5784-1.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Thirumurthy Madhavan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thirumurthy-madhavan-2/",
        "Designation": "Associate Professor",
        "Specialization": "Bioinformatics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230405-WA0008-2.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Usha B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-usha/",
        "Designation": "Associate Professor",
        "Specialization": "Plant Molecular Biology and Biotechnology, Polycystic Ovary Syndrome",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/05/Profile_Bio-Tech_0011_DSC_9302.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Kiran Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kiran-kumar-s/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Shobana S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/shobana-s-2/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. ArulJothi K.N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-n-aruljothi/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Genetic Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Profile_Bio-Tech_0009_DSC_9304.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Ganesan G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ganesan-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant biotic and abiotic stress tolerance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-G.-Ganesan-Genetic-Department-4.jpeg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Manoj Kumar N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/manoj-kumar-n/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "Bioprocess and Downstream processing, Nanotechnology, Drug delivery, Biofuel production",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Manoj-Kumar-N.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Prabahan Chakraborty",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prabahan-chakraborty/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Neuroscience",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Prabahan-Chakraborty_passport-photo-scaled.jpg"
    },
    {
        "DepartmentCode": 13512,
        "DepartmentName": "Department of Genetic Engineering",
        "FacultyName": "Dr. Selvarajan E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-selvarajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Biotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.-Selvarajan-E.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "FacultyName": "Dr. Thirugnana kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thirugnana-kumar-s/",
        "Designation": "Professor and Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Thir-scaled.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "FacultyName": "Dr. Ambika S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ambika-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ambi-2-scaled.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "FacultyName": "Dr. Chandrasekar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-chandrasekar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Chandrasekar.-A.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "FacultyName": "Dr. Jegadeeswaran M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jegadeeswaran-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Jegadeeswaran.-M.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "FacultyName": "Dr. Mahendran R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-mahendran-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Mahendran.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "FacultyName": "Dr. Sathya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sathya-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Genetics and Plant Breeding",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Sath-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114933,
        "DepartmentName": "Department of Genetics and Plant breeding",
        "FacultyName": "Dr. Selvakumar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-selvakumar-g/",
        "Designation": "Assistant Professor (Genetics and Plant Breeding)",
        "Specialization": "Mutation Breeding, Molecular Genetics, Genomics and Transcriptomics.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Selvakumar-G.png"
    },
    {
        "DepartmentCode": 23783,
        "DepartmentName": "Department of Hindi",
        "FacultyName": "Dr. Preeti S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-preeti/",
        "Designation": "Head & Associate Professor",
        "Specialization": "Hindi Literature",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/IMG-20200731-WA0104-2.jpg"
    },
    {
        "DepartmentCode": 23783,
        "DepartmentName": "Department of Hindi",
        "FacultyName": "Dr. Md. Shwahidul Islam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-md-shwahidul-islam/",
        "Designation": "Assistant Professor",
        "Specialization": "Modern Poetry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230222-WA0010.jpg"
    },
    {
        "DepartmentCode": 23783,
        "DepartmentName": "Department of Hindi",
        "FacultyName": "Dr. Razia Begum. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-razia-begum/",
        "Designation": "Assistant Professor",
        "Specialization": "Hindi",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Razia-Photo-1.jpg"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "FacultyName": "Dr. Jawaharlal M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jawaharlal-m/",
        "Designation": "Dean,  SRM College of Agriculture Sciences",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Jawaharlal-M.png"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "FacultyName": "Dr. Ganesh S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ganesh-s-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "FacultyName": "Dr. Ilakiya T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ilakiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 112133,
        "DepartmentName": "Department of Horticulture",
        "FacultyName": "Dr. Rajasekar. M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajasekar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "FacultyName": "Dr. Shiva Shankaran K.R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-r-shiva-shankaran/",
        "Designation": "Assistant Professor & Head",
        "Specialization": "Journalism & Mass Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/600235-scaled-e1677137779960.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "FacultyName": "Dr. Archana Arul",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-archana-arul/",
        "Designation": "Assistant Professor (On Deputation)",
        "Specialization": "Journalism and Mass Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Archana-Arul.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "FacultyName": "Dr. Naneetha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-naneetha-r-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/picture-profile-e1677065956949.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "FacultyName": "Dr. Praveen Kumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-praveen-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Journalism and Mass Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Praveen_JMC_Cropp.jpg"
    },
    {
        "DepartmentCode": 23800,
        "DepartmentName": "Department Of Journalism And Mass Communication",
        "FacultyName": "Dr. Viduthalai P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/viduthalai-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/600562-scaled-e1677137930202.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Ishita  Chatterjee",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ishita-chatterjee/",
        "Designation": "Professor",
        "Specialization": "Constitutional Law, Law of Torts",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/p3.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Sreelatha",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sreelatha/",
        "Designation": "Associate Professor",
        "Specialization": "Constitution and Administrative Law, Intellectual Property Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Photo-6.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Parveen Yadav",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-parveen-yadav/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR, Criminal Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/15-scaled.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Senthivel K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-senthivel/",
        "Designation": "Assistant Professor",
        "Specialization": "Politics and Public Administration",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/WhatsApp-Imagec-2023-06-08-at-9.42.43-AM.jpeg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Sulok S K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sulok-s-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Intellectual Property Rights",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/07/sulok-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Sumana Vedanth",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sumana-vedanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitution and Business Laws",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/My-Photo.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Sundaresh K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-sundaresh/",
        "Designation": "Assistant Professor",
        "Specialization": "FInance and Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/8-e1680685435184.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Vinayagam G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-vinaygam/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching (ELT), Translation and Inter-Cultural Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/2.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Dr. Yoga S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-yoga/",
        "Designation": "Assistant Professor",
        "Specialization": "Economics, Agriculture Economics. Crop Insurance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/1-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Alankar Upadhyay",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-alankar-upadhyay/",
        "Designation": "Assistant Professor",
        "Specialization": "Property Law, Intellectual Property Laws, Law of Taxation, International Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Mr.-Alankar-Upadhyay.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Anand Shukla",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-anand-shukla/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG-20240402-WA0000.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Anandha  Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-anandha-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Business Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Passport-size-pic-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Azhar R Asharaf",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-azhar-r-asharaf/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR and Public Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-14-at-2.12.03-PM.jpeg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Bennet Paul Giftson D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-d-bennet-paul-giftson/",
        "Designation": "Assistant Professor",
        "Specialization": "International Law and Organizations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/5-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Chidambaram M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-chidambaram/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional law and Human Rights , Administrative law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/7.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Debashish  Dash",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-debashish-dash/",
        "Designation": "Assistant Professor",
        "Specialization": "Intellectual Property Law, Environment  and Natural Resources Law, International Environmental Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/26124-10.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Deepak B D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-deepak-b-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Taxation Law, International Tax Law, Land laws and Family Laws",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/07/deepak-passport-size-photo-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Gajendhra A K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-a-k-gajendhra/",
        "Designation": "Assistant Professor",
        "Specialization": "Human Rights and Duties Education",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/23.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Gyanendra  Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-gyanendra-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Corporate Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/32.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Jai Ganesh M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/jai-ganesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional Law and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/jai-pass.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Mahalingam V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-mahalingam/",
        "Designation": "Assistant Professor",
        "Specialization": "Legal and Constitutional History",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mahalingam-Photo.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Mangala Charan Patra",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-mangala-charan-patra/",
        "Designation": "Assistant Professor",
        "Specialization": "Business Law and Family Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/6.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Mohammed Shahzad",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mohammed-shahzad/",
        "Designation": "Assistant Professor",
        "Specialization": "Alternative Dispute Resolution, Competition Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Mohammed-Shahzad-Photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Nishanth J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/nishanth-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Property Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/passport-photo-2.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Partheeswaran P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-partheeswaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Corporate law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/photo_2024-04-02_12-45-08.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Sakthivel K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-sakthivel/",
        "Designation": "Assistant Professor",
        "Specialization": "Property Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/12.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mr. Yokesh M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-yokesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/profile_picture.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Mrs. Bhavani G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-g-bhavani/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional Law & Legal Order",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Bhavani-Photo.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Anviti  Mishra",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-anviti-mishra/",
        "Designation": "Assistant Professor",
        "Specialization": "International Trade Law, Election Laws, Maritime Law, Cyber Law, Drafting Pleading",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/17.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Athma Rubavathi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-m-athma-rubavathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour Law and Administative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Athma-Ph-2.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Dhivya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-r-dhivya/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour Law and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG-20230413-WA0002.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Indira A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-indira-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Sociology and Labour Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/11.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Kalaiarasi B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kalaiarasi-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/6369117185.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Kalaivani S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-kalaivani/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240314-WA0048.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Kaushika  MN",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-kaushika-mn/",
        "Designation": "Assistant Professor",
        "Specialization": "Constitutional law and Human Rights",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.Kaushika-MN.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Lakshmi M P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-lakshmi-m-p/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240321-WA0021.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Liji Shamilin V S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-liji-shamilin-v-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Labour and Administrative Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/16.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Logapriya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-p-logapriya/",
        "Designation": "Assistant Professor",
        "Specialization": "PROPERTY LAW",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG_20210915_215304.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Mariya Joseph",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-mariya-joseph/",
        "Designation": "Assistant Professor",
        "Specialization": "Business Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/LAW-V15.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Mary Jerlin F",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-f-mary-jerlin/",
        "Designation": "Assistant Professor",
        "Specialization": "Criminal Law and Criminal Administration, Women and Children relate Laws",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/jerlin.jpeg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Parvathy K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-parvathy/",
        "Designation": "Assistant Professor",
        "Specialization": "IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/1622811139100_A-1.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Pooja Saharan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-pooja-saharan/",
        "Designation": "Assistant Professor",
        "Specialization": "Criminal Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Pooja-Saharan.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Preyadharshne  K N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-preyadharshne-k-n/",
        "Designation": "Assistant Professor",
        "Specialization": "LL.M. - TAXATION LAW",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Preyadharshne.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Priyanka T Gopal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-priyanka-t-gopal/",
        "Designation": "Assistant Professor",
        "Specialization": "Public Law and IPR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/19.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Ramadevi J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-ramadevi-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Economics and Management, General LAW",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Ramadevi.jpg"
    },
    {
        "DepartmentCode": 31929,
        "DepartmentName": "Department of Law",
        "FacultyName": "Ms. Vidya Menon",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-vidya-menon/",
        "Designation": "Assistant Professor",
        "Specialization": "International Trade Law",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Vidya-photo.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Shivganesh Bhargava",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shivganesh-bhargava/",
        "Designation": "Dean, Faculty of Management",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/02/Dr.-Shivganesh-Bhargava.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Krishnaraj R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-krishnaraj/",
        "Designation": "Professor & Chairperson (Research)",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0014_DSC_9400.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Senthilkumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-senthilkumar/",
        "Designation": "Professor & Program Coordinator (MBA)",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/17.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Santhosh Kumar N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/n-santhosh-kumar/",
        "Designation": "Associate Professor & Chairperson (E-Learning Technologies & Resources)",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0029_DSC_9381.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Krishnan A.R.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-r-krishnan/",
        "Designation": "Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0020_DSC_9393.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Ramachandran T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-ramachandran/",
        "Designation": "Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0030_DSC_9380.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Shenbagaraman V.M.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-m-shenbagaraman/",
        "Designation": "Professor",
        "Specialization": "Information Systems and Business Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0012_DSC_9403.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Arivazhagan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-arivazhagan/",
        "Designation": "Associate Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0032_DSC_9378.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Arun Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-arunkumar/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0027_DSC_9383.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Gajendran A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-gajendran/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/96308.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Manivannan S.K.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-k-manivannan/",
        "Designation": "Associate Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0017_DSC_9396.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Nisha Ashokan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nisha-ashokan/",
        "Designation": "Director and Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Nisha-Ashokan-New-a-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Premkumar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-premkumar-b/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0052_DSC_9358.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Rajeswari P.S.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-s-rajeswari/",
        "Designation": "Associate Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0028_DSC_9382-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Santhana Lakshmi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-santhana-lakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0005_DSC_9413.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Saravanan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-saravanan/",
        "Designation": "Associate Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/DSC_0001-removebg-preview-1.png"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Sujatha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sujatha-2/",
        "Designation": "Associate Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0041_DSC_9369.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Vetri Selvi.  M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vetri-selvi-m/",
        "Designation": "Associate Professor",
        "Specialization": "Production and Operations Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Vetri-Selvi-M.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Vijaykarthigeyan K T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-t-vijaykarthigeyan/",
        "Designation": "Associate Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0013_DSC_9402.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Yaaseen Masvood",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-yaaseen-masvood/",
        "Designation": "Associate Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Masvood-New.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Anitha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-anitha/",
        "Designation": "Assistant Professor (SG)",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0049_DSC_9361.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Aravindaraj K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/aravindaraj-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Profile_Photos_SRM.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. ARUL PRAKASH A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-a-arulprakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0035_DSC_9375.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Arunfred N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arunfred/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/photo-my-white-background.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Balaji K.D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-d-balaji/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0007_DSC_9411.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Baskar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-baskar-b/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/24.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Bharathi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/bharathi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/04.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Bhuvana M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/bhuvana-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/01-2.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Celina A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-celina/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/IMG20230308153529.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Dhivya Devi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-dhivya-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "STATISTICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/21-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Dinesh J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-dinesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0002_DSC_9417.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Franklin M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/franklin-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/IMG-20220313-WA0003.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Ganaga Durga devi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ganaga-durga-devi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "HR(CDC)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/13.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Ganeshkumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ganeshkumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing(Digital)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/19.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Ilankadhir M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ilankadhir/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0039_DSC_9371.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Jagan Babu K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-jagan-babu/",
        "Designation": "Assistant Professor",
        "Specialization": "General Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0036_DSC_9374.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Jahira Parveen S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-jahira-parveen/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0006_DSC_9412.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Jain Jacob M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jain-jacob-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/09.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Jawahar Philimis",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jawahar-philimis/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Jawa-PP.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Jayanthi L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/l-jayanthi/",
        "Designation": "Assistant Professor & Program Coordinator (BBA)",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0050_DSC_9360.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Kanmani G R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kanmani-g-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Statistics and Operations Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/12.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Karthik Sridar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-karthik-sridar/",
        "Designation": "Assistant Professor (SG)",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/photo-profile-karthik-scaled.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Kavitha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-k-kavitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0022_DSC_9391-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Kesavan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kesavan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/kesav-removebg-preview.png"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Kumar G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/PHOTO-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Kumar N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Dr.-N.-Kumar.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Lakshmi G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-lakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0044_DSC_9366.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Madhanrajan Udayanan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/madhanrajan-u/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/DrMadhanrajan.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Madhumithaa N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-madhumithaa-n/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/23.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Maheswari K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-maheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0042_DSC_9368.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Maheswari P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-maheswari-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing(Digital)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/18.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Manikandan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manikandan-m-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/11.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Maya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-maya/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0026_DSC_9384.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Megavannan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-megavannan/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/IMG-20230315-WA0015-removebg-preview_2-removebg-preview-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Mohana Sundari V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mohana-sundari-v/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/22.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Murugan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/murugan-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/02-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Naga Lakshmi M V N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/naga-lakshmi-m-v-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/profile-pic-2.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Nazim Sha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nazim-sha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0004_DSC_9414.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Noble Kennedy E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-e-nobel-kennedy/",
        "Designation": "Assistant Professor",
        "Specialization": "Supply Chain Management and Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0034_DSC_9376.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Pavithra J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pavithra-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/05.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Poonguzhali  P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-poonguzhali/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0003_DSC_9415.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Prabu G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-prabu/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/21.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Prem Chand Bhargaw R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-prem-chand-bhargaw/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Prem-Chand-Bhargaw.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Priya  K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-priya-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/priya-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Priya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0019_DSC_9394.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Priya Xavier",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-priya-xavier/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0040_DSC_9370-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Rajalakshmi J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-rajalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0048_DSC_9362.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Ramkumar. A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ramkumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "HR(CDC)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Dr.Ramkumar-updated-1.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Revathy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-revathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/07.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Saillaja V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/saillaja-v/",
        "Designation": "Assistant Professor",
        "Specialization": "HR(CDC)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/10.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Saithu Mohammed",
        "ProfileLink": "https://www.srmist.edu.in/faculty/saithu-mohammed/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/20.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Sakthi Prasath G.B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sakthi-prasath-gb/",
        "Designation": "Assistant Professor",
        "Specialization": "English Language Teaching",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Sakthi-Prasath-G-B.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Sankara Moorthy K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-sankara-moorthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0023_DSC_9389.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Senthilnathan C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-senthilnathan/",
        "Designation": "Assistant Professor -Senior Grade",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0053_DSC_9356.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Shanmuga Priya A R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/shanmuga-priya-a-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0016_DSC_9397.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Shyamala Devi B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-shyamala-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/16.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Srilalitha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-srilalitha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Srilalitha.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Srinivasan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-srinivasan/",
        "Designation": "Assistant Professor",
        "Specialization": "General Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0037_DSC_9373.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Sriram M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-sriram/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0031_DSC_9379.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Subathra K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-subathra/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/17000067-2.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Sudha L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sudha-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/15.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Suganya A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-a-suganya/",
        "Designation": "Assistant Professor (O.G)",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0025_DSC_9387.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Suresh V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-suresh/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0045_DSC_9365.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Thilagavathy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-thilagavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0043_DSC_9367.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Thirumaleswari T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-thirumaleswari/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/03.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Velmurugan T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-velmurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0011_DSC_9404.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Vijay Raja R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-vijay-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0033_DSC_9377.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Dr. Vinitha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vinitha-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0047_DSC_9363.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Mr. Anand M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-anand-2/",
        "Designation": "Assistant Professor",
        "Specialization": "HR",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Anand_Passport-size-7.2cm-x-8.5cm.jpg"
    },
    {
        "DepartmentCode": 29335,
        "DepartmentName": "Department of Management",
        "FacultyName": "Mr. Rajasekar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/rajasekar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "SOFT SKILLS TRAINER",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/profile-1_0038_DSC_9372.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Subburayan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-subburayan/",
        "Designation": "Associate Professor & Head",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5240.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Ganesan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-ganesan/",
        "Designation": "Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/kg-photo.png"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Parvathi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-parvathi-n/",
        "Designation": "Professor",
        "Specialization": "Pure Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5339.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Balaji N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-balaji-n/",
        "Designation": "Associate Professor",
        "Specialization": "Optimization techniques, Multicriteria decision Models",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5249.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Bapuji Pullepu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-bapuji-pullepu/",
        "Designation": "Associate Professor",
        "Specialization": "Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5311.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Harekrushna Behera",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-harekrushna-behera/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Harekrushna-Behera.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Ritesh Kumar Dubey",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ritesh-kumar-dubey/",
        "Designation": "Research Associate Professor",
        "Specialization": "Numerical analysis and PDEs,  Deep Learning and Scientific computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5320.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sambath P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sampath-p/",
        "Designation": "Associate Professor",
        "Specialization": "Mathematics/ Applied Mathematics/ Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5252.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Senthamarai R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-senthamarai/",
        "Designation": "Associate Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5292.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Shobana L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-shobana/",
        "Designation": "Associate Professor",
        "Specialization": "Graph Labeling, Automata and Formal Languages, Number Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5323.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Siva E.P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-siva-e-p/",
        "Designation": "Associate Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5259.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Vennila B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-vennila/",
        "Designation": "Associate Professor",
        "Specialization": "Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5243.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Abhishek Banerjee",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-abhishek-banerjee/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5361.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Abirami C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-abirami/",
        "Designation": "Assistant Professor",
        "Specialization": "Geometric Function Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5266.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Akash Singh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-akash-singh/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5270.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Animesh Roy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-animesh-roy/",
        "Designation": "Assistant Professor",
        "Specialization": "Dynamical system, Chaos, Cryptography, Deep Learning, Federated learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5287.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Anuradha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-anuradha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5362.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Arul Joseph G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-arul-joseph/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5342.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Arulprakasam R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-arulprakasam/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5244.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Athithan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-athithan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5262.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Balaganesan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-balaganesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5354.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Bibekananda Bira",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-bibekananda-bira/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5340.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Celine Prabha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-celine-prabha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Graph Theory, Algebraic Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5275.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Dhanalakshmi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5269.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Dhanalakshmi. R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dhanalakshmi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5291.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Gajendran G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-gajendran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5246.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Godhandaraman P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-godhandaraman/",
        "Designation": "Assistant Professor",
        "Specialization": "Stochastic Processes, Operations Research, Applied Probability, Queueing Theory, Machine Learning, Reliability Engineering, Computer Network, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5335.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Kalaiyarasi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-kalaiyarasi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-8.10.40-PM.jpeg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Kamalakkannan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kamalakkannan-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Integral Transforms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5316.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Kannan R.M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-m-kannan/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Mathematics, Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. R.M.Kannan.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Karthick B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karthick-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5338.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Karthick S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karthick-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5332.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Karthick. S. A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karthick-s-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Control Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Karthick.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Karthik C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karthick-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Time Delay Sytems, Stability Analysis and Control Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5299.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Kousalya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-kousalya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5306.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Krishnaveni G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-krishnaveni/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5326.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Krishnodas Goswami",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-krishnodas-goswami/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5302.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Lavanya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5294.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Leelavathy T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-leelavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics,Fuzzy Optimization and Multi Objective Optimization.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5313.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Mahendran R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-mahendran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5247.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Meena Parvathy Sankar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/meena-parvathy-sankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5277.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Melita Vinoliah",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-melita-vinoliah/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5325.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Merlyn Margaret H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/merlyn-margaret-h/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5251.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Mohanaselvi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-mohanaselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "Fuzzy optimization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5364.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Muthukumaran V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-muthukumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Algebraic Cryptography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5309.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Nandakumar E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/e-nandakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/nanda-photo.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Nirmala T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-nirmala/",
        "Designation": "Assistant Professor",
        "Specialization": "Interval Optimization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5324.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Padma V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-padma/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5258.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Perumal R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-perumal/",
        "Designation": "Assistant Professor",
        "Specialization": "Algebra",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5347.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Poongothai V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-poongothai/",
        "Designation": "Assistant Professor",
        "Specialization": "Stochastic Processes, Applied Probability, Operations Research, Queueing Theory, Theoretical Computer Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5317.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Prabakaran K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-prabakaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5285.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Prakash D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-prakash/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_0003-copy-5.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Prakash Kar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prakash-kar/",
        "Designation": "Assistant Professor",
        "Specialization": "Water waves, Fluid structures interactions",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/visa_photo_prakash.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Pratyush Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pratyush-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5281.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Priyajit Mondal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-priyajit-mondal/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5301.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Provanjan Mallick",
        "ProfileLink": "https://www.srmist.edu.in/faculty/provanjan-mallick/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5273.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Raja V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "Numerical Methods",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5253.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Ramesh G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5256.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sabarinathan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sabarinathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. S. Sabarinathan.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sahadeb Kuila",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sahadeb-kuila/",
        "Designation": "Assistant Professor",
        "Specialization": "Partial Differential Equations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/20210525_0955252-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sangeetha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sangeetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Non-Archimedean Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5268.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Santosh Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-santosh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5283.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Saraswathi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-saraswathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5289.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sasi Kumar J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-sasi-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/JS-PHOTO.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Senthilkumar L.S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/l-s-senthilkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Finite Element Method, Finite Difference Method, Fuzzy Algebraic Equation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5248.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Shafiya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shafiya-m/",
        "Designation": "Assistant professor",
        "Specialization": "Dynamical Analysis of Fractional-order Neural Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5315.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sheeja G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-sheeja/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5296.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sheena Christy D.K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-k-sheena-christy/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics , Formal Language and Automata theory, Graph theory, Graph Grammar",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5297.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sivakumar Narsu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-narsu-sivakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5284.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sourav Mondal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sourav-mondal/",
        "Designation": "Assistant Professor",
        "Specialization": "Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/sourav-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sriraman R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sriraman-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Stability Analysis of  Neural Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5360.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Subhankar Sil",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-subhankar-sil/",
        "Designation": "Assistant Professor",
        "Specialization": "Symmetry Analysis for Partial Differential Equations, Conservation laws, Integrable System and Solitons",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/me.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Subrata Maiti",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-subrata-maiti/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio-Fluid Dynamics, Heat Transfer, Modelling and Simulation.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5280.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sudha B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/b-sudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5343.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sudha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-sudha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5345.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Suja K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-suja/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5264.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sujatha E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-sujatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5286.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sumana Ghosh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sumana-ghosh/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Mathematical Biology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5357.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Suresh  M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-suresh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5346.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Suresh E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-suresh/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5321.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sureshkumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sureshkumar-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Differential Equations",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/New-suresh.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Sushobhan Maity",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sushobhan-maity/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5274.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Suvitha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-suvitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Stochastic Processes (Queueing Theory)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5319.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Swaraj Paul",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-swaraj-paul/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5336.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Swarup Barik",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-swarup-barik/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Mechanics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/pic_swarup2.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Tanmoy Chakraborty",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tanmoy-chakraborty/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5276.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Tapas Barman",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tapas-barman/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Fluid Dynamics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5242.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Thamilvanan S.K.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-k-tamilvanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5241.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Thenmozhi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thenmozhi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Fixed Point Theory and Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5307.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Uma J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-uma/",
        "Designation": "Assistant Professor",
        "Specialization": "Non-Archimedean analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5355.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Uma Maheswari P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-uma-maheswari/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5330.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Varadharajan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-varadharajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5245.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Venkatesan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-venkatesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5353.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Vidhya V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vidhya-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5255.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Vidyanandini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-vidyanandini/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5278.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Vignesh P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-vignesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Algebraic Graph Theory",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5331.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Vijayakumar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-vijaya-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics/Applied Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/9444904228-KB-Copy-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Vijayalakshmi G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Applied Stochastic Processes",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5279.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Vijayalakshmi T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vijayalakshmi-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5298.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Visalakshi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-visalakshi/",
        "Designation": "Assistant Professor",
        "Specialization": "Fuzzy topological space and soft fuzzy topological space",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5288.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Mr. Sudhagar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sudhagar-a/",
        "Designation": "Teaching Assistant",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_5267-1.jpg"
    },
    {
        "DepartmentCode": 13540,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Mrs. Jeya Indira R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-jeya-indira-r/",
        "Designation": "Teaching Assistant",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_5365.jpg"
    },
    {
        "DepartmentCode": 146423,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Selvasundaram K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-selvasundaram/",
        "Designation": "Professor and Head",
        "Specialization": "All Accounting and Finance Papers",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/salva-scaled-e1677910592663.jpg"
    },
    {
        "DepartmentCode": 146423,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Shanthi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-shanthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Marketing Management, Strategic Management, Research Methodology, Management Accounting",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Shanthi-P.jpg"
    },
    {
        "DepartmentCode": 146423,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Dr. Thineshkumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-thineshkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Intellectual Capital, Accounting and Finance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/5-scaled.jpg"
    },
    {
        "DepartmentCode": 146423,
        "DepartmentName": "Department of Mathematics",
        "FacultyName": "Ms. Sivakavitha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-sivakavitha/",
        "Designation": "Assistant Professor",
        "Specialization": "CS & AF",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/12-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Lakshmi Priya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-lakshmi-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/edit-LP-photo-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Aniji M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-aniji-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/5130-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Kalaivani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-kalaivani/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Photo_MK-new-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Kavitha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-kavitha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/RK_Profile-Photo-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Madhumitha J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-madhumitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600161-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Parvathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-parvathi-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Advanced Algebra",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/IMG_5423-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Poongodisathiya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-poongodisathiya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Operations Research in Mathematics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/Poongodisathiya.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Saravanakumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-saravanakumar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/saravanan.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Sivakami L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-sivakami/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/PHOTOFEB-23-scaled.jpg"
    },
    {
        "DepartmentCode": 28841,
        "DepartmentName": "Department of Mathematics and Statistics",
        "FacultyName": "Dr. Venmani A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-venmani/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematics and Statistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/600420-scaled.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Gopal T V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/professor-t-v-gopal/",
        "Designation": "Dean, Faculty of Engineering and Technology",
        "Specialization": "Computer Aided Assembly Planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/04/Dr.-GOPAL-T-V-2.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Kingsly Jeba Singh D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/professor-d-kingsly-jeba-singh-ph-d/",
        "Designation": "Dean, Mechanical Engineering",
        "Specialization": "Industry 4.0, Artificial Intelligence, Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DKJS-PP-75-kb-compressed-for-Biometric.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Chandrasekaran P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-chandrasekaran/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-20.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Duraivelu K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-duraivelu/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering (Industrial Engineering)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-86.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Karthik Lakshmanan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karthik-lakshmanan/",
        "Designation": "Visiting Professor",
        "Specialization": "Electronics cooling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-29-at-06.40.07.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Lakshmanan T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-lakshmanan/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/WhatsApp-Image-2023-04-06-at-9.15.29-PM.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Mohammed Iqbal U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-u-mohammed-iqbal/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering (Manufacturing)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-4.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Nandakumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-nandakumar/",
        "Designation": "Professor",
        "Specialization": "Advanced Mechanism Design, Mechanical vibrations, Finite Element Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-29.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Prabhakar Subrahmanyam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prabhakar-subrahmanyam/",
        "Designation": "Visiting Professor",
        "Specialization": "Electronics cooling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Prabhakar.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Prabhu S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-prabhu/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-15.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Rajasekaran T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-rajasekaran/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-55.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Stalin John M R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-r-stalin-john/",
        "Designation": "Professor",
        "Specialization": "Manufacturing, Robotics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-41.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Suresh Kumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-suresh-kumar/",
        "Designation": "Professor",
        "Specialization": "Mechanical Engineering, Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-79.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Arul Jeya Kumar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-arul-jeya-kumar-2/",
        "Designation": "Professor",
        "Specialization": "Manufacturing technology, material science, Industrial engineering, Industry 4.0",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-65.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Balaji G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-balaji/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Engineering, IC Engines",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-32.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Infanta Mary Priya I",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-i-infanta-mary-priya/",
        "Designation": "Associate Professor",
        "Specialization": "Mechanical",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-52.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Jeyakarthikeyan P V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-v-jeyakarthikeyan/",
        "Designation": "Associate Professor",
        "Specialization": "Numerical Integration on finite element methods, computational mechanics and Functionally graded materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-35.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Kamaraj M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-kamaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Design Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/M-Kamaraj.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Karuppudaiyan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-karuppudaiyan/",
        "Designation": "Associate Professor",
        "Specialization": "Bio-Mechanics, Mechanical characterization of cortical bone, and Engineered tissue scaffold structures using 3D Printer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-3.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Kasiraman G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-kasiraman/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Engineering  Mail kasiramg1@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-26.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Magesh V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-magesh-2/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Aided Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-56.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Murali S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-murali/",
        "Designation": "Associate Professor",
        "Specialization": "Human Factors and Ergonomics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Murali-SRM-Profile-2.png"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Prakash M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-prakash-3/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-66.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Santhana Krishnan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/santhana-krishnan-r/",
        "Designation": "Associate Professor",
        "Specialization": "Machine Design, Mechanics of Solids, Engineering Mechanics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-89.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Senthil R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-senthil/",
        "Designation": "Associate Professor",
        "Specialization": "Solar Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-14.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Sumit Pramanik",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sumit-pramanik/",
        "Designation": "Research Associate Professor",
        "Specialization": "Materials & Manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-45.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Vijaya A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-vijaya/",
        "Designation": "Associate Professor",
        "Specialization": "Experimental Mechanics, Metrology, Vision system, Computer Aided manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-61.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Aatthisugan I",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-i-aatthisugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-18.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Abburi Lakshman Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-abburi-lakshman-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG_4647-copy.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Ambigai R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-ambigai/",
        "Designation": "Assistant Professor",
        "Specialization": "Functionally Graded Composites, Metal Matrix Composite, Tribology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-60.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Balaji S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-balaji/",
        "Designation": "Assistant Professor",
        "Specialization": "Internal Combustion Engine and Hydrogen Production Technique (Electrolysis)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/5Y0A6658.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Balakrishnan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-balakrishnan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Gas Dynamics, Fluid Mechanics, Thermodynamics, Propulsion, Rocket Technology, Solar Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-27.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Daniel Glad Stephen J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-j-daniel-glad-stephen/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-57.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Deborah Serenade Stephen",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-deborah-serenade-stephen/",
        "Designation": "Assistant Professor",
        "Specialization": "Grinding / Manufacturing Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/dss.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. GaneshKumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-ganesh-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/Untitled.png"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Gunasekaran M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-gunasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Fluid Mechanics, Applied Aerodynamics, Applied Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/04-2-2.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Harshavardhana N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-harshavardhana/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing engineering and material science.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-90.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Kumaran D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-kumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Product Design and Development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-21.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Manikandan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-manikandan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Renewable Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-25.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Mathan Raj V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-mathan-raj/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-68.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Muralidharan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-muralidharan-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Metal forming, Non-traditional machining, Fluid power control, operation research, Metrology and quality control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-7.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Murugesan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-murugesan/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-72.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Oliver Nesa Raj S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-oliver-nesa-raj/",
        "Designation": "Assistant Professor (Sr.G)",
        "Specialization": "Manufacturing Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-40.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Pankaj Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-pankaj-kumar-2/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Cavitation, Boiling, Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-24.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Piyush Sharma",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-piyush-sharma/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering/Solar Energy Utilization, Thermal Energy Storage Systems, Fluid Mechanics, Coal combustion in drop tube furnace, Hydrogen combustion",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-74.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Praveena V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-praveena/",
        "Designation": "Assistant Professor",
        "Specialization": "IC Engines, Applied thermal engineering, Heat and mass transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-6.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Premkumar N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-premkumar-n/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-48.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Premnath D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-premnath/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-16.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Raghavendra Rao V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-raghavendra-rao/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-19.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Raja D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-d-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "Design, Mechanics and Biomechanics and Biomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-44.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Rajasekar V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-rajasekar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-36.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Sandipan Roy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sandipan-roy/",
        "Designation": "Research Assistant Professor",
        "Specialization": "•Orthopedic Biomechanics •Dental Biomechanics •Dental Biomaterials •Bio composite •Mechanobiology of bone •Solid Mechanics •In-Silico Modeling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Pic.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Santhakumar J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-j-santha-kumar/",
        "Designation": "Assistant Professor(Sr.G)",
        "Specialization": "CAD/CAM",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-94.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Santhosh Kumar Singh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-santhosh-kumar-singh/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Thermal Engineering (Fluid Mechanics)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-38.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Saravanakumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-saravanakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Conventional welding and Solid state Welding process",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-01-at-11.10.17-AM.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Sathishkumar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sathishkumar-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Cool Thermal Energy Storage Systems, Building Cooling applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/A.-Sathishkumar.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Selvam C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-selvam/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering, Refrigeration and Air-Conditioning, Heat and Mass Transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/932-Selvam-a.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Selwyn Jebadurai D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/d-selwyn-jebadurai/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering - Manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-8.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Senthil Kumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-senthil-kumar-2/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/senthilkumar.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Shravan Kumar C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-shravan-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-95.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Siva Krishna Reddy D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-siva-krishna-reddy/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-75.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Sivashankar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-sivashankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Solar energy systems, Internal Combustion engines, Heat transfer",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/PA1913002012005-Sivashakar-M.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Sudhakar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-sudhakar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/10/DSC_8946-scaled-e1678960205747.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Sundar Singh Sivam Sundarlingam Paramasivam",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sundar-singh-sivam-s-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Optimization, MCDA, Machine learning, Manufacturing process, Metal Forming, Metal Cutting",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-46.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Sundaram P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-sundaram/",
        "Designation": "Assistant Professor",
        "Specialization": "Solar Energy Conversion Technologies, Thermal Energy Storage and Nanofluid phase change materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_9003.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Susai Manickam P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-susai-manickam/",
        "Designation": "Assistant Professor",
        "Specialization": "BioMechanics, Finite element analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-84.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Thavamani J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-j-thavamani/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering, Fluid Mechanics & Refrigeration and Air conditioning, CFD Two phase flow analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-97.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Thirunavukkarasu V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-thirunavukkarasu/",
        "Designation": "Associate Professor",
        "Specialization": "Thermal Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-49.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Vamsi Krishna Dommeti",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-vamsi-krishna-dommeti/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-70.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Vignesh K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-s-vignesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/WhatsApp-Image-2023-03-30-at-9.25.44-AM.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Vijayaragavan E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-vijayaragavan/",
        "Designation": "Associate Professor",
        "Specialization": "Biomechanics, New Product Development, Process Excellence, Rehabilitation Engineering, Electric / Autonomous Vehicles",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/EVR.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Dr. Vinoth A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vinoth-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Design / Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-93.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Arokya Agustin S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-arokya-agustin/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-12.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Arul Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-arul-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-22.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Arun N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-n-arun/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. N. Arun.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Arun Prasad K R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-kr-arun-prasad/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-11.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Arun Prasath S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-arun-prasath/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Aided Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-87.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Arun Raj A C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-a-c-arun-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "Advanced Materials Technology, Micromachining, Advanced Manufacturing Processes, Design of Experiments, Optimization Techniques, etc.  Mail arunrajc@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-103.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Balamurugan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-balamurugan/",
        "Designation": "Assistant Professor",
        "Specialization": "Bio mechanics, Thermal spray coating, Robotics and FEM.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-9.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Barathraj R K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-barathraj-r-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal and Fluid Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Barath_Latest_Passport_pic_crop.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Dhanasekaran M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-dhanasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Science, Powder metallurgy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-101.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Harris Samuel R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-harris-samuel/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical Engg design, Mechanics of solids",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-85.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Jegadeesan  K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-jegadeesan-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-03-28-at-9.11.48-AM-e1680890931895.jpeg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Joji Johnson",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-joji-johnson/",
        "Designation": "Assistant Professor",
        "Specialization": "Solar Energy / Thermal Engineering  / Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-photo-2.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Karthikeyan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-n-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Elements of Mechatronics, Metrology and Quality Control, Manufacturing Technology, Additive Manufacturing, Computer Aided Manufacturing and Industry 4.0",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-39.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Kathir Kaman M D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-d-kathir-kaman/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/KATHIR.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Kolli Balasivarama Reddy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-kolli-balasivarama-reddy/",
        "Designation": "Assistant Professor",
        "Specialization": "Engineering Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-58.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Malarmannan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-malarmannan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical / Thermal Power Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/malarxy-1.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Manikanda Raja G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-g-manikanda-raja/",
        "Designation": "Assistant Professor",
        "Specialization": "(Thermal Engineering, Alternate Fuels, Heat Exchangers, Refrigeration, Waste Heat Recovery Systems)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-59.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Manoj Kumar V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-manoj-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Robotics, Microcontroller,IoT, Industrial Automation, Artificial Intelligence , Neural Networks, Machine Learning, Optimization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-96.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Manoj Samson R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-manoj-samson/",
        "Designation": "Assistant Professor",
        "Specialization": "Advanced Machining and Welding Processes, Robotics and Advanced Characterization Techniques",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/09/Manoj-Samson-R-75kb.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Muthu E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/e-muthu/",
        "Designation": "Assistant Professor",
        "Specialization": "Basic Mechanical Engineering, Engineering Mechanics; Mechanics of Solids; Machines & Mechanism; Mechanical Engineering Design; Fundamentals of Vibration and Noise, Design of Transmission Systems  Mail muthue@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/emuthu.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Panneerselvam S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-panneerselvam/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-51.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Ponsankar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-ponsankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Refrigeration, Psychrometry, Fluid dynamics, CFD",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_20230316_114940-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Sachidhanandam M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-sachidhanandam/",
        "Designation": "Assistant Professor",
        "Specialization": "CAD, ROBOTICS, DESIGN OF MECHANICAL SYSTEMS, WELDING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-64.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Sampath Kumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-sampath-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Technology,Unconventional Machining processes,Materials Technology,Metrology and Quality Control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-37.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Sasikumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-sasikumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing engineering, Casting, Physical and Mechanical metallurgy Mail sasikums@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. S. Sasikumar.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Sathiyamoorthy K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-sathiyamoorthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Renewable Energy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-31.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Senkathir S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/senkathir-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Welding, Metallurgy, Operational research  Mail senkaths@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-99.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Sodisetty V N B Prasad",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-n-b-prasad-sodisetty/",
        "Designation": "Assistant Professor",
        "Specialization": "Design Engineering  Mail prasadsm@srmist.edu.in",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prasad-Sodisetty.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Subramanian C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/c-subramanian/",
        "Designation": "Assistant Professor",
        "Specialization": "Composite Materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-33.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Sundar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-sundar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical EngineeringSoftware Interfacing, Fabrication of Mechanical product and Assembly of Mechanical product using software.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-30.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Thirugnanam A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-thirugnanam/",
        "Designation": "Assistant Professor",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-98.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Udayakumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-p-udayakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering, Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-76.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Umasekar V G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-g-umasekar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechanical (Manufacturing Engineering)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-53.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Veeranaath V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-veeranaath-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-88.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Vijay Krishna N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-n-vijay-krishna/",
        "Designation": "Assistant Professor",
        "Specialization": "Thermal Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-102.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Bhaskar V S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-s-bhaskar/",
        "Designation": "Teaching Assistant",
        "Specialization": "Mechanical Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-78.jpg"
    },
    {
        "DepartmentCode": 13455,
        "DepartmentName": "Department of Mechanical Engineering",
        "FacultyName": "Mr. Palani Ganesa Chakravarthy C S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-c-s-palani-ganesa-chakravarthy/",
        "Designation": "Teacher Trainee",
        "Specialization": "Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mech-Photos-80.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Murali G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-murali/",
        "Designation": "Professor and Head",
        "Specialization": "Manufacturing Engineering and Micro electro Mechanical Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Murali.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Muthuramalingam T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-muthuramalingam/",
        "Designation": "Professor",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr_Muthuramalingam_new-removebg-1.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Senthilnathan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-senthilnathan/",
        "Designation": "Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Senthilnathan_R.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Belsam Jeba Ananth .M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/belsam-ananth-m/",
        "Designation": "Associate Professor",
        "Specialization": "Automation, Drives & Control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/Dr_Belsam_Jeba_Ananth__M.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Fouziya Sulthana S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-fouziya-sulthana/",
        "Designation": "Associate Professor",
        "Specialization": "Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__S__Fouziya_Sulthana.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Gangadevi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gangadevi-r/",
        "Designation": "Associate Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Gangadevi_R.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Madhavan Shanmugavel",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-madhavan-shanmugavel/",
        "Designation": "Associate Professor",
        "Specialization": "Unmanned Autonomous Vehicles (UAVs), Dynamical systems design, Modelling and Control, Mechatronics, Industrial Robotics.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Madhavan_Shanmugavel.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Mohamed Rabik M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-mohamed-rabik/",
        "Designation": "Associate Professor",
        "Specialization": "Mechatronics Engineering and Vehicle controls",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr_M_Mohamed_Rabik.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Santhosh Rani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-santhosh-rani/",
        "Designation": "Associate Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__M__Santhosh_Rani.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Anitha Kumari S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-anitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Process Control, System Identification, Robotics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr__S__Anitha_Kumari.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Arivarasan J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/arivarasan-j/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Mr__Arivarasan_J.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Cross T. Asha Wise",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-cross-t-asha-wise/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital systems design, Electronics, VLSI design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Cross_T__Asha_Wise.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Krithika V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-krithika/",
        "Designation": "Assistant Professor",
        "Specialization": "Electric Vehicles/ Hybrid Electric Vehicle, Power Converters",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mrs.-Krithika.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Priya Esther B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-priya-esther/",
        "Designation": "Assistant Professor",
        "Specialization": "Drives & Control, Smart Grid ,Automation Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/Dr__B__Priya_Esther.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Ranjith Pillai R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-ranjith-pillai-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics, Robotics & Control, Smart Actuators and Mechanisms, AI , IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr__Ranjith.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Sarathkumar L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sarathkumar-l/",
        "Designation": "Assistant Professor",
        "Specialization": "Lasers in materials processing, Modelling and simulation of laser interaction (FE Model), Additive manufacturing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/3760-.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Senthilraja S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-senthilraja/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__S__Senthilraja.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Sivanathan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivanathan-k/",
        "Designation": "Assistant Professor(Sr.G)",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Sivanathan_K.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Sujatha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-sujatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Electronics and Communication/ Instrumentation Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr__Sujatha.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Vani S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vani-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr__S__Vani.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Vasanth S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-vasanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Vasanth-Swaminathan.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Vignesh SM",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-m-vignesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Vignesh_S_M.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Dr. Vimalastarbino A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vimalastarbino-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Manipulator Robotics, Process Control and Design of controllers",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Dr__Vimala_Starbino.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Balakumaran G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-balakumaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Manufacturing Engineering, Micro Machining, Tool condition monitoring",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Balakumaran.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Chandrasekaran M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-chandrasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering; Gear design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Chandrasekaran.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Josin Hippolitus A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/josin-hippolitus-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics, Robotics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/profile-pic.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Lakshmi Srinivas A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-lakshmi-srinivas-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr__Lakshmi_Srinivas.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Saravanan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-saravanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Two -Legged walking Robot and Manufacturing Processes",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/K__Saravanan.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Thirugnanam M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-thirugnanam/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Mr_M_Thirugnanam.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Thiyagarajan J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-thiyagarajan/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/thia.jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Mr. Vigneshwaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vigneshwaran-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Vigneshwaran_S.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Ms. Gayathiri D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-d-gayathiri/",
        "Designation": "Assistant Professor",
        "Specialization": "Smart Material",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/Ms_D_Gayathiri.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Ms. Madhumitha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-madhumitha/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Madhumitha_Gnanasankaran.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Ms. Nandhini M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-m-nandhini/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms__M_Nandhini.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Ms. Rajalakshmi TS",
        "ProfileLink": "https://www.srmist.edu.in/faculty/t-s-rajalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mechatronics Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Rajalakshmi_TS-transformed.png"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Ms. Sasikala D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sasikala-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Systems Design, Electronics and Signal Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms Sasikala D..jpg"
    },
    {
        "DepartmentCode": 13465,
        "DepartmentName": "Department of Mechatronics Engineering",
        "FacultyName": "Praveena T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/praveena-t/",
        "Designation": "Teaching Associate",
        "Specialization": "Advanced Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/02.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "FacultyName": "Dr. Kothai Seshathri",
        "ProfileLink": "https://www.srmist.edu.in/faculty/kothai-seshathri/",
        "Designation": "Professor and Head",
        "Specialization": "Agroecology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Kothai-photo.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "FacultyName": "Dr. Anbukkarasi Kaliyaperumal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anbukkarasi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Anbu-1-scaled.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "FacultyName": "Dr. Chikkaraju S.N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-n-chikkaraju/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Science and Agricultural Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Chik-2-scaled.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "FacultyName": "Dr. Dharani C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dharani-c-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Agrometeorology- Climate change, Climate Variability and  Crop modelling",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-C.-Dharani.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "FacultyName": "Dr. Sanjeevagandhi. M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-sanjeevagandhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Sanjeevagandhi.jpg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "FacultyName": "Dr. Sivakumar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivakumar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Engineering - Farm Power and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-04-12-at-2.37.58-AM.jpeg"
    },
    {
        "DepartmentCode": 134577,
        "DepartmentName": "Department of Natural Resources Management",
        "FacultyName": "Mr. Dhinesh K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dhinesh-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Agro forestry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dhinesh.-K.-S.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Revathi Venkataraman",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-revathi-venkataraman/",
        "Designation": "Professor and Chair Person",
        "Specialization": "Wireless Network Security, Trust Computing, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Prof.-Revathi-Venkataraman.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Annapurani Panaiyappan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-annapurani-panaiyappan-k/",
        "Designation": "Professor & HOD",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3760.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Malathy C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-malathy/",
        "Designation": "Professor",
        "Specialization": "Biometrics, Biometrics security, Pattern Recognition",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4309.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Mukesh Krishnan M B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-b-mukeshkrishnan/",
        "Designation": "Professor",
        "Specialization": "Networking and Communication",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3768.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Saravanan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-saravanan/",
        "Designation": "Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3796.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Thenmozhi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-thenmozhi/",
        "Designation": "Professor",
        "Specialization": "Data structures, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4308.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Anand L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-anand/",
        "Designation": "ISRO -IIRS & Naan Mudhalvan Nodal officer & AICTE  Internships Co Ordinator - SRMIST - Associate  Professor",
        "Specialization": "Deep learning & IoT & DevOps, GIS, GeoWeb Computation and resources ,disaster management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3815.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Anbarasu V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-anbarasu/",
        "Designation": "Associate Professor",
        "Specialization": "Human Computer Interaction, Image Processing, Cyber Security, IoT, Machine Learning, Pervasive computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3770.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Arokiaraj Jovith A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-a-arokiaraj-jovith/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Security and Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/jovith.png"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Balamurugan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-balamurugan/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, Internet of Things, Wireless Sensor Networks, Cyber Security, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4326.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Deepa Thilak K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-deepa-thilak/",
        "Designation": "Associate Professor",
        "Specialization": "Information Security, VANET, MANET, Optimization Techniques, Cloud Computing, Machine Learning, Deep Learning, IoT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3808.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Elizabeth Jesi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-elizabeth-jesi/",
        "Designation": "Associate Professor",
        "Specialization": "Image processing, Data Structures and algorithms",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Elizabeth-Jesi.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Gayathri V M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-v-m-gayathri/",
        "Designation": "Associate Professor",
        "Specialization": "Information Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3787.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Godwin Ponsam J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/j-godwin-ponsam/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3820.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Hemamalini V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-hemamalini/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, Ad hoc and Sensor networks, Security, Artificial Intelligence, Web Programming, Operating System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4210.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Kalaiselvi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-kalaiselvi/",
        "Designation": "Associate Professor",
        "Specialization": "Wireless Sensor Networks, Machine Learning, IOT",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3807.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Krishnaraj N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-krishnaraj/",
        "Designation": "Associate Professor",
        "Specialization": "Biometrics, Artificial Intelligence, Internet of Things , Wireless Sensor Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3751.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Mary Subaja Christo",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mary-subaja-christo/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security, Block Chain, IoT, Machine Learning, Cloud Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4216.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Metilda Florence S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-metilda-florence/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, IOT, Image Processing, Video Processing, AI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3818.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Murugaanandam S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-murugaanandam/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks, Information Security, Mobile Ad hoc Networks, Information Assurance and Security, Data Center Administration & Management, Artificial Intelligence, Computer Architecture. Computer Communication, Network Programming and Protocols. Information Assurance and Security, Information Security, Microprocessor.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3800.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Naga Malleswari T Y J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-tyj-naga-malleswari/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4222.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Naresh R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-naresh/",
        "Designation": "Associate Professor",
        "Specialization": "Cloud Computing, Distributed Networks, Group Key Management, Web Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3758.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Nimala K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-nimala/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4235.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Prabakeran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-prabakeran/",
        "Designation": "Associate Professor",
        "Specialization": "Network Security/ Information Security, Cloud Computing, WSN, Machine Learning Techniques.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3773.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Prasath N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/n-prasath/",
        "Designation": "Associate Professor",
        "Specialization": "IoT and Cloud, Sensor Data Fusion, Intelligent Computing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3814.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Srinivas L N B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-l-n-b-srinivas/",
        "Designation": "Associate Professor",
        "Specialization": "Data Mining, Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3834.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Supraja P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-supraja/",
        "Designation": "Associate Professor",
        "Specialization": "Deep Learning, Computer Vision, Machine Learning, Cognitive Computing, Optimization Algorithms, Soft Computing, Cognitive radio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4214.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Suresh A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-suresh/",
        "Designation": "Associate Professor",
        "Specialization": "IoT / Data Mining, Image Processing, Networking, Distributed Computing, Bigdata and Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3762.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Suseela G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-suseela/",
        "Designation": "Associate Professor",
        "Specialization": "Image Processing, Image Security, Wireless Sensor Networks, Machine Learning, Malware visualization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4224.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Thenmalar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-thenmalar/",
        "Designation": "Associate Professor",
        "Specialization": "Natural Language Processing, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3838.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Venkatesh K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-venkatesh/",
        "Designation": "Associate Professor",
        "Specialization": "Networking, Cloud Computing, AI & ML, Data Mining",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3755.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Vinoth Kumar C N S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-n-s-vinoth-kumar/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security | Forensics | Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3844.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Visalakshi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-visalakshi/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3835.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Yamini B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-yamini/",
        "Designation": "Associate Professor",
        "Specialization": "Cyber Security, Image Processing, Wireless Sensor Networks, System Design, Machine Learning, Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3803.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Anand M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-anand/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3752.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Angayarkanni S A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-a-angayarkanni/",
        "Designation": "Assistant Professor",
        "Specialization": "Intelligent Road Transportation System",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3791.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Arun A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arun-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Networks & Image Processing.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4227.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Balachander T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/t-balachander/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Communication and Networking, Cognitive Networks, Wireless Communication, Cybersecurity",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4230.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Balaji Srikaanth P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-balaji-srikaanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3769.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Balakiruthiga B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-balakrithiga/",
        "Designation": "Assistant Professor",
        "Specialization": "NETWORKING AND COMMUNICATIONS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3778.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Banu Priya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-banu-priya-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Medical Internet of Things, Biomedical Signal and Image Processing, Deep Learning, Embedded Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3852.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Dayana D S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dayana-d-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Blockchain Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3830-1.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Deepa N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-deepa/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3790.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Deepika D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-deepika-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning in Healthcare Application",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3792.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Fancy C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-c-fancy/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3767.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Geetha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/geetha-g/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT, Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3825.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Gouthaman P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-gouthaman/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Project management, Communication, Interpersonal skills, Management, Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3779.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Gowri A S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-gowri-a-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Reinforcement Learning, Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4207.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Helen Victoria A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-helen-victoria/",
        "Designation": "Assistant Professor",
        "Specialization": "Big Data Analytics,Cloud Computing,Software Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3783.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Jeyaselvi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-jeyaselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "Networking and Communications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3804.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Joseph Raymond V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-joseph-raymond/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3821.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Kayalvizhi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-kayalvizhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Cryptography, Wireless Sensor Security, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4223.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Lakshmi Dhevi B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-lakshmi-dhevi/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning, Artificial Intelligence, Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3781.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Lakshminarayanan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-lakshminarayanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Sensor Networks, IoT, Image Processing, Networking, Cloud Computing, Machine Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4226.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Logeshwari R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-logeshwari-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3810.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Mahalakshmi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mahalakshmi-m/",
        "Designation": "Assistant Professor",
        "Specialization": "IoT, Computer Vision and Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3846.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Mahalakshmi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mahalakshmi-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Retrieval, Machine Learning, Deep Learning, Internet of Things",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3839.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Manickam M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-manickam-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Network and Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3798.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Maranco M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-maranco-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security, Digital Forensics, Cyber Physical Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3813.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Meenakshi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-meenakshi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Mining, Machine Learning, Image Processing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3832.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Nallarasan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-v-nallarasan/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Networks, Internet of things, Data Security, Bigdata, Machine learning, Edge computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4229.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Nithya Paranthaman R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nithya-paranthaman-r/",
        "Designation": "Assistant Professor",
        "Specialization": "CYBERSECURITY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3775.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Nivedhitha M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nivedhitha-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4218.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Prabhu Chakkaravarthy A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-prabhu-chakkaravarthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Image Processing, Machine Learning, Deep Learning, Optimization Techniques,",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3848.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Prabhu R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prabhu-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Remote Sensing, Image Processing, Machine learning, Deep Learning, Communication Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3841.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Praveena Akki",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-praveena-akki/",
        "Designation": "Assistant  Professor",
        "Specialization": "Cloud Computing, Networking, Security, Artificial Intelligence, Machine learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3801.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Preethiya T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-preethiya-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3859.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Priyanka R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-priyanka-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning & Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3777.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Radhika R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-radhika/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things ,Cloud Computing , Data Analytics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3812.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Rajaram V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-rajaram/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3765.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Ramesh S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3759.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Safa M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-m-safa/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4202.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Saranya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-g-saranya/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Laerning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3766.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Savaridassan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/savaridassan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing, Explainable AI, Cyber Security, Deep Learning, Computer Vision, Machine Learning, Computer Networks, , Augmented Reality",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3822.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Saveetha.D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-d-saveetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3826.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Senthamarai N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-senthamarai/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4212.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Senthil Murugan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-senthil-murugan-v/",
        "Designation": "Assistant Professor",
        "Specialization": "MANET’s, VANET’s, IoT, Machine learning.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_5730.jpeg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Sivakumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivakumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Object Oriented Programming, Machine Learning, Computer Networks, Web Development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3753.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Sujatha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-g-sujatha/",
        "Designation": "Assistant Professor",
        "Specialization": "Information security and cloud storage security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4204.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Sundarrajan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sundarrajan-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3771.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Swathy R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-swathy-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning , Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3763.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Thanga Revathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-thanga-revathi/",
        "Designation": "Associate Professor",
        "Specialization": "Security and Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3856.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Ushasukhanya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ushasukhanya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Science and Engineering",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4221.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Vaishnavi Moorthy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vaishnavi-moorthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence, Cyber Security, AR/VR/MR technologies, Generative AI",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3784.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Varun kumar K A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-a-varun-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Cyber Security, Malware Analysis, Image Processing, Networking, Cloud Computing, Machine Learning, Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3827.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Vedhavathy T R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-r-vedhavathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Wireless Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3802.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Dr. Vijay Vasanth A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-vijay-vasanth/",
        "Designation": "Assistant Professor",
        "Specialization": "Ad hoc Networks",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4233.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mr. Karthikeyan H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/h-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4231.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mr. Manikandan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-manikandan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/K.MANIKANDAN-PP7.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mr. Prabakaran J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-j-prabakaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Computer Networks, Cloud Computing, Cryptography and Network Security",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3816.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mr. Senthil Kumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-k-senthil-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Information Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/senthil_photo.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mr. Shanmuganathan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-shanmuganathan-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things, Network Security, Wireless Sensor Networks and Wireless Networks.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Mr.-Shanmuganathan-V.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Abirami R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-r-abirami/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Image security, Watermarking, Deep learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3780.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Asha Abraham",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-asha-abraham/",
        "Designation": "Assistant Professor",
        "Specialization": "Artificial Intelligence",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3795.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Dhwarithaa R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-dhwarithaa-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4219.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Divya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-g-divya/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Blockchain",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3789.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Lavanya V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-lavanya/",
        "Designation": "Assistant Professor",
        "Specialization": "Cloud Computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3849.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Parimala G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-parimala/",
        "Designation": "Assistant Professor",
        "Specialization": "Internet of Things,Network Security,Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4206.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Preethi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-preethi-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Machine learning, Deep Learning, NLP",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3794.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Saisanthiya D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-saisanthiya/",
        "Designation": "Assistant Professor",
        "Specialization": "Network Security, Computer Networks, Artificial Intelligence, Machine Learning, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3788.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Sujatha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-sujatha-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Natural Language Processing, Data Mining, Deep Learning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4209.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Mrs. Vijayalakshmi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-v-vijayalakshmi/",
        "Designation": "Assistant Professor",
        "Specialization": "Data Structure, Networking",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_3793.jpg"
    },
    {
        "DepartmentCode": 13522,
        "DepartmentName": "Department of Networking And Communications",
        "FacultyName": "Ms. Priyanga S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/priyanga-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4220.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "FacultyName": "Prof. Manikandan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-manikandan/",
        "Designation": "Professor and Head",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Manikandan.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "FacultyName": "Prof. Dr. Lakshmi K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-k-s-lakshmi/",
        "Designation": "Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/02/Dr-K-S-Lakshmi.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "FacultyName": "Dr. Kavitha J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-kavitha/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_0082-scaled.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "FacultyName": "Dr. Kokilambigai K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-s-kokilambigai/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/Kokilambigai-K.-S.jpg"
    },
    {
        "DepartmentCode": 54609,
        "DepartmentName": "Department of Pharmaceutical Analysis",
        "FacultyName": "Dr. Seetharaman R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-seetharaman/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/seetharaman-Pass-port-size-03-09-2022-4-2.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "FacultyName": "Prof. Kathiravan M K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-m-k-kathiravan/",
        "Designation": "Professor and Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-12-02-at-18.26.47.jpeg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "FacultyName": "Dr. Velmurugan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-velmurugan/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20240327-WA0008.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "FacultyName": "Dr. Sundarrajan T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-sundarrajan/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-27-at-2.12.41-PM.jpeg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "FacultyName": "Dr. D.Priya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-22-at-8.31.23-AM-2.jpeg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "FacultyName": "Dr. ShanthaKumar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-shanthakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Photo-College.jpg"
    },
    {
        "DepartmentCode": 54618,
        "DepartmentName": "Department of Pharmaceutical Chemistry",
        "FacultyName": "Dr. G.V. Anjana",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-g-v-anjana/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-22-at-8.32.52-AM.jpeg"
    },
    {
        "DepartmentCode": 54629,
        "DepartmentName": "Department of Pharmaceutical Quality Assurance",
        "FacultyName": "Dr. Kanaka Parvathi .K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kanaka-parvathi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Quality Assurance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-26-at-10.30.44_69e78ee5.jpg"
    },
    {
        "DepartmentCode": 54629,
        "DepartmentName": "Department of Pharmaceutical Quality Assurance",
        "FacultyName": "Dr. Kella Alekhya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kella-alekhya/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Pharmaceutical Analysis and Quality Assurance",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-03-18-at-8.20.42-AM-1.jpeg"
    },
    {
        "DepartmentCode": 54626,
        "DepartmentName": "Department of Pharmaceutical Regulatory Affairs",
        "FacultyName": "Mr. Tirumala Chetty Sudheer Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-tirumala-chetty-sudheer-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutical Regulatory Affairs",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-13-at-11.02.40-PM.jpeg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Prof. Damodharan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-n-damodharan/",
        "Designation": "Vice Principal / Professor & Head",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/IMG-20221201-WA0004.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. Mothilal M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-m-mothilal/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Mothilal-Profile-Photo-SRMCP.jpeg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. Sangeetha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-s-sangeetha/",
        "Designation": "Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/WhatsApp-Image-2023-01-29-at-10.46.40-PM.jpeg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. Umashankar M S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-m-s-umashankar/",
        "Designation": "Professor",
        "Specialization": "PHARMACEUTICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/MY-COLLEGE-PHOTO.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. Manimaran V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-manimaran/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/WhatsApp-Image-2023-01-31-at-3.17.43-PM.jpeg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. Kavitha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-kavitha/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/IMG-20221202-WA0003.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. P.N. Remya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-n-remya/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Remya-Photo.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. Saraswathi T S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-t-s-saraswathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/IMG-20221202-WA0000.jpg"
    },
    {
        "DepartmentCode": 54598,
        "DepartmentName": "Department of Pharmaceutics",
        "FacultyName": "Dr. Gayathri H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-h-gayathri/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmaceutics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-12-01-at-4.13.37-PM.jpeg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "FacultyName": "Prof. Kamaraj R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-r-kamaraj/",
        "Designation": "Professor and Head",
        "Specialization": "Pharmaceutical Regulatory Affairs, Clinical Research, Pharmacovigilance and Medical Writing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-13-at-1.07.09-PM.jpeg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "FacultyName": "Dr. Thirumal M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-thirumal/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmacognosy and Phytochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Thirumal-M-photo-3.jpg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "FacultyName": "Dr. Sakthi Priyadarsini S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sakthi-priyadharshini-s/",
        "Designation": "Assistant Professor",
        "Specialization": "PHARMACOGNOSY, PHYTOCHEMISTRY, NATURAL PRODUCTS RESEARCH, ANTI-CANCER RESEARCH",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-31-at-8.07.08-PM.jpeg"
    },
    {
        "DepartmentCode": 54622,
        "DepartmentName": "Department of Pharmacognosy",
        "FacultyName": "Dr. Shalini K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-shalini/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/35-copy-1-1.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "FacultyName": "Dr. Chitra V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-v-chitra/",
        "Designation": "Dean, Professor & Head, Department of Pharmaceutics, College of Pharmacy",
        "Specialization": "Neuroscience, Metabolic disease, Diabetes",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-V.-Chitra-1.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "FacultyName": "Dr. Sumithra M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-sumithra/",
        "Designation": "Associate Professor",
        "Specialization": "Neuropharmacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/IMG-20221201-WA0016-2-3.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "FacultyName": "Dr. Tamilanban T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-tamilanban/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_0071-scaled.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "FacultyName": "Dr. Gowri K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-gowri/",
        "Designation": "Assistant Professor",
        "Specialization": "OSTEOARTHRITIS, IN-VIVO, EX-OVO AND IN-VITRO METHODS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/044A9588-scaled.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "FacultyName": "Dr. Narayanan J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-narayanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DSC_0090-scaled.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "FacultyName": "Mrs. Gayathiri K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-gayathri/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/gayathiri-k-Photo.jpg"
    },
    {
        "DepartmentCode": 54606,
        "DepartmentName": "Department of Pharmacology",
        "FacultyName": "Mrs. Sri Devi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-r-sri-devi/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmacology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Passport-photo01-12-22-1-1.jpeg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Dr. Vijayakumar T M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-m-vijayakumar/",
        "Designation": "Professor and Head",
        "Specialization": "Pharmacy Practice/Clinical Pharmacy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Picture1-1.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Dr. Rajanandh M G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/118252/",
        "Designation": "Professor",
        "Specialization": "Clinical Research, Pharmacovigilance, Pharmacoepidemiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/MGR.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Dr. Sarumathy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-sarumathy/",
        "Designation": "Associate Professor",
        "Specialization": "Pharmacy Practice",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/WhatsApp-Image-2023-01-25-at-3.35.42-PM.jpeg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Dr. Jagadeesan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-jagadeesan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Dr-Jagadeesan.jpeg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Dr. Nandimandalam Sai Supra Siddhu K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-nandimandalam-sai-supra-siddhu-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/Siddhu.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Dr. Priyadharshini A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-priyadharshini/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmacy Practice",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/IMG-20230125-WA0083.jpg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Dr. Sriram A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-sriram/",
        "Designation": "Assistant Professor",
        "Specialization": "Pharmacy Practice, Clinical Pharmacy,  Pharmacoepidemiology and Pharmacoeconomics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/WhatsApp-Image-2023-01-25-at-3.34.40-PM.jpeg"
    },
    {
        "DepartmentCode": 54633,
        "DepartmentName": "Department of Pharmacy Practice",
        "FacultyName": "Mrs. Krishna Prabha N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-n-krishna-prabha/",
        "Designation": "Assistant Professor",
        "Specialization": "Neuroscience",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/NKP-1.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "FacultyName": "Prof. Mohana Krishnan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mohana-krishnan-r/",
        "Designation": "Director, Sports",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/02/Dr-R-Mohana-Krishnan.jpeg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "FacultyName": "Dr. Jayasingh Albert Chandrasekar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-jayasingh-albert-chandrasekar/",
        "Designation": "Associate Professor & Head",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230315-WA0008.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "FacultyName": "Dr. ASATH ALIKHAN D J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-asath-alikhan-d-j/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0031.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "FacultyName": "Dr. Louis Raj Y C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-y-c-louis-raj/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0034-1.jpg"
    },
    {
        "DepartmentCode": 24110,
        "DepartmentName": "Department of Physical Education & Sports Sciences",
        "FacultyName": "Dr. Siva M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-siva-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Sports Training and Volleyball",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/siva.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. John Thiruvadigal D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-john-thiruvadigal/",
        "Designation": "Professor and Dean of Sciences",
        "Specialization": "Physics & Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. D. JOHN THIRUVADIGAL.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Karthigeyan A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-karthigeyan/",
        "Designation": "Professor and Head Incharge",
        "Specialization": "Physics & Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4701.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Iyakutti K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-iyakutti-k/",
        "Designation": "Professor (Emeritus)",
        "Specialization": "Computational design and Experimental studies in nano material",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.KI_.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Malar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-malar/",
        "Designation": "Research Professor",
        "Specialization": "Thin film photovoltaics for green energy adaptation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4748.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Sarpangala Venkataprasad Bhat, FRSC",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-venkataprasad-bhat/",
        "Designation": "Research Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/svbhat-photo-2024.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Abhay A. Sagade",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-abhay-a-sagade/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Abhay-Sagade.png"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Alagiri M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-alagiri/",
        "Designation": "Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4762.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Annie Sujatha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-annie-sujatha/",
        "Designation": "Associate Professor",
        "Specialization": "Physics, Material science and Non linear optics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4779.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Archana J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-j-archana/",
        "Designation": "Associate Professor (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-01-at-6.56.06-PM.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Arijit Sen",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arijit-sen/",
        "Designation": "Research Associate Professor",
        "Specialization": "Quantum Transport at Nanoscale",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/AS.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Chandramohan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-chandramohan/",
        "Designation": "Research Associate Professor",
        "Specialization": "Experimental Condensed Matter Physics - 2D Materials and Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4714.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Debabrata Sarkar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-debabrata-sarkar/",
        "Designation": "Research Associate Professor",
        "Specialization": "Nanomaterials for Energy and Environmental Applications:",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4740.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Devanand Venkatasubbu G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-devanand-venkatasubbu/",
        "Designation": "Associate Professor",
        "Specialization": "Nanomedicine",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Picture.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Gopalakrishnan C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-gopalakrishnan/",
        "Designation": "Associate Professor",
        "Specialization": "Nanostructured materials, Nanomagnetic Thin films and nanoparticles, magnetic hyperthermia based drug delivery system.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4693.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Jaivardhan Sinha",
        "ProfileLink": "https://www.srmist.edu.in/faculty/jaivardhan-sinha/",
        "Designation": "Research Associate Professor",
        "Specialization": "Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Jaivardhan-Sinha_Photo.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Kalaivani T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-kalaivani/",
        "Designation": "Associate Professor",
        "Specialization": "Synthesis of nanomagnetic materials for supercapacitor applications and drug delivery applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4788.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Kamala Bharathi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-kamala-bharathi/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4712.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Kathirvel V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-kathirvel/",
        "Designation": "Associate Professor",
        "Specialization": "DFT calculations on Thermoelectric Materials, High Pressure Studies on Intermetallics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4765.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Kiran Mangalampalli",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kiran-mangalampalli/",
        "Designation": "Research Associate Professor",
        "Specialization": "Experimental Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Kiran-Photo-recent.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Krishnamohan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-krishnamohan/",
        "Designation": "Associate Director (Admissions) & Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. M. Krishnamohan.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Nisha K D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-d-nisha/",
        "Designation": "Associate Professor",
        "Specialization": "Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/KDN-FP-PHOTO.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Preferencial Kala C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-preferencial-kala/",
        "Designation": "Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-2-2-e1714110462919.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Rohit Dhir",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rohit-dhir/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4731.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Sanjay Kumar Mehta",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sanjay-kumar-mehta/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4749-1.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Saurabh Ghosh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-saurabh-ghosh/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/SaurabhGhosh_photo-scaled.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Vijayakumar T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-vijayakumar/",
        "Designation": "Associate Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4783.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Yuvaraj S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-yuvaraj-2/",
        "Designation": "Research Associate Professor",
        "Specialization": "Materials Science and Sensor Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/YUVARAJ.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Ajay Rakkesh R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-ajay-rakkesh/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/New-Photo_Ajay_edited.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Alagiri Swamy A A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-a-alagiri-swamy/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic nanoelectronics, Molecular Assembly Devices",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.-Alagiri-Swamy-A-A.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Alladi Hemanth Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-alladi-hemanth-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Clouds and Atmospheric aerosols",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Hem_Profile_pic.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Alok Kumar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-alok-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Mathematical Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/alok-recent.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Anand Mohan Shrivastav",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-anand-mohan-shrivastav/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Optics and Photonics, Biosensors",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/5Y0A0902.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Anbumozhi Angayarkanni S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-anbumozhi-angayarkanni/",
        "Designation": "Assistant Professor",
        "Specialization": "Soft matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4752.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Angeline Little Flower N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-angeline-little-flower/",
        "Designation": "Assistant Professor",
        "Specialization": "Environmental Nanoscience",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4686.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Arnab Ganguly",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arnab-ganguly/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4725.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Arul Varman K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-arul-varman/",
        "Designation": "Assistant Professor",
        "Specialization": "Organic and Perovskite Semiconductors for Electronic Device Applications.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Pic_SRM-3.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Bakiyaraj Ganesamoorthy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/g-bakiyaraj/",
        "Designation": "Assistant Professor (Sr. Gr)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4690-1-3.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Banasree Sadhukhan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-banasree-sadhukhan/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Condensed Matter Physics (Theory)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/BS-scaled.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Bharath G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/bharath-g/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Sustainable Perspectives in Research on the Water-Energy-Food Nexus",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4735.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Bhaskar Chandra Behera",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-bhaskar-chandra-behera/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Experimental Condensed Matter and Nanomaterials Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4711.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Elangovan Elamurugu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-elangovan-elamurugu/",
        "Designation": "Assistant Professor",
        "Specialization": "Device Fabrication (Thin-films, Nanoparticles, Materials Synthesis, 2D Materials, Crystal Growth)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Photo_Elangovan-Elamurugu-scaled.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Eswaraiah Varrla",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-eswaraiah-varrla/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4737.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Geetha A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-geetha-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanotechnology, Spectroscopy, Ultrasonics, Advanced Electronics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4761.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Gunasekaran B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-gunasekaran/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-B.-Gunasekaran.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Hariharan R M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-m-hariharan/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Materials Science, Nano Devices and Systems",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4780.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Harish S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-s-harish/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/Passport-size-photo.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Janani Sivasankar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-jananisivasankar/",
        "Designation": "Assistant Professor",
        "Specialization": "Physics & Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4790.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Junaid Masud Laskar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-junaid-masud-laskar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Junaid-passport.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Justin Jesuraj P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-justin-jesuraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Optoelectronic devices, Nanomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/my-picture.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Karthika P C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/karthika-p-c/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanocomputating , Nanoelectronics simulation, Nanotechnology in Machine Learning, Nanotechnology in Artificial Intelligence & Datascience,Nanomodeling & computing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4697.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Kovendhan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-kovendhan/",
        "Designation": "Assistant Professor",
        "Specialization": "Condensed Matter Physics (Experimental)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4751.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Lakshya Daukiya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-lakshya-daukiya/",
        "Designation": "Research Assistant Professor",
        "Specialization": "2D materials and Surface Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-10.44.12_617e1f8e.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Madhuparna Karmakar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-madhuparna/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Quantum Many Body Theory, Superconductivity, Magnetism, Ultracold atomic gases, Disorder induced phase transitions",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/mkarmakar_photo.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Maheswaran R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-maheswaran/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4768.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Mani Rahulan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-mani-rahulan/",
        "Designation": "Assistant Professor",
        "Specialization": "Intense field laser-matter Interaction, Nanophotonics and Nanomedicine.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4764.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Mathimalar S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mathimalar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Topological materials spectroscopic studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-26-at-13.45.40.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Meenal Deo",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-meenal-deo/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Profile-Photo.jpeg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Muthuganesan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/muthuganesan-r/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Muthu-Photo.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Naga Rajesh A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-naga-rajesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Atmospheric Dynamics, Climate Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/NagaRajesh.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Payel Bandyopadhyay",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-payel-bandyopadhyay/",
        "Designation": "Assistant Professor",
        "Specialization": "Structure-Property correlation, Mechanical behaviour of materials, Polymer thin films",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4721.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Radhamani  A. V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-v-radhamani/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Advanced Materials Research",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Radhamani-photo_24th-April-24.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Rajaboopathi Mani",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajaboopathi-m/",
        "Designation": "Research Assistant Professor",
        "Specialization": "THz Materials, Nanophosphors, Mesocrystals, Non-Classical Crystallization",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4728-e1714706455573.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Ramesh V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-ramesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Crystal growth and Characterization & Functional Nanomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4703.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Ravikirana",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ravikirana/",
        "Designation": "Assistant Professor",
        "Specialization": "Metullurgy / materials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4729.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Rudra Banerjee",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rudra-banerjee/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational Condensed Matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4717_2.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Sandeep K. Lakhera",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sandeep-k-lakhera/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4773.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Santhi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-santhi/",
        "Designation": "Assistant Professor",
        "Specialization": "Physics and Nanotechnology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG-20240425-WA0005.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Shadak Alee K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-shadak-alee/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Optics and Photonics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Shadak-sir.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Siva C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-siva/",
        "Designation": "Assistant Professor",
        "Specialization": "Nanocomposites, Nanocatalysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4695.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Sivakumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-sivakumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Nuclear Magnetic Resonance Spectroscopy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PSK.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Sougata Mallick",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sougata-mallick/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Spintronics & Nanomagnetism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4766.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Srijani Mallik",
        "ProfileLink": "https://www.srmist.edu.in/faculty/srijani-mallik/",
        "Designation": "Research Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4719.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Subhajit Sarkar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/subhajit-sarkar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Condensed Matter Theory and Statistical Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4705.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Subhojyoti Sinha",
        "ProfileLink": "https://www.srmist.edu.in/faculty/subhojyoti-sinha/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Materials for electronic applications",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Photo-3.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Surya V J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-v-j-surya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/19263C.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Tamilselvan Appadurai",
        "ProfileLink": "https://www.srmist.edu.in/faculty/tamilselvan-appadurai/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Semiconductor nanomaterials",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4769.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Trilochan Sahoo",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-trilochan-sahoo/",
        "Designation": "Assistant Professor",
        "Specialization": "Solid State Physics & Materials Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/DSC_4771.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Triparno Bandyopadhyay",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-triparno-bandyopadhyay/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Particle Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4722.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Tushar H. Rana",
        "ProfileLink": "https://www.srmist.edu.in/faculty/tushar-h-rana/",
        "Designation": "Assistant Professor",
        "Specialization": "Computational condensed matter Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4689.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Vattikondala Ganesh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vattikondala-ganesh/",
        "Designation": "Assistant Professor",
        "Specialization": "Physics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/DSC_4710.jpg"
    },
    {
        "DepartmentCode": 13468,
        "DepartmentName": "Department of Physics and Nanotechnology",
        "FacultyName": "Dr. Venkata Ravindra A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-venkata-ravindra-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Materials Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Venkata-Ravindra-A_2-e1714130398264.jpg"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "FacultyName": "Dr. Karpagavalli S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karpagavalli-s/",
        "Designation": "Associate Professor and HoD",
        "Specialization": "Plant Pathology - Integrated Management of diseases of rice, pulses",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Karp-2-scaled-e1681973643757.jpg"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "FacultyName": "Dr. Akshaya S B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-akshaya-s-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Mushroom Cultivation Technology, Biomolecules, Biological control",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Akshaya.jpg"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "FacultyName": "Dr. Rex. B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-rex/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Pathology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rex.-B.png"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "FacultyName": "Dr. Vinod Kumar. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-vinod-kumar-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant pathology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Vinod-pp-2019.jpeg"
    },
    {
        "DepartmentCode": 114898,
        "DepartmentName": "Department of Plant Pathology",
        "FacultyName": "Ms. Aruna G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/aruna-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Plant Pathology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/WhatsApp-Image-2023-07-25-at-11.56.30-AM.jpeg"
    },
    {
        "DepartmentCode": 134565,
        "DepartmentName": "Department of Plant Protection",
        "FacultyName": "Dr. Rageshwari Selvaraj",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rageshwari-selvaraj/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Plant Pathology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Dr.-Rageshwari.jpg"
    },
    {
        "DepartmentCode": 134565,
        "DepartmentName": "Department of Plant Protection",
        "FacultyName": "Dr. Ashokkumar N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-ashokkumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Nematology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr__ASHOKKUMAR_N.png"
    },
    {
        "DepartmentCode": 134565,
        "DepartmentName": "Department of Plant Protection",
        "FacultyName": "Dr. Ramazeame L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ramazeame-l/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Rama-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90465,
        "DepartmentName": "Department of Post Harvest and Technology",
        "FacultyName": "Dr. Prakash K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-prakash-k/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Fruit Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Prak-1-scaled.jpg"
    },
    {
        "DepartmentCode": 90465,
        "DepartmentName": "Department of Post Harvest and Technology",
        "FacultyName": "Dr. Sheela. P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-sheela/",
        "Designation": "Assistant Professor",
        "Specialization": "Food Science and Nutrition",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Shee-2-scaled.jpg"
    },
    {
        "DepartmentCode": 90465,
        "DepartmentName": "Department of Post Harvest and Technology",
        "FacultyName": "Ms. Chandraprabha S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-chandraprabha/",
        "Designation": "Assistant Professor",
        "Specialization": "Food Science and Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/08/S-CHANDRAPRABHA-scaled.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "FacultyName": "Dr. Senthil Kumaran J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-senthil-kumaran-j/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "School Psychology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/Dr.-Senthil-Kumaran-J.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "FacultyName": "Dr. Shyamala Dinakar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-shyamala-dinakar/",
        "Designation": "Visiting Faculty",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20221228-WA0002-3.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "FacultyName": "Ms. Murugeshwari P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-murugeshwari-p/",
        "Designation": "Teaching Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1270-scaled.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "FacultyName": "Ms. Sujatha Sathiya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sujatha-sathiya/",
        "Designation": "Teaching Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Sujatha-Sathiya-scaled.jpg"
    },
    {
        "DepartmentCode": 24102,
        "DepartmentName": "Department of Psychology",
        "FacultyName": "Ms. Shifa Hansa",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-shifa-hansa/",
        "Designation": "Teaching Associate",
        "Specialization": "Teaching Associate in Psychology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/01/IMG-20230228-WA0018.jpg"
    },
    {
        "DepartmentCode": 90484,
        "DepartmentName": "Department of Social Sciences",
        "FacultyName": "Dr. Periasami Nagappan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-periasami-nagappan/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Agricultural Economics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Peri-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 90484,
        "DepartmentName": "Department of Social Sciences",
        "FacultyName": "Dr. Naveen Kumar M R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-naveen-kumar-m-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Extension",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Naveen-Kumar.jpg"
    },
    {
        "DepartmentCode": 90484,
        "DepartmentName": "Department of Social Sciences",
        "FacultyName": "Dr. Sasikumar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sasikumar-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Screenshot_2023-01-23-05-54-33-880_com.google.android.gm_.jpg"
    },
    {
        "DepartmentCode": 75276,
        "DepartmentName": "Department of Social Work",
        "FacultyName": "Dr. Mathew Arumai M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-mathew-arumai/",
        "Designation": "Head i/c & Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/01/600578-scaled.jpg"
    },
    {
        "DepartmentCode": 75276,
        "DepartmentName": "Department of Social Work",
        "FacultyName": "Dr. Ganesh S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ganesh-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/Untitled-design.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "FacultyName": "Dr.  Angelin Silviya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-angelin-silviya/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Science and Agricultural Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ange-2-scaled.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "FacultyName": "Dr. Dinesh  G.K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dinesh-g-k/",
        "Designation": "",
        "Specialization": "Environmental Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dinesh.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "FacultyName": "Dr. Melvin Joe. M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-melvin-m-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Agricultural Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Dr.-Melvin-Joe.png"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "FacultyName": "Dr. Raja Rajeshwaran T S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/raja-rajeshwaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Soil Fertility, GPS Soil mapping",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/AVM-Studio-Copy_Fotor-3-scaled.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "FacultyName": "Prabhakaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-prabhakaran/",
        "Designation": "Assistant Professor",
        "Specialization": "Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Mr.-S.-Prabhakaran.jpg"
    },
    {
        "DepartmentCode": 114941,
        "DepartmentName": "Department of Soil Science and Agricultural Chemistry",
        "FacultyName": "Mr. Ravisankar. K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-ravisankar/",
        "Designation": "Tutor",
        "Specialization": "Soil Science & Agrl. Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ravi-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "FacultyName": "Dr. Saraswathy S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-saraswathy/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/4-1-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "FacultyName": "Dr. Jaiganesh B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/b-jaiganesh/",
        "Designation": "Associate Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/5-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "FacultyName": "Dr. Hebzibah Beulah Suganthi T.R.",
        "ProfileLink": "https://www.srmist.edu.in/faculty/t-r-hebzibah-beulah-sunganthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/1-1-2-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "FacultyName": "Dr. Jayanthi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-jayanthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/3-2-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "FacultyName": "Dr. Logeshwaran M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-logeshwaran-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/51431-scaled.jpg"
    },
    {
        "DepartmentCode": 23907,
        "DepartmentName": "Department of Tamil",
        "FacultyName": "Dr. Ranjan N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-ranjan/",
        "Designation": "Assistant Professor",
        "Specialization": "Tamil",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "FacultyName": "Dr. Ravanachandar A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-ravanachandar/",
        "Designation": "Head and Assistant Professor",
        "Specialization": "Horticulture - Spices and Plantation Crops",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/06/Ravanachander.jpg"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "FacultyName": "Dr. Kannan D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kannan-d/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/4583-Kannan.jpg"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "FacultyName": "Dr. Rameshkumar D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rameshkumar-d/",
        "Designation": "Assistant Professor",
        "Specialization": "Vegetable Breeding and Production",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr__Rameshkumar_D.png"
    },
    {
        "DepartmentCode": 90458,
        "DepartmentName": "Department of Vegetable Science",
        "FacultyName": "Dr. Vinothini. N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-vinothini/",
        "Designation": "Assistant Professor",
        "Specialization": "Seed Science and Technology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Vino-4-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Padmanabhan T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-padmanabhan-t/",
        "Designation": "Assistant Professor & Head",
        "Specialization": "New Media Studies, Information and Communication Technology, Film Studies, and Cultural and Gender Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/Dr.T.P-1.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Rajesh. R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-rajesh-r/",
        "Designation": "Associate Professor",
        "Specialization": "Visual Media",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/hod-8-scaled-e1677910739452.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Arokiaraj",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-arokiaraj/",
        "Designation": "Assistant Professor",
        "Specialization": "Screenplay Writing and Film Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/9405-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Harie Karthikeyan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-harie-karthikeyan/",
        "Designation": "Assistant Professor",
        "Specialization": "Digital Media",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/7-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Poarkodi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-poarkodi/",
        "Designation": "Assistant Professor",
        "Specialization": "Film Studies, Gender and Cultural Studies, Journalism",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/15-extra-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Saravana Kumar T K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-k-saravana-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "Advertising and Digital Media",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/2-5-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Ansu Elsa Joy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ansu-elsa-joy/",
        "Designation": "Teaching Associate",
        "Specialization": "Film Studies, Gender Studies and Cultural Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ansu-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Dr. Lakshmipriya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/lakshmipriya-m/",
        "Designation": "Teaching Associate",
        "Specialization": "Photography, Film Studies, Women Studies and Cultural Studies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Priya-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Mr. Annamalai.P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-annamalai-p-2/",
        "Designation": "Cameraman",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_9403-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Mr. Hari Prakash D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-hari-prakash-d/",
        "Designation": "Editor",
        "Specialization": "Video Editing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/700150-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Mr. Kamal S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-kamal-s-2/",
        "Designation": "Fine Artist",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/DSC_9507-1-1-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Mr. Saravanan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-saravanan-k/",
        "Designation": "Cinematographer",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_9396-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Mr. Vasantharaj C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vasantharaj-c/",
        "Designation": "Sound engineer",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/9427-scaled.jpg"
    },
    {
        "DepartmentCode": 24767,
        "DepartmentName": "Department of Visual Communication",
        "FacultyName": "Ms. Klarine Judith K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/klarine-judith-k/",
        "Designation": "Multimedia Designer",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_9385-2-scaled.jpg"
    },
    {
        "DepartmentCode": 87478,
        "DepartmentName": "Department of Yoga",
        "FacultyName": "Dr. Senthil Kumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-senthil-kumar-m/",
        "Designation": "Associate Professor - OG -HoD",
        "Specialization": "Physical Education & Yoga",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG-20230222-WA0010-2.jpg"
    },
    {
        "DepartmentCode": 87478,
        "DepartmentName": "Department of Yoga",
        "FacultyName": "Dr. Jesus Rajkumar N C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-c-jesus-rajkumar/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/IMG_20230223_091405.jpg"
    },
    {
        "DepartmentCode": 87478,
        "DepartmentName": "Department of Yoga",
        "FacultyName": "Dr. Suresh C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-suresh-c/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-03-04-at-11.47.24-AM.jpeg"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Dr. Karmenivannan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-karmenivannan-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Dr. Marieswari M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-marieswari-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Dr. Minnal Carolin A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-minnal-carolin-a/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Dr. Santhi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-santhi-k/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Mr. Gopinath G P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-gopinath-g-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Mr. Hemachalam S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-hemachalam-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Mr. Prem Nasir",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-prem-nasir/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Mr. Santhosh M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-santhosh-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Mr.Tamil Selvan B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-tamil-selvan-b/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Ms. Annie Anjali Shaji",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-annie-anjali-shaji/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Ms. Jacquline Martina S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-jacqueline-martina-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24108,
        "DepartmentName": "Institute of Hotel and Catering Management",
        "FacultyName": "Mr. Dakshina Moorthy V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-dakshina-moorthy-v/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 86713,
        "DepartmentName": "Nanotechnology Research Center",
        "FacultyName": "Dr. Navaneethan M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-navaneethan/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1711524563398.png"
    },
    {
        "DepartmentCode": 86713,
        "DepartmentName": "Nanotechnology Research Center",
        "FacultyName": "Dr. Senthil Kumar E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-e-senthil-kumar/",
        "Designation": "Research Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/senthil-kumar.png"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "FacultyName": "Dr. Pazhani G  P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-p-pazhani/",
        "Designation": "Research Associate Professor",
        "Specialization": "Pharmaceutical Chemistry and Molecular Microbiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/photo_19-02-2024-2.jpg"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "FacultyName": "Dr. Hemanth Kumar CH",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-h-hemanth-kumar/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Pharmaceutical Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/044A9580-scaled-e1711531211135.jpg"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "FacultyName": "Dr. Jaividhya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-jaividhya-p/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Bioinorganic Chemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/06/044A9608-scaled-e1713418549783-1024x927-1.jpg"
    },
    {
        "DepartmentCode": 142099,
        "DepartmentName": "Pharmacy Research",
        "FacultyName": "Ms. Priya Darshani S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-priya-darshani-s/",
        "Designation": "Research Assistant Professor",
        "Specialization": "Pharmaceutical Chemistry, Phytochemistry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/044A9605-scaled.jpg"
    },
    {
        "DepartmentCode": 114227,
        "DepartmentName": "Research",
        "FacultyName": "Dr. Bernaurdshaw Neppolian",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-bernaurdshaw-neppolian/",
        "Designation": "Dean (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr_-Bernaurdshaw-Neppolian.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Dr. Pradeepa C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-c-pradeepa/",
        "Designation": "Head of the Department, Professor",
        "Specialization": "Climate Responsive Architecture, Architectural Acoustics and Lighting, Services in Tall Buildings",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-C.PRADEEPA.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Dr. Geetha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-geetha-ramesh/",
        "Designation": "Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Geetha-Ramesh.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Dr. Narayana K A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-a-narayana/",
        "Designation": "Professor",
        "Specialization": "Architecture, sustainable planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr.K.A Narayana.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Dr. Shanthi Priya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-r-shanthi-priya/",
        "Designation": "Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Dr. R. Shanthi Priya.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Lakshmanan CT",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ct-lakshmanan/",
        "Designation": "Professor",
        "Specialization": "Architecture, Town Planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Lakshman-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Suriya Prakash M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-m-suriya-prakash/",
        "Designation": "Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/suriya2-1.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Dr. Karuppusamy P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-karuppusamy/",
        "Designation": "Associate Professor",
        "Specialization": "Art studio ,rural study in Department of Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/ks.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Dr. Kousalyadevi G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-g-kousalyadevi/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.-Kousalyadevi-G.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Purnachandar P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/p-purnachandar/",
        "Designation": "Associate Professor",
        "Specialization": "Housing Designs, Institutional building designs, Building Materials and Construction, Professional Practice and Estimation and specification.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/P-Purnachandar.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Raja Muthaiah M C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-m-c-raja-muthaiah/",
        "Designation": "Associate Professor",
        "Specialization": "Computer Studio, Architectural Design Studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. M.C. Raja Muthaiah.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Kavitha  G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-kavitha-g/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG_5674-scaled.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Narayani A.R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-narayani-a-r/",
        "Designation": "Associate Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Narayani A. R..jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Sudha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ar-g-sudha/",
        "Designation": "Associate Professor",
        "Specialization": "Sustainable Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Sudha-G.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Anoop Menon",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-anoop-menon/",
        "Designation": "Assistant Professor",
        "Specialization": "Urban Design, Housing, Building materials & Construction, Professional Practice, Interior Design and Architectural Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. Anoop Menon.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Arun S.K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-s-k-arun/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.S.K.Arun_.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Balamaheshwaran Renganathan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-balamaheshwaran-renganathan/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture, Planning and Sustainability: Urban and Regional Planning",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/1-3.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Denish Kumar B.G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-denish-kumar-b-g/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-27-at-6.05.44-PM-1.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Dharani Dharan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-dharani-s-dharan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Mr.-Dharani-S-Dharan.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Gajendran.T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-gajendran-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Urban Design, Housing, Computer Application in Design & Environmental Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Gajendran-1-scaled.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Ganesh J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ar-ganesh-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Interior design Psychology, Architectural Conservation and Photography and Journalism.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Ganesh-J.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Karthick K.A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-karthick-k-a/",
        "Designation": "Assistant Professor",
        "Specialization": "Architectural Drawing, Building Services, Green Building Strategies",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Mr. Karthick K.A.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Prashant P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-prashant-p/",
        "Designation": "Assistant Professor",
        "Specialization": "Urban Design, Public Places, Specultive Architecture, Governance, Placemaking and Liveability",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/DSC_3813.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Praveen N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-n-praveen/",
        "Designation": "Assistant Professor",
        "Specialization": "Tectonics , Urban Design and Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/WhatsApp-Image-2023-05-31-at-11.16.46-AM-e1685512092287.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Rengarajan.N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-rengarajan-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture, Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/rengarajan-said-photograph-scaled-e1684859765672.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Saravanan V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-saravanan/",
        "Designation": "Assistant Professor",
        "Specialization": "Housing Designs, Institutional building designs, Building Materials and Construction, Professional Practice and Estimation and specification.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Saravanan-V.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Shyam Jebadev M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-shyam-jebadev-m/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/WhatsApp-Image-2023-01-02-at-6.57.06-PM.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Mr. Suraj Dwivedi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-suraj-dwivedi/",
        "Designation": "Visiting Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Mr.-Suraj-Dwivedi.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Abinaya T L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-t-l-abinaya/",
        "Designation": "Assistant Professor",
        "Specialization": "Construction Project Management, Structure Basic in Architecture, Advanced construction techniques, Graphics, Interior design, Energy efficient, etc.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. T.L.Abinaya.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Akshada Nitin Khatavkar",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-akshada-nitin-khatavkar/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/photo-2.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Aruna. V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/aruna-v/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture and Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ms.-Aruna.-V.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Geeva Chandana.B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-geeva-chandana-b/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Geeva Chandana.B.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Grace Ansica A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-grace-ansica/",
        "Designation": "Assistant Professor",
        "Specialization": "Urban farming, Resource Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Grace-Ansica-A.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Janani C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/janani-c/",
        "Designation": "Assistant Professor",
        "Specialization": "History of contenporary interior design, Design Studio, 3d Graphic Studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Janani-C.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Kalaimathy K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-k-kalaimathy/",
        "Designation": "Assistant Professor",
        "Specialization": "Energy Efficiency, Tall Buildings, Building Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Kalaimathy.-K.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Krithika R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ar-krithika-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Vernacular Architecture, Eco housing, Culturally Sustainable Built Environment.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Krithika R.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Manjari Krishnamoorthy",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-manjari-krishnamoorthy/",
        "Designation": "Assistant Professor",
        "Specialization": "Contemporary Indian & Western Architecture, Biomimetics ,Housing, Landscape Architecture and Environmental Science, Building Materials & Construction – III,Interior Design studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Manjari-Krishnamoorthy.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Nivetha Devi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-nivetha-devi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture & Interior Design",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Nivetha-Devi-R.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Prashanthini Rajagopal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-prashanthini-rajagopal/",
        "Designation": "Assistant Professor",
        "Specialization": "Performance Evaluation Tools (Simulations) and Climate Responsive Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. Prashanthini Rajagopal.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Shanmuga Priya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/shanmuga-priya-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture, Interior Design , Architectural Conservation, Urban planning and development",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Shanmugapriya-scaled.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Srisaileeswari S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-srisaileeswari-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/sd.jpeg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Sukheshini D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-d-sukheshini/",
        "Designation": "Assistant Professor",
        "Specialization": "Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. D.Sukheshini.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Susetha N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-n-susetha/",
        "Designation": "Assistant Professor",
        "Specialization": "Interior Design, Basic Design Studio, Furniture Design, Lighting and Color, Arts and crafts, Textile Design etc.",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/Ms. N.Susetha.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Vishva Dharani V M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-vishva-dharani-v-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Vishva-Dharani-V-M.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Prasanna S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prasanna-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Architectural Design, Computer studio",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/04/IMG-20230519-WA0007.jpg"
    },
    {
        "DepartmentCode": 13448,
        "DepartmentName": "School of Architecture and Interior Design",
        "FacultyName": "Ms. Sanghavi VV",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sanghavi-vv/",
        "Designation": "Visiting Professor",
        "Specialization": "Sustainable Architecture",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Ms.-Sanghavi-VV.jpg"
    },
    {
        "DepartmentCode": 24112,
        "DepartmentName": "School of Education",
        "FacultyName": "Dr. Prema N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-prema/",
        "Designation": "Head Of The Department",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24112,
        "DepartmentName": "School of Education",
        "FacultyName": "Dr.A.Rajkamal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-a-rajkamal/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 24112,
        "DepartmentName": "School of Education",
        "FacultyName": "Dr.K.Deepika",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-k-deepika/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 114950,
        "DepartmentName": "Section of Agriculture Engineering",
        "FacultyName": "Dr. Malathi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-malathi-v-2/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Malathi-photo-New.jpg"
    },
    {
        "DepartmentCode": 114950,
        "DepartmentName": "Section of Agriculture Engineering",
        "FacultyName": "Mr. Ganeshamoorthy J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ganeshamoorthy-j/",
        "Designation": "Assistant Professor",
        "Specialization": "Biomass Gasification",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ganeshamoorty.jpg"
    },
    {
        "DepartmentCode": 114947,
        "DepartmentName": "Section of Animal Sciences",
        "FacultyName": "Dr. Thamizhannal M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-thamizhannal-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Livestock Products Technology (Dairy Science and Meat Science)",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Thamizh-Dr-scaled.jpg"
    },
    {
        "DepartmentCode": 114947,
        "DepartmentName": "Section of Animal Sciences",
        "FacultyName": "Dr. Sreyass K S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sreyass-k-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Veterinary Science and Animal Husbandry",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Srey-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114954,
        "DepartmentName": "Section of Biochemistry and Crop Physiology",
        "FacultyName": "Dr. Nagajothi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/nagajothi-r-2/",
        "Designation": "Assistant Professor and Head",
        "Specialization": "Crop Physiology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/05/Naga-1-scaled.jpg"
    },
    {
        "DepartmentCode": 114954,
        "DepartmentName": "Section of Biochemistry and Crop Physiology",
        "FacultyName": "Dr. Mohanasundaram S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-mohanasundaram-s/",
        "Designation": "Assistant Professor (Biochemistry)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Passport-size-photo-1-scaled.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Kanniammal C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-kanniammal-c/",
        "Designation": "Dean,  College of Nursing",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/Dr.-KANNIAMMAL.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Vijayalakshmi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-r-vijayalakshmi/",
        "Designation": "Vice Principal, College of Nursing",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/vp-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Bamini Devi N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-n-bamini-devi/",
        "Designation": "Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/bamini-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Kalavalli M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-kalavalli/",
        "Designation": "Professor",
        "Specialization": "Mental Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/InShot_20221230_224258249.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Angelin Dhanalakshmi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-m-angelin-dhanalakshmi/",
        "Designation": "Associate Professor",
        "Specialization": "COMMUNITY HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/ANGELIN-MAM.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Deenajothy R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-r-deenajothy/",
        "Designation": "Associate Professor",
        "Specialization": "OBSTETRICS AND GYNAECOLOGY NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/deena-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Rajeshwari D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-d-rajeshwari/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PHOTO-2024-03-21-16-38-42.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Sheeba Jebakani A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-sheeba-jebakani/",
        "Designation": "Associate Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/12/PHOTO-2023-12-15-07-35-45.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Suseelal T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-t-suseelal/",
        "Designation": "Associate Professor",
        "Specialization": "MEDICAL AND SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/susheelal-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Ambiga K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-ambiga/",
        "Designation": "Associate Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/ambika-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Kanmani K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-kanmani-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Community Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/KANMANI.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Kavitha P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-kavitha-p/",
        "Designation": "Assistant Professor",
        "Specialization": "MENTAL HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/photo-kavitha.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Priya V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-v-priya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/priya-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Priyadharsini M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-priyadharsini/",
        "Designation": "Assistant Professor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/InShot_20221230_225745325.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Selva Mary Devakani J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-j-selva-mary-devakani/",
        "Designation": "Assistant Professor",
        "Specialization": "MENTAL HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/InShot_20221230_224948408.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Shaini G S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shaini-g-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/shyni-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Suganthi K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-k-suganthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/suganthi-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Tamilselvi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-tamilselvi/",
        "Designation": "Assistant Professor",
        "Specialization": "CHILD HEALTH ( PAEDIATRIC) NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/tamil-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Ushapriya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-ushapriya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Pediatric Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Ushapriya-1.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Valarmathi V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/v-valarmathi/",
        "Designation": "Assistant Professor",
        "Specialization": "Mental Health (Psychiatric) Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/valar-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Deepika T",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-deepika-t/",
        "Designation": "Assistant Professor",
        "Specialization": "Mental Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/DEEPIKA-2.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Geetha K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-geetha/",
        "Designation": "Assistant Professor",
        "Specialization": "COMMUNITY HEALTH NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/geetha-mam.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Dr. Abizha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/abizha-g/",
        "Designation": "Nursing tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/pass.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mr. Sathish A M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-sathish-a-m/",
        "Designation": "Tutor",
        "Specialization": "Medical surgical nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Sathish-3.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Dhivya N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-n-dhivya/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/DIVYA.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Saraswathi M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-m-saraswathi/",
        "Designation": "Tutor",
        "Specialization": "Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1711434113606.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Sasikala G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-g-sasikala/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Document-62_1.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Selvi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-selvi-s/",
        "Designation": "Tutor",
        "Specialization": "CHILD HEALTH(PAEDIATRIC) NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/SELVI.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Shiyamala P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-shiyamala-p/",
        "Designation": "Tutor",
        "Specialization": "Medical surgical nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/SHAYMALA.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Suganya N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/suganya-n/",
        "Designation": "Tutor",
        "Specialization": "MEDICAL SURGICAL NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/suganya.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Vinitha D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/vinitha-d/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/VINITHA.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Aswathy Nair",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-aswathy-nair-2/",
        "Designation": "Tutor",
        "Specialization": "PAEDIATRIC NURSING",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/ASWATHY.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Jenitha R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-jenitha-r/",
        "Designation": "Tutor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/JENI.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Samundeeswari J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-samundeeswari-j/",
        "Designation": "Clinical Instructor",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-03-09-30-32.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mr. Simeon",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-simeon-2/",
        "Designation": "Clinical Instructor",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-18-31-38.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mr. Viswanath. P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-viswanath/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-01-15-25-26.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Beaula Priya Tharisini P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-p-beaula-priya-tharisini/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PHOTO-2024-03-20-11-54-54-Photoroom.png-Photoroom.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Cynthial Queeni",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-cynthial-queeni/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-20-11-02-07.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Jothi C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-jothi-c/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PHOTO-2024-03-20-11-54-14-Photoroom.png-Photoroom.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Louismary A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/a-louismary/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Pushpa G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-g-pushpa/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-03-12-02-39-Photoroom.png-Photoroom.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Rukmani M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-rukmani/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-17-50-25-1.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Mrs. Sumathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-sumathi/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Anbarasi. A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-anbarasi-r/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PHOTO-2024-03-20-11-52-11-Photoroom.png-Photoroom.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Annie Jasline B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-annie-jasline-b/",
        "Designation": "Clinical Instructor",
        "Specialization": "Community Health Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PHOTO-2024-03-20-21-31-12.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Anu N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/anu-n/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/aedb4af4-043f-4c21-8ecd-5e48dedfc27e-Photoroom.png-Photoroom.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Anusiya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/anusiya-s/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/7e4cebfe-17eb-4be4-a632-4c711af32cad.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Anusuya P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-p-anusuya/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-03-12-00-30.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Aswini M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/m-aswini/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-03-12-01-12.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Chandralekha. R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-chandralekha/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-20-32-14.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Divya R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-divya-r/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_9319-Photoroom.png-Photoroom.png"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Femina Sheeba L",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-femina-sheeba-l/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-19-42-47.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Helen Christinal Y",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-helen-christinal-y/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-20-11-32-46-scaled.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Hema Rajakumari R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/r-hema-rajakumari/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Hemarajakumari.jpeg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Jenifer R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-jenifer-r/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-18-16-32.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Kavitha G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-kavitha-g-2/",
        "Designation": "Clinical Instructor",
        "Specialization": "Medical Surgical Nursing",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-17-49-22.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Latha Kumari C",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-latha-kumari-c/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-01-15-25-26-1.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Pavithra k",
        "ProfileLink": "https://www.srmist.edu.in/faculty/k-pavithra/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-01-07-17-35.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Pramila Roseline",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-pramila-roseline/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-04-03-12-10-05.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Prema S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-prema/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/2b0692e0-a269-41bd-a5c7-0c2643c57264.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Sasikala K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sasikala-k/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/PHOTO-2024-03-31-17-50-25.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Sumi R P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-r-p-sumi/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/IMG_9314.jpg"
    },
    {
        "DepartmentCode": 31371,
        "DepartmentName": "SRM College of Nursing",
        "FacultyName": "Ms. Vanaja S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/s-vanaja/",
        "Designation": "Clinical Instructor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Dr. Ganapathy Sankar U",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-ganapathy-sankar-u/",
        "Designation": "Dean,  College of Occupational Therapy",
        "Specialization": "Pediatrics, Neurosciences and Mental health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Dr.U.Ganapathy-Sankar-1.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Mr. Anbarasu D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/anbarasu-d/",
        "Designation": "Assistant Professor",
        "Specialization": "MOT Paediatrics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/ANBU-PHOTO-1.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Ms. Dhanalakshmi R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dhanalakshmi-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Neurosciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1579841315717-31a6bd78-0e12-481c-a717-da6aac674228_.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Ms. Indrani Bose",
        "ProfileLink": "https://www.srmist.edu.in/faculty/indrani-bose/",
        "Designation": "Assistant Professor",
        "Specialization": "orthopedics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Scanned_15465138052233136.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Ms. Poorani P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-poorani-p/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Ms. SREELEKHA S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/sreelekha-s/",
        "Designation": "Assistant Professor",
        "Specialization": "Paediatrics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1269795303.jpg"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Ms. Sulbha Gauns Dessai",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sulbha-gauns-dessai/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31373,
        "DepartmentName": "SRM College of Occupational Therapy",
        "FacultyName": "Ms. Zatale Shubhangi Laxmanrao",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-zatale-shubhangi-laxmanrao/",
        "Designation": "Assistant Professor",
        "Specialization": "Musculoskeletal sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/PHOTO_1-2-2.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Prof. Veeragoudhaman T S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-t-s-veeragoudhaman/",
        "Designation": "Dean i/c, College of Physiotherapy",
        "Specialization": "Hand Conditions",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Prof.-T.S.-Veeragoudhaman.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Dr. Suresh T.N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-t-n-suresh/",
        "Designation": "Vice - Principal, College of Physiotherapy",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Dr.-Suresh-T.N.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Dr. Malarvizhi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-d-malarvizhi/",
        "Designation": "Professor",
        "Specialization": "Paediatrics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Malar-2.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Dr. Mani Kumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mani-kumar-m/",
        "Designation": "Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20220328-WA0017.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Dr. Vadivelan K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-k-vadivelan/",
        "Designation": "Professor",
        "Specialization": "Pediatric Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Dr.K.Vadivelan-.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Ayyappan J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-j-ayyappan/",
        "Designation": "Professor",
        "Specialization": "Orthopedic Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Ayyappan-photo.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Kamalanathan P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-p-kamalanathan/",
        "Designation": "Professor",
        "Specialization": "Community Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/kamalanathan-photo.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Saravana Hari Ganesh M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-m-saravana-hari-ganesh/",
        "Designation": "Professor",
        "Specialization": "Neurological Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Saravana-Hari-ganesh.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Anandhi D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-d-anandhi/",
        "Designation": "Professor",
        "Specialization": "Physiotherapy in Cardiopulmonary Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/ANANDHI-PIC-1.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Dr. Harikrishnan R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/harikrishnan-r/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Hari-PP-picture-1.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Dr. Suresh J",
        "ProfileLink": "https://www.srmist.edu.in/faculty/suresh-j/",
        "Designation": "Associate Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/prof-suresh.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Balamurugan Janakiraman",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-balamurugan-j/",
        "Designation": "Research Associate",
        "Specialization": "Research in Physiotherapy, Epidemiology, Clinical Outcome measure in rehabilitation, and Musculo-skeletal rehabilitation rehabilitation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/PASS-SIZE-NEW-1-scaled.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Anbu Priya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-m-anbu-priya/",
        "Designation": "Associate Professor",
        "Specialization": "Obstetrics and gynecological physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/anbu.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Arvind M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/arvind-m/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/83016090-61D4-4782-878C-4F17D0F30A87.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Chandrakumar K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/chandrakumar-k/",
        "Designation": "Assistant Professor",
        "Specialization": "ORTHOPEADICS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/01-scaled.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Hariharan S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-hariharan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/IMG_20230518_113250-2.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Jayakanthan E",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-e-jayakanthan/",
        "Designation": "Assistant Professor",
        "Specialization": "Physiotherapy  and Yoga Therapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/jk-photo.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Manova Prasanna Kumar D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/manova-prasanna-kumar/",
        "Designation": "Assistant Professor",
        "Specialization": "MUSCULOSKELETAL AND SPORTS DISORDERS",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Manova-Prasanna-Kumar.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Rajkumar M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/rajkumar-m/",
        "Designation": "Assistant Professor",
        "Specialization": "orthopedics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/DSC0002-copy-2.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Swatheeshwaran S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/swatheeshwaran-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/0C2ADCF7-C70F-4524-B409-4DA202AF0C1E.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Mariyam Farzana S.F",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-s-f-mariyam-farzana/",
        "Designation": "Assistant Professor",
        "Specialization": "OBSTETRICS AND GYNAECOLOGY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Picture-1-1.png"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Prithiha V",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-v-prithiha/",
        "Designation": "Assistant Professor",
        "Specialization": "CardioPulmonary Sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/311-prithiha.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Priyanka B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-priyanka-b-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Orthopaedics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/09/ph-rotated-e1695569621284.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Sowmiya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-m-sowmiya/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/PHOTO-1.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Subicha T S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-subicha-t-s/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/1666421859846-e1711364530413.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Yasmeen Imtiaz G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-yasmeen-g/",
        "Designation": "Assistant Professor",
        "Specialization": "Orthopaedic Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/yasmeen.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Gayathri K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-gayathri-k-2/",
        "Designation": "Assistant Professor",
        "Specialization": "CARDIOPULMONARY SCIENCES",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Gayathri-2-copy-e1710998010684.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Karthiga R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mrs-karthiga-r/",
        "Designation": "Assistant Professor",
        "Specialization": "Neurology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Karthiga.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Kaviya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-kaviya-m/",
        "Designation": "Assistant Professor",
        "Specialization": "Cardiopulmonary sciences",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/Kaviya.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Shrisruthi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-s-shrisruthi/",
        "Designation": "Assistant Professor",
        "Specialization": "Paediatric Physiotherapy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/CROPED-PIC-scaled.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Valarmathy N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/valaramathy-n/",
        "Designation": "Assistant Professor",
        "Specialization": "Orthopedics and traumatology condition, Musculoskeletal conditions ,Post surgical and Geriatric rehabilitation",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-21-at-11.20.27-AM-e1711792686405.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Ashok N",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-n-ashok/",
        "Designation": "Senior Physio Therapist",
        "Specialization": "Senior Physiotherapist",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-30-at-2.24.52-PM.jpeg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Diwagar B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-diwagar-b/",
        "Designation": "Clinical Therapist",
        "Specialization": "PHYSIOTHERAPY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/diwagar.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Harilingam M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-harilingam-m/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "PHYSIOTHERAPY",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/hari-ph.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mr. Ragupathi S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-ragupathi-s/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "PHYSIOTHERAPIST",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/ragu-ph-1.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Jothilakshmi A",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-jothi-lakshmi-a/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/IMG_20230208_084834.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Mohana Priya M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-mohana-priya-m/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Revathi G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-revathi-g/",
        "Designation": "Clinical Therapist",
        "Specialization": "General medicine and  General surgery, OPD",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG-20230526-WA0020.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Santhiya G",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-santhiya-g/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "PHYSIOTHERAPY",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. VijiPriya S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-viji-priya-s/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "Obstetrics and gynaecology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/20211229045754__MG_6509_copy_350x450_1-1.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Ms. Vinitha Arasu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-a-vinitha/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Photo-from-A-Vinitha.jpg"
    },
    {
        "DepartmentCode": 31393,
        "DepartmentName": "SRM College of Physiotherapy",
        "FacultyName": "Mrs. Priyanka B",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-b-priyanka/",
        "Designation": "Clinical Physiotherapist",
        "Specialization": "Obstetrics and gynaecology",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/IMG_20240331_130054.png"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Prof. (Dr.) Rajiv Janardhanan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prof-dr-rajiv-janardhanan/",
        "Designation": "Dean (Medical Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/11.-Dr.Rajiv-Janardhaman-MEdica-lResearch-1.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. P. Venkataraman",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-p-venkataraman/",
        "Designation": "Associate Professor (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/30-Dr.P.Venkataraman-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Sundaresan. S",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivapatham-sundaresan/",
        "Designation": "Associate Professor (Research)",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/9.DrS_.Sundaresan-Medical-research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Gisha Sivan",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-gisha-sivan/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-04-04-at-1.56.00-PM.jpeg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Indrajit Sahu",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-indrajit-sahu/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/12.Dr_.Indrajit-Saha-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Madhumitha Haridoss",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-madhumitha-haridoss/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/033-1.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Muralidhara Rao Maradana",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-muralidhara-rao-maradana/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/18.-Dr.Muralidhara-Rao-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Piyush Agrawal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-piyush-agrawal/",
        "Designation": "Assistant Professor",
        "Specialization": "Bioinformatics, Systems Biology, Cancer Genomics, Big Data Analysis",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/05/PHOTO-2024-05-17-16-31-09.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Raji Lenin",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-raji-lenin/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/15.Dr_.Raji-medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Shiny PJ",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-shiny-pj/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "/wp-content/uploads/2022/04/user-avatar-placeholder.png"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Sivaraj Mohana Sundaram",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-sivaraj-mohana-sundaram/",
        "Designation": "Assistant Professor",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/19.Dr_.M.S.-Sivaraj-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Richa Gulati",
        "ProfileLink": "https://www.srmist.edu.in/faculty/richa-gulati/",
        "Designation": "Research Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/20.-s.Richa-Gulati-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Ms. Sai Varsaa",
        "ProfileLink": "https://www.srmist.edu.in/faculty/ms-sai-varsaa/",
        "Designation": "Research Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/11/1697164580236-1-scaled.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Prabhu D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/prabhu-d/",
        "Designation": "Research Assistant",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/17.Mr_.D.Prabhu-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 158669,
        "DepartmentName": "SRM Medical Research Centre",
        "FacultyName": "Dr. Dhruva Nandi",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dhruva-nandi/",
        "Designation": "Research Associate",
        "Specialization": "",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/10/10.Dr_.Dhruva-Nandhi-Medical-Research.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Hari Singh",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-hari-singh/",
        "Designation": "Dean, School of Public Health",
        "Specialization": "Public Health, Quality Improvement",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Hari-Singh-1.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Alex Joseph",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-alex-joseph/",
        "Designation": "Professor",
        "Specialization": "Epidemiology, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Alex-Joseph.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Kalpana Kosalram",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-b-kalpana/",
        "Designation": "Professor",
        "Specialization": "Project Management, Strategic Management",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-B.-Kalpana.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Benson Thomas M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-benson-thomas-m/",
        "Designation": "Associate Professor",
        "Specialization": "Health Economics, Demography",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/Benson-Thomas-M-scaled.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Bharathi. P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/bharathi-p/",
        "Designation": "Associate Professor",
        "Specialization": "Qualitative Research, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.Bharathi.P.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Gladius Jennifer H",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-h-gladius-jennifer/",
        "Designation": "Associate Professor",
        "Specialization": "Biostatistics, Health Data Science",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Gladius-Jennifer-H.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Janmejaya Samal",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-janmejaya-samal/",
        "Designation": "Associate Professor",
        "Specialization": "Research, Health Systems and Policy",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/04/160236092_3309846649115029_4725233306698480247_n-1-e1712569674114.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Suman Kanougiya",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-suman-kanougiya/",
        "Designation": "Associate Professor",
        "Specialization": "Research, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2024/03/suman.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Dhivya K",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-dhivya-k/",
        "Designation": "Assistant Professor",
        "Specialization": "Health Data Science, Environmental Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Dhivya.K.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Prakash M",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-m-prakash-2/",
        "Designation": "Assistant Professor",
        "Specialization": "Health Data Science, Biostatistics",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-M.-Prakash.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Selvamani.Y",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-y-selvamani/",
        "Designation": "Assistant Professor",
        "Specialization": "Research, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Dr.-Y.-Selvamani.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Ms. Geetha Veliah",
        "ProfileLink": "https://www.srmist.edu.in/faculty/geetha-veliah/",
        "Designation": "Assistant Professor",
        "Specialization": "Health Promotion, Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2023/03/Ms.Geetha-Veliah.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. JudyAngel D",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-judyangel-d/",
        "Designation": "Program Associate",
        "Specialization": "Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/11/Judy.png"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Dr. Keerthi P",
        "ProfileLink": "https://www.srmist.edu.in/faculty/dr-keerthi-p/",
        "Designation": "Research Associate",
        "Specialization": "Public Health",
        "ImageURL": "https://www.srmist.edu.in/wp-content/uploads/2022/12/IMG_20230704_145653.jpg"
    },
    {
        "DepartmentCode": 31378,
        "DepartmentName": "SRM School of Public Health",
        "FacultyName": "Mr. Praveen Kumar R",
        "ProfileLink": "https://www.srmist.edu.in/faculty/mr-r-praveen-kumar/",
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
	keys: ["title", "normalized", "url"],
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
