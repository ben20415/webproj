let questions = [{
        "question": "你去試鏡，導演讓你即興來一段，你會演什麼？",
        "answers": [
            ["被暗戀的人的打槍戲", 2],
            ["被壞人欺負的可憐戲", 3],
            ["跟傻白甜的女生交往戲", 4]
        ]
    },
    {
        "question": "你的試鏡通過了，讓你兩天後進劇組，地方很偏，你會去嗎？",
        "answers": [
            ["會", 3],
            ["不會", 4],
            ["還好", 5]
        ]
    },
    {
        "question": "進劇組後，導演讓你跑龍套，你會接受嗎？",
        "answers": [
            ["會", 4],
            ["不會", 5],
            ["還好", 6]
        ]
    },
    {
        "question": "你希望這部戲什麼成分多點？",
        "answers": [
            ["愛情", 5],
            ["動作", 6],
            ["搞笑", 7]
        ]
    },
    {
        "question": "你對於這部戲的情節有要求嗎？",
        "answers": [
            ["有，至少不太狗血", 6],
            ["沒有，把我演的好看一點就行了", 7],
            ["都沒差，有錢領就好", 8]
        ]
    },
    {
        "question": "由於你非常不喜歡導演給的這個角色，所以無法進入角色，再演下去也只是會拖累劇組，你會怎麼辦？",
        "answers": [
            ["繼續咬牙堅持下去，說不定後面情況會好點", 7],
            ["跟導演說換個角色", 8],
            ["直接拒演", "A"]
        ]
    },
    {
        "question": "你被人欺負了，但是你有秘密武器可以對付他，你會怎麼做？",
        "answers": [
            ["如果不嚴重，算了，得饒人處且饒人", 8],
            ["打回去", 9],
            ["回去找師父求救", 10]
        ]
    },
    {
        "question": "你覺得以下表演哪個更難點？",
        "answers": [
            ["笑中帶淚", 9],
            ["笑裏藏刀", "A"],
            ["激情戲", "B"]
        ]
    },
    {
        "question": "以下電影你最愛哪部？",
        "answers": [
            ["星際效應", "C"],
            ["喜劇之王", "D "],
            ["絕地任務 ", "A "]
        ]
    },
    {
        "question": "你的性格是？",
        "answers": [
            ["浪漫的", "B"],
            ["好奇心重", "C"],
            ["外向的", "D"]
        ]
    }

];

let finalAnswers = {
    "A": ["電影類型 ： 動作片", "你適合演動作片。有著安靜外表的你，看似柔弱，實則爆發力驚人。並且動作片中帥氣的動作和俠客式的情節，讓你可以過足當英雄的癮。"],
    "B": ["電影類型 ： 愛情片", "你適合演愛情片，男女主人公之間的感情糾葛。你對待感情專一認真，有著豐富的心理活動，體貼入微，能夠輕易觀察到異性的各種變化，所以需要大量情感輸入的愛情片最適合你！"],
    "C": ["電影類型 ： 科幻片", "你適合演科幻片。如果你來演科幻片，一定能大大滿足你的想象，哦，原來它是這樣被拍出來的！"],
    "D": ["電影類型 ： 喜劇片", "你適合演喜劇片。能使別人哭很容易，但是要讓別人真心的笑就很難了，這需要人的表演張弛有度。而你本身是一個很樂觀的人，生活中充滿了快樂。有著這樣可愛性格的你，演喜劇片最適合了！"]
};