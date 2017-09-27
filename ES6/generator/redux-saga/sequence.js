import { put } from 'redux-saga/effects'

function* playLevelOne() {

}

function* playLevelTwo() {

}

function* playLevelThree() {

}

function showScore(score) {
    return { type: 'SHOW_SCORE', score }
}

function* game() {
    const score1 = yield* playLevelOne()
    yield put(showScore(score1))

    const score2 = yield* playLevelTwo()
    yield put(showScore(score2))

    const score3 = yield* playLevelThree()
    yield put(showScore(score3))
}