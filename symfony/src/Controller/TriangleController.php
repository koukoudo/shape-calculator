<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TriangleController extends AbstractController
{
    /**
     * @Route("/triangle", name="triangle")
     */
    public function index(): Response
    {
        return $this->render('circle/index.html.twig', [
            'controller_name' => 'TriangleController',
        ]);
    }
}