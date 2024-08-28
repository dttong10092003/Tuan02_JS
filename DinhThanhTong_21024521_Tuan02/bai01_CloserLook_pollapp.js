const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
      // Hiển thị cửa sổ prompt để người dùng nhập
      const input = prompt(
          `${this.question}\n${this.options.join('\n')}\n(Vui lòng nhập số từ 0 đến 3)`
      );

      // Chuyển input sang số nguyên và kiểm tra
      const answer = parseInt(input);

      // Kiểm tra nếu input là số và nằm trong phạm vi cho phép
      if (isNaN(answer) || answer < 0 || answer >= this.answers.length) {
          alert("Vui lòng nhập một số hợp lệ từ 0 đến 3.");
      } else {
          // Tăng giá trị tương ứng với câu trả lời
          this.answers[answer]++;
          this.displayResults();
      }
  },

  displayResults(type = 'array') {
      const resultDiv = document.getElementById('result');
      if (type === 'array') {
          // Hiển thị kết quả dạng mảng
          console.log(this.answers);
          // Tạo chuỗi kết quả để hiển thị trên màn hình
          let resultString = 'Kết quả khảo sát:\n';
          this.options.forEach((option, index) => {
              resultString += `${option.split(': ')[1]}: ${this.answers[index]} lượt bình chọn\n`;
          });
          resultDiv.textContent = resultString;
      } else if (type === 'string') {
          // Hiển thị kết quả dạng chuỗi
          const resultString = `Kết quả khảo sát là: ${this.answers.join(', ')}`;
          console.log(resultString);
          resultDiv.textContent = resultString;
      }
  }
};

// Gán sự kiện click cho nút để thực hiện khảo sát
document.getElementById('pollButton').addEventListener('click', poll.registerNewAnswer.bind(poll));
