<?

namespace App\Entity;

class TriangleSize
{
    protected $base;
    protected $height;

    function __construct() 
    {
        $this->base = 5;
        $this->height = 5;
    }

    public function getBase(): int
    {
        return $this->base;
    }

    public function setBase(int $base): void
    {
        $this->base = $base;
    }

    public function getHeight(): int
    {
        return $this->height;
    }

    public function setHeight(int $height): void
    {
        $this->height = $height;
    }
}