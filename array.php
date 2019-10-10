<?php
//(на PHP) вывести массив от 1 до 100 - лесенкой
//1
//2 3
//4 5 6
$arrRow = [];
$counter = 1;
for ($i = 1; $i <= 100; $i++) {
    $arrRow[] = $i;
    if (count($arrRow) == $counter || $i == 100) {
        echo implode(' ', $arrRow) . PHP_EOL;
        $arrRow = [];
        $counter++;
    }
}
//на PHP) Задан массив 5 на 7, который заполнен случайными числами от 1 до 1000.
// Нужно вывести массив, сумму чисел по строкам и сумму чисел по колонкам.

//наполняем матрицы случайными числами.
$matrix = $matrix2 = [];
for ($r = 0; $r < 5; $r++) {
    for ($row = 0; $row < 7; $row++) {
        $number = rand(0, 1000);
        $matrix[$r][] = $number;
        $matrix2[$row][] = $number; // как будто мы перевернули матрицу.
    }
}
//сумма по горизонтали
foreach ($matrix as $oneRow) {
    echo implode("\t", $oneRow) . '||' . array_sum($oneRow) . "\n";
}

//сумма по вертикали
foreach ($matrix2 as $oneRow) {
    echo array_sum($oneRow) . "\t";
}


