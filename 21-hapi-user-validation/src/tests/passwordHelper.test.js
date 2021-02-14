const assert = require('assert')
const { Console } = require('console')
const PasswordHelper = require('../helpers/passwordHelper')

const SENHA = 'Eick@32123123'
const HASH = '$2b$04$XSFzIxV24LzpwzxSO7m8Ju4.lMvhHacvafuYZHgIVaQ.xghkDLWxe'

describe('UserHelper test suite', function() {
    it('Deve gerar um hash a partir de uma senha', async () => {
        const result = await PasswordHelper.hashPassword(SENHA)

        assert.ok(result.length > 10)
    })

    it('Deve comparar uma senha e seu hash', async () => {
        const result = await PasswordHelper.comparePassword(SENHA, HASH)

        assert.ok(result)
    })
})