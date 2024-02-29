// script.js
const userInfoForm = document.getElementById('userInfoForm');
const questionsSection = document.getElementById('questionsSection');
const submitButton = document.createElement('button');
submitButton.textContent = 'Nộp Bài Thi';
submitButton.style.display = 'none'; // Hide initially
userInfoForm.appendChild(submitButton);

let userAnswers = []; // Array to store user's answers

userInfoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const studentID = document.getElementById('studentID').value;
    const classValue = document.getElementById('class').value;

    // Replace this with actual API call to get questions
    const demoQuestions = generateDemoQuestions();

    displayQuestions(demoQuestions);
    submitButton.style.display = 'block'; // Show submit button
});

submitButton.addEventListener('click', function() {
    // Calculate score
    const score = calculateScore(userAnswers);
    
    // Store user's information
    localStorage.setItem('fullName', document.getElementById('fullName').value);
    localStorage.setItem('dob', document.getElementById('dob').value);
    localStorage.setItem('studentID', document.getElementById('studentID').value);
    localStorage.setItem('class', document.getElementById('class').value);
    localStorage.setItem('score', score);

    // Redirect to result page
    window.location.href = 'result.html';
});


function generateDemoQuestions() {
    // Generate demo questions here
    const demoQuestions = [];
    demoQuestions.push({
        question: `Câu hỏi 1: Nội dung nào sau đây nằm trong Cương lĩnh chính trị đầu tiên của Đảng?`,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 2. Đối tượng nghiên cứu của khoa học Lịch sử Đảng Cộng sản Việt Nam là: 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 3. Là một ngành của khoa học lịch sử, Lịch sử Đảng Cộng sản Việt Nam có các chức năng, nhiệm vụ của khoa học lịch sử, đồng thời còn có thêm các chức năng nổi bật khác là: 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 4. Một trong những nhiệm vụ hàng đầu khi nghiên cứu khoa học Lịch sử Đảng Cộng sản Việt Nam là: 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 5. Trong phương pháp nghiên cứu, học tập môn học Lịch sử Đảng Cộng sản Việt Nam cần phải dựa trên phương pháp luận khoa học mác xít, đồng thời phải nắm vững chủ nghĩa nào dưới đây để xem xét và nhận thức lịch sử một cách khách quan, trung thực và đúng quy luật? 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 6. Tại sao khi nghiên cứu, học tập Lịch sử Đảng Cộng sản Việt Nam lại cần phải nhận thức và vận dụng chủ nghĩa duy vật lịch sử? 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 7. Trong nghiên cứu Lịch sử Đảng Cộng sản Việt Nam, khi xem xét, đối chiếu các hiện tượng lịch sử trong hình thức tổng quát nhằm mục đích vạch ra bản chất, quy luật, khuynh hướng chung trong sự vận động của sự vật thì đó là cách nghiên cứu dựa trên: 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 8. Cần phải coi trọng phương pháp tổng kết thực tiễn lịch sử gắn với nghiên cứu lý luận trong nghiên cứu Lịch sử Đảng Cộng sản Việt Nam để: 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 9. Việc tiến hành thảo luận, trao đổi các vấn đề do giảng viên đưa ra để có thể hiểu rõ hơn nội dung của môn học Lịch sử Đảng Cộng sản Việt Nam thì được gọi là: 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });
    demoQuestions.push({
        question: `Câu hỏi 10. Một trong những ý nghĩa của việc nghiên cứu, học tập môn học Lịch sử Đảng Cộng sản Việt Nam đối với sinh viên là: 
        `,
        options: ['Đúng', 'Sai'], // Example options, replace with actual options for each question
        type:'trueFalse'
    });

    //Câu loại 2
    demoQuestions.push({
        question: `Câu hỏi 11. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 12. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 13. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 14. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 15. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 16. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 17. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 18. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 19. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 20. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'singleChoice'
    });

    //Lựa chọn loại 3
    demoQuestions.push({
        question: `Câu hỏi 21. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 22. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 23. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 24. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 25. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 26. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 27. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 28. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 29. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });
    demoQuestions.push({
        question: `Câu hỏi 30. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: ['a. Tư sản', 'b.Nông dân ','c. Công nhân ','d . Tiểu tư sản '], // Example options, replace with actual options for each question
        type:'multipleChoice'
    });

    //Lựa chọn loại 4
    demoQuestions.push({
        question: `Câu hỏi 31. Sự kiện nào đánh dấu giai cấp công nhân Việt Nam đã bước đầu đi vào đấu tranh tự giác? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 32. Sự kiện nào dưới đây đã tạo ra thời cơ thuận lợi cho nhân dân ta giành lại độc lập vào 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 33. Tính chất và nhiệm vụ của cách mạng Việt Nam được thể hiện trong tác phẩm “Đường Kách mệnh” của Nguyễn Ái Quốc là: 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 34. Chi bộ Cộng sản thành lập ở Bắc Kỳ tháng 3/1929 nhằm mục đích gì? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 35. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 36. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 37. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 38. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 39. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });
    demoQuestions.push({
        question: `Câu hỏi 40. Mâu thuẫn cơ bản của xã hội Việt Nam kể từ khi Pháp xâm lược là gì? 
        `,
        options: [], // Example options, replace with actual options for each question
        type:'essay'
    });

    return demoQuestions;
}


function displayQuestions(questions) {
    questionsSection.innerHTML = '';
    userAnswers = []; // Reset user's answers array
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <h3>Câu hỏi ${index + 1}</h3>
            <p>${q.question}</p>
            ${q.type === 'trueFalse' ? `
                <input type="radio" id="q${index}_true" name="q${index}" value="true">
                <label for="q${index}_true">Đúng</label>
                <input type="radio" id="q${index}_false" name="q${index}" value="false">
                <label for="q${index}_false">Sai</label>
            ` : q.type === 'singleChoice' ? `
                ${q.options.map((option, i) => `
                    <input type="radio" id="q${index}_option${i}" name="q${index}" value="${option}">
                    <label for="q${index}_option${i}">${option}</label>
                `).join('')}
            ` : q.type === 'multipleChoice' ? `
                ${q.options.map((option, i) => `
                    <input type="checkbox" id="q${index}_option${i}" name="q${index}" value="${option}">
                    <label for="q${index}_option${i}">${option}</label>
                `).join('')}
            ` : `
                <textarea id="q${index}_answer" rows="4" cols="50"></textarea>
            `}
        `;
        questionDiv.querySelectorAll('input, textarea').forEach(element => {
            element.addEventListener('input', function() {
                if (q.type === 'multipleChoice') {
                    userAnswers[index] = Array.from(questionDiv.querySelectorAll(`input[name="q${index}"]:checked`)).map(input => input.value);
                } else {
                    userAnswers[index] = element.value;
                }
            });
        });
        questionsSection.appendChild(questionDiv);
    });
    questionsSection.style.display = 'block';
}

function calculateScore(userAnswers) {
    let score = 0;
    userAnswers.forEach(answer => {
        if (answer === 'Đúng' || answer === 'a. Tư bản') {
            score += 1;
        }
    });
    let randomNumber = Math.floor(Math.random() * 31);
    score = randomNumber;
    return score;
}
