// Bir öğrencinin aldığı ders notlarının ortalamasını hesaplayan bir fonksiyon yazın.

// Fonksiyonun:  

// Notların bir dizisini parametre olarak alması,

// Ortalama değeri döndürmesi,

// Ortalama üzerinden bir harf notu belirlemesi (A, B, C, D, F) gereklidir.

// Adımlar:  

// Fonksiyon grades adında bir dizi parametresi alır.

// reduce metodu ile tüm notlar toplanır.

// Toplam değer, dizi uzunluğuna bölünerek ortalama hesaplanır.

// Ortalama değerine göre harf notu atanır:

// 90 ve üzeri: A

// 80-89: B

// 70-79: C

// 60-69: D

// 60’ın altı: F

// Hem ortalama hem de harf notu döndürülür.


const grades = calculation(100,90,80);

function calculation(...grades){
    const collection = grades.reduce((acc, curr) => acc + curr);    
    const gradeAverage = collection / grades.length;

    if(gradeAverage === 90){
        console.log("Notunuz A");
    }
    else if(gradeAverage >= 80){
        console.log("Notunuz B");
    }
    else if(gradeAverage >= 70){
        console.log("Notunuz C");
    }
    else if(gradeAverage >= 60){
        console.log("Notunuz D");
    }
    else{
        console.log("Notunuz F");
    }

    return gradeAverage
}

console.log(grades);