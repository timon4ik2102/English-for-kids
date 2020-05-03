# english-for-kids - приложение для изучения английских слов детьми.

[Link](https://efkbytimon4ik.netlify.app/).

#### Описание страниц
_Главная страница приложения_
- на главной странице приложения размещаются ссылки на страницы с категориями слов
- минимальное количество категорий - восемь
- каждая ссылка содержит тематическую картинку и название категории
- ссылки дублируются в выезжающем боковом меню, которое открывается и скрывается по клику на иконку в левом верхнем углу страницы
- на главной странице приложения и на страницах категорий есть переключатель Train/Play (тренировка/игра)
_Страница категории_
-страница категории содержит название категории и карточки со словами соответствующей тематики
-минимальное количество карточек со словами в каждой категории - восемь
-каждая карточка содержит тематическую картинку и слово на английском языке
-при клике по карточке звучит произношение слова на английском языке
-на каждой карточке есть кнопка, при клике по которой карточка переворачивается. На оборотной стороне карточки размещается перевод слова
-обратный поворот карточки на лицевую сторону происходит автоматически, когда курсор мыши перемещается за её границы

###### Режим тренировки:

 -при клике по карточке звучит произношение слова на английском языке
 -на каждой карточке есть кнопка, при клике по которой карточка поворачивается, на обратной стороне указан перевод слова. Когда курсор мыши перемещается за границы карточки, она автоматически поворачивается на лицевую сторону

 ###### Режим игры:
 -кликом по переключателю Train/Play включается режим игры. В режиме игры указанные выше возможности режима тренировки отключаются, -кнопка, при клике по которой карточка переворачивалась, и текст на карточке скрываются. Появляется кнопка "Start game". На карточке остаётся только изображение, которое занимает всю её площадь (если это не противоречит вашему дизайну)
 -после клика по кнопке "Start game" звучит английское произношение рандомного слова из тех, что находятся на странице. Для каждой страницы, и для каждой игры рандомные слова генерируются по-новой
 -после первого клика по кнопке "Start game" надпись на ней меняется на иконку "Repeat", меняется внешний вид кнопки. При клике по кнопке "Repeat" произношение слова звучит ещё раз
 -если пользователь кликнул по активной карточке с неправильным ответом, раздаётся звуковой сигнал "error"
 -если пользователь кликнул по активной карточке с правильным ответом, раздаётся звуковой сигнал "correct" и после него звучит произношение рандомного слова из тех, которые ещё не звучали
- карточка с угаданным словом становится неактивной, при этом изменяется её внешний вид. Клики по неактивной карточке звуковыми эффектами не сопровождаются, на счёт игры не влияют
 -после начала игры каждый клик по активной карточке является правильным или неправильным ответом. Эти ответы отображаются в виде звёздочек (или других символов) разного цвета в шкале с рейтингом, которая появляется в режиме игры. Если звёздочек слишком много и -шкала заполнена ими полностью, предыдущие звёздочки скрываются, а новые продолжают добавляться
 -когда угаданы все слова в категории: если все слова угаданы правильно, звучит сигнал "success", карточки со словами скрываются, на странице отображается радостный смайлик (или другая картинка);если при угадывании слов были ошибки, звучит сигнал "failure", карточки со словами скрываются, на странице отображается грустный смайлик (или другая картинка) и количество допущенных ошибок.
приложение автоматически перенаправляет на главную страницу со списком категорий