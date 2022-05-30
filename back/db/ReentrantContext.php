<?php

namespace back\db;

use Nette\Database\Context;

/**
 * Actúa como Nette\Database\Context, pero permite llamar a beginTransaction más de una vez.
 *
 * De esta forma, es posible componer varios métodos que todos utilizan transacciones de por sí,
 * sin tener que actualizarlos para no usar transacciones cuando ya están activas.
 */
class ReentrantContext extends Context
{
    private int $rcTransactionDepth = 0;

    public function beginTransaction(): void
    {
        if ($this->rcTransactionDepth === 0) {
            parent::beginTransaction();
        }
        $this->rcTransactionDepth += 1;
    }

    public function commit(): void
    {
        if ($this->rcTransactionDepth === 1) {
            parent::commit();
        }
        $this->rcTransactionDepth -= 1;
    }

    public function rollBack(): void
    {
        if ($this->rcTransactionDepth === 1) {
            parent::rollBack();
        }
        $this->rcTransactionDepth -= 1;
    }
}
