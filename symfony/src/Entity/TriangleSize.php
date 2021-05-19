<?

namespace App\Entity;

class TriangleSize
{
    protected $size;
    protected $base;
    protected $height;

    public function getSize(): int
    {
        return $this->size;
    }

    public function setSize(int $size): void
    {
        $this->size = $size;
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