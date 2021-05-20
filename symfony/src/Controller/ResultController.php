<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class ResultController extends AbstractController
{
    /**
     * @Route("/result", name="result")
     */
    public function index(Request $request): Response
    {
        $shape = $request->get('shape');
        if ($shape == 'circle') {
            $radius = $request->get('radius');
            $result = 2 * $radius;
        } elseif ($shape == 'triangle') {
            $base = $request->get('base');
            $height = $request->get('height');
            $result = (3/2 * $base * $height) + (1/2 * $base * $base);
        }

        return $this->render('result.html.twig', [
            'subtitle' => 'Your calculation is complete.',
            'shape' => $shape,
            'result' => $result,
        ]);
    }
}
